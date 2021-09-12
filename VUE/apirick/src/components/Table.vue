<template>
  <div>
          <h1 >{{ msg }}</h1>
      <b-table selectable select-mode="single" @row-selected="goTo" :fields="fields" :items="items">
        <template :href="`#${data.value.replace(/[^a-z]+/i,'-').toLowerCase()}`" #cell(name)="data" >
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

      posts:[],
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
       const info = {
         id : character[0].id,
         name : character[0].name,
         status : character[0].status,
         type : character[0].type,
         gender : character[0].gender,
         origin : character[0].origin.name,
         image : character[0].image,
       }
      this.$router.push({path: `character/${character[0].id}`})
      localStorage.setItem('character', JSON.stringify(info))
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
