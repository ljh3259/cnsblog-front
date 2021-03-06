import * as types from '../mutation-types'

const state = {
  main: [],
  board: [],
  user: []
}

const mutations = {
  [types.FETCH_PRODUCT] (state, products) {
    state.main = products
  },
  [types.BOARD_PRODUCT] (state, products) {
    state.board = products.data.result
  },
  [types.BOARD_DETAIL_PRODUCT] (state, products) {
    state.board = products.data.result
  },
  [types.REGIST_PRODUCT] (state, products) {
    alert(`[${products.code.code}] : ${products.code.message}`)
  },
  [types.ERROR_PRODUCT] (state, products) {
    alert('알 수 없는 오류가 발생하였습니다. 서버 관리자에게 문의하세요.')
  },
  [types.LOGIN_PRODUCT] (state, products) {
    localStorage.setItem('userName', products.data.user_name)
    localStorage.setItem('loginYn', 'Y')
    localStorage.setItem('token', products.data.access_token)
    location.href = '/'
  },
  [types.LOGOUT_PRODUCT] (state) {
    localStorage.setItem('userName', 'anonymous')
    localStorage.setItem('loginYn', 'N')
    localStorage.setItem('token', '')
    location.href = '/'
  },
  [types.CHECK_TOKEN_PRODUCT] (state, response) {
    localStorage.setItem('userName', 'anonymous')
    localStorage.setItem('loginYn', 'N')
    localStorage.setItem('token', '')
  }
}

export default {
  state,
  mutations
}
