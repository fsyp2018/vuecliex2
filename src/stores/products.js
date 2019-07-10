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
    }
  },
  getters: {
    products: state => state.products
  }
}
