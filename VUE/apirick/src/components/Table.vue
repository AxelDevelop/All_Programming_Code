<template>
  <div>
    <b-table selectable select-mode="single" @row-selected="goTo" :fields="fields" :items="items">
      <template :href="`#${data.value.replace(/[^a-z]+/i,'-').toLowerCase()}`" #cell(name)="data">
        {{ data.value }}
      </template>
    </b-table>
  </div>
</template>


<script>

export default {
  name: 'Table',
  data(){
    return{
      fields: ['id','name', 'species', 'gender', 'origin.name'],
      items:[],
      types: [
          'text',
          'number',
          'email',
          'password',
          'search',
          'url',
          'tel',
          'date',
          'time',
          'range',
          'color'
        ]

    }
  },
  methods: {
     goTo(character){
       console.log(character);
      this.$router.push({path: `character/${character[0].id}`})   
     }
  },
  props:{
    msg: String,
  },
  mounted(){
    let vue = this;
    this.$api.get('https://rickandmortyapi.com/api/character')
    .then(function(response){
      vue.items.push(...response.data.results);
    });
  },
}
</script>
