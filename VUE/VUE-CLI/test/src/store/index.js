import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fruits:[
        {nombre: 'Manzana', cantidad:0},
        {nombre: 'Pera', cantidad:0},
        {nombre: 'Guayaba', cantidad:0}
    ],
  },
  mutations: {
    increment(state, index){
      state.fruits[index].cantidad ++
    },
    reload(state){
      state.fruits.forEach(element => {
        element.cantidad = 0
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
