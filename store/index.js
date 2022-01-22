import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    theme: 'light',
    device: 'desktop',// desktop, mobile
    locales: ['en-US', 'zh-CN'],
    locale: 'zh-CN',
    cooks: [],//烹饪列表
    ups: [],//所得列表
    codes: [],//代码列表
    lifes: [],//生活列表
    details: {},//文章详情
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

    /**
     * 切换语言
     *
     * @param {*} state
     * @param {*} payload
     */
    change_lang(state, payload){
      if (state.locales.indexOf(payload) !== -1) {
        state.locale = payload
      }
    },

    /**
     * 同步烹饪列表数据
     *
     * @param {*} state
     * @param {*} payload
     */
    change_cooks(state, payload){
      state.cooks = payload
    },
    /**
     * 同步所得列表数据
     *
     * @param {*} state
     * @param {*} payload
     */
    change_ups(state, payload){
      state.ups = payload
    },
    /**
     * 同步生活列表数据
     *
     * @param {*} state
     * @param {*} payload
     */
    change_lifes(state, payload){
      state.lifes = payload
    },
    /**
     * 同步code数据
     *
     * @param {*} state
     * @param {*} payload
     */
    change_codes(state, payload){
      state.codes = payload
    },
    /**
     * 同步文章详情
     *
     * @param {*} state
     * @param {*} payload
     */
    change_details(state, payload){
      state.details = payload
    }
  },
  actions: {

    /**
     *
     * 获取烹饪列表
     * @param {*} {commit}
     */
    async getCooks({commit}){
      const cooks = await this.$axios.$get('/api/cook');
      commit('change_cooks', cooks.data);
      const device = cooks.mobile ? 'mobile' : 'desktop';
      commit('change_device', device);
    },
    /**
     *
     * 获取所得列表
     * @param {*} {commit}
     */
    async getUps({commit}){
      const ups = await this.$axios.$get('/api/up');
      commit('change_ups', ups.data);
      const device = ups.mobile ? 'mobile' : 'desktop';
      commit('change_device', device);
    },
    /**
     *
     * 获取code列表
     * @param {*} {commit}
     */
    async getCodes({commit}){
      const codes = await this.$axios.$get('/api/code');
      commit('change_codes', codes.data);
      const device = codes.mobile ? 'mobile' : 'desktop';
      commit('change_device', device);
    },
    /**
     *
     * 获取生活列表
     * @param {*} {commit}
     */
    async getLifes({commit}){
      const lifes = await this.$axios.$get('/api/life');
      commit('change_lifes', lifes.data);
      const device = lifes.mobile ? 'mobile' : 'desktop';
      commit('change_device', device);
    },
    /**
     *
     * 获取文章详情
     * @param {*} {commit}
     */
    async getDetails({commit}, payload){
      const details = await this.$axios.$get('/api/details?id=' + payload);
      commit('change_details', details.data);
      const device = details.mobile ? 'mobile' : 'desktop';
      commit('change_device', device);
    }
  }
})

export default store