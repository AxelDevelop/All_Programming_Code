<template>
  <div>
      <h1 >{{ msg }}</h1>
      <button id="next">Next</button>
      <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

      <b-table 
      selectable 
      select-mode="single" 
      @row-selected="goTo" 
      :fields="fields" 
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      >
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
      page:[],
      items:[],
      perPage: 20,
      rows:100*34,
      currentPage: 1,
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
  computed: {
  },
  methods: {
     goTo(character){
       const info = {
         id : character[0].id,
         name : character[0].name,
         status : character[0].status,
         type : character[0].type,
         gender : character[0].gender,
         origin : character[0].origin,
         image : character[0].image,
       }
      this.$router.push({path: `character/${character[0].id}`})
      localStorage.setItem('character', JSON.stringify(info))
     },
  },
  props:{
    msg: String,
  },
  mounted(){
    const getApi = () => {
    let vue = this;
    const url = `https://rickandmortyapi.com/api/character/?page=3` 
    this.$api.get(url)
    .then(function(response){
      vue.items.push(...response.data.results);
    });
    }
    getApi();
  },
}
</script>
