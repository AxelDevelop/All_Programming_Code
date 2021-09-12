<template>
  <div class="hello">
      <h1>{{ msg }}</h1>
  <b-row>
    <b-col class="md">
        <b-table  bordered hover :items="posts"
        style="max-width:200px"
        ></b-table>
    </b-col>
  </b-row>

  </div>

</template>

<script>

export default {
  name: 'Table',
  data(){
    return{
      posts:[]
    }
  },
  props:{
    msg: String
  },
  mounted(){
    let vue = this;
    this.$api.get('https://rickandmortyapi.com/api/character')
    .then(function(response){
      vue.posts = response.data.results;
    });
  }
}
</script>
