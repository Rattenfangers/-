import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const myStore = new Vuex.Store({
  state:{
    count: 0
  },
  mutations:{
    increment (state){
      state.count++
    }
  },
})

export default myStore;
