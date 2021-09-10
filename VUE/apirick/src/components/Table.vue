<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
        <table class="rwd-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Species</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody v-for="(item, index) of posts" :key="index">
            <td>{{item}}</td>
          </tbody>
    </table>
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
      vue.posts = response.data;
    });
  }
}
</script>
