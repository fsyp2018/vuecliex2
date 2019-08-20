import axios from 'axios'

export default {
  namespaced: true,
  strict: true,
  state: {
    products: []
  },
  mutations: {
    PRODUCTS (state, payload) {
      state.products = payload
      // console.log(state.products.length)
      for (let i = state.products.length - 1; i >= 0; i--) {
        state.products[i].num = '1'
      }
    },
    CHANGE (state, payload) {
      const pnum = payload[0]
      const pindex = payload[1]
      state.products[pindex].num = pnum
    }
  },
  actions: {
    getProducts (context, payload) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM}/products/all`
      context.commit('LOADING', true, { root: true })
      axios.get(api).then(response => {
        context.commit('PRODUCTS', response.data.products.filter(item => {
          if (item.category === payload) {
            return true
          }
        }))
        context.commit('LOADING', false, { root: true })
      })
    },
    nchange (context, payload) {
      context.commit('CHANGE', payload)
    }
  },
  getters: {
    products: state => state.products
  }
}
