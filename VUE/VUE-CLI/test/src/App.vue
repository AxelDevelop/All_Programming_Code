<template>
  <div id="app" class="container text-center">
    <hair></hair>
    <lista></lista>
  </div>
</template>

<script>
import hair from './components/hair.vue'
import lista from './components/lista.vue'


export default {
  name: 'App',
  components: {
    hair,
    lista
  }
}
</script>


