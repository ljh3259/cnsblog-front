const state = {
  main: {
    name: localStorage.getItem('userName'),
    position: localStorage.getItem('userName'),
    state: {
      color: '#3c763d',
      name: '온라인'
    },
    createdAt: new Date()
  }
}

const mutations = {

}

export default {
  state,
  mutations
}
