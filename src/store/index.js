import Vue from 'vue'
import Vuex from 'vuex'
import { getStorage } from '@/utils/storge.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    role: getStorage(),
    user_key: 'user_info',
    role_key: 'role'
  },
  mutations: {
    setRole (state, data) {
      // 将数据重新赋值
      state.role = data
    }
  },
  actions: {
  },
  modules: {
  }
})

export default store
