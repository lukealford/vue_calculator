export default {
    updateDisplay({commit}, payload) {
        commit('setDisplay',payload)
    },
    operatorClicked({commit}, payload) {
        commit('setOperator', payload)
    }
}