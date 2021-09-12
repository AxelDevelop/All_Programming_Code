<template>
    <div>
        <div>
          <Nav/>
        </div>
      <b-container >
        <div>
          <img alt="Vue logo" src="../assets/logo.png">
        </div>
          <Table msg="Welcome to Rick and Morti API"/>
      </b-container>
    </div>
</template>

<script>
// @ is an alias to /src
import Table from '@/components/Table.vue'
import Nav from '@/components/Nav.vue'


export default {
  name: 'Home',
  components: {
    Table,
    Nav
  }
}
</script>
