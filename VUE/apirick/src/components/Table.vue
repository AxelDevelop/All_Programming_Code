<template>
  <div class="ml-1">
  <b-row  align-content="center">
        <h1 >{{ msg }}</h1>
        <b-form-input :type="types.number" placeholder="Busca tu personaje" class="mb-4"></b-form-input>
            <b-table id="table" bordered  hover :items="posts" :fields="fields" v- selectable select-mode="single" foot-clone >
              <template #cell(posts)='posts'>
                {{posts[0]}}
              </template>
            </b-table>
  </b-row>
  </div>

</template>

<script>

export default {
  name: 'Table',
  data(){
    return{
      fields: ['id','name', 'species', 'gender', 'origin.name'],
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
  props:{
    msg: String,
  },
  mounted(){
    let vue = this;
    this.$api.get('https://rickandmortyapi.com/api/character')
    .then(function(response){
      vue.posts = response.data.results;
    });
  },
}
</script>
