const counter = {
  namespaced: true,
  state: {
    counter: 0
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--;
    }
  },
  getters: {
    counter(state) {
      return state.counter
    }
  }
}

export default counter;