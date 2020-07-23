import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    orders: []
  },
  getters: {
    orders: state => {
      return state.orders
    }
  },
  mutations: {
    SET_ORDERS(state, orders) {
      state.orders = orders
    }
  },
  actions: {
    GET_ORDERS({
      commit
    }) {
      axios.get('/orders.json').then(res => {
        console.log('ajax...')
        commit('SET_ORDERS', res.data)
      })
    }
  },
  modules: {}
})