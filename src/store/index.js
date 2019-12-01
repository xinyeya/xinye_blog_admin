import Vue from 'vue'
import Vuex from 'vuex'
import { getStorage, saveStorage } from '@/utils/storge.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: getStorage()
  },
  mutations: {
    setUser (state, data) {
      // 修改仓库中的状态
      state.user = data
      // 重新存入缓存
      saveStorage(state.user)
    }
  },
  actions: {
  },
  modules: {
  }
})

export default store
