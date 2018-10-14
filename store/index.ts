interface AppState {
  count: number
}

export const state = (): AppState => ({
  count: 0
})

export const mutations = {
  increment(state: AppState) {
    state.count++
  },
  decrement(state: AppState) {
    state.count--
  },
  reset(state: AppState) {
    state.count = 0
  }
}

/**
 * Actions
 */

export const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  reset: ({ commit }) => commit('reset')
}

export const getters = {
  count: (state: AppState) => state.count
}
