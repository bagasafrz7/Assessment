import axios from 'axios'

export default {
  state: {
    product: {}
  },
  mutations: {
    setProduct(state, payload) {
      state.product = payload
    }
  },
  actions: {
    getProduct(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get('http://dummy.restapiexample.com/api/v1/employees')
          .then((response) => {
            console.log(response.data.data)
            context.commit('setProduct', response.data.data)
          })
          .catch((error) => {
            console.log(error)
          })
      })
    }
  },
  getters: {
    getDataProduct(state) {
      return state.product
    }
  }
}
