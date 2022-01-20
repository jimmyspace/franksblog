import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    theme: 'light',
    device: 'desktop',// desktop, mobile
    locales: ['en-US', 'zh-CN'],
    locale: 'zh-CN'
  },
  mutations: {

    /**
     *
     *切换主题
     * @param {*} state
     * @param {*} payload light dark
     */
    change_theme (state, payload) {
      state.theme = payload
    },

    /**
     *
     *设备种类设置
     * @param {*} state
     * @param {*} payload  desktop, mobile
     */
    change_device (state, payload){
        state.device = payload
    },
    change_lang(state, payload){
      if (state.locales.indexOf(payload) !== -1) {
        state.locale = payload
      }
    }
  }
})

export default store