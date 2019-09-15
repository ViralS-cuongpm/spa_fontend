import firebase from 'firebase/app'
import 'firebase/auth'
import {currentUser} from '@/constants/config'
import axios from 'axios'
import AuthenticationUtils from '../../common/AuthenticationUtils'

axios.defaults.headers.common['Authorization'] = AuthenticationUtils.accessToken
const DOMAIN = 'http://localhost:8005'

export default {
  state: {
    currentUser: localStorage.getItem('user') != null ? JSON.parse(localStorage.getItem('user')) : null,
    loginError: null,
    processing: false
  },
  getters: {
    currentUser: state => state.currentUser,
    processing: state => state.processing,
    loginError: state => state.loginError
  },
  mutations: {
    setUser (state, payload) {
      state.currentUser = payload
      state.processing = false
      state.loginError = null
    },
    setLogout (state) {
      state.currentUser = null
      state.processing = false
      state.loginError = null
    },
    setProcessing (state, payload) {
      state.processing = payload
      state.loginError = null
    },
    setError (state, payload) {
      state.loginError = payload
      state.currentUser = null
      state.processing = false
    },
    clearError (state) {
      state.loginError = null
    }
  },
  actions: {
    async login ({commit}, payload) {
      const params = {
        grant_type: 'password',
        client_id: 2,
        client_secret: 'DFF6f2IX9TOhZ2vqH73xYQlxS92ogMpxPTY1fDQx',
        username: 'phamminhcuong1704bnfrv@gmail.com',
        password: 123456,
        provider: 'users'
      }

      try {
        const res = await axios.post(DOMAIN + '/api/login', params);
        AuthenticationUtils.saveAuthenticationData(res.data.data);
      } catch (e) {
        console.log(e)
      }
    },
    signOut ({commit}) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          localStorage.removeItem('user')
          commit('setLogout')
        }, _error => {
        })
    },
  },
}
