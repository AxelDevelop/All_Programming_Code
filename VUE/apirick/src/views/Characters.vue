<template>
  <div >
    <Character/>  
  </div>
</template>


<script>
import Character from '@/components/Character.vue'

export default {
  name: 'Characters',
  components:{
    Character
  },
  data(){
    return{
      data:[]
    }
  },
  methods: {
  },
  props:{
  },
  mounted(){

  },
}
</script>
