

import { setCookie } from '~/utils/storage';
// getCookie('userInfo')
const state = () => ({
  userInfo: ''
});

const getters = {
  include: (state) => (val) => {
    return state.list.indexOf(val) > -1;
  },
  getUserInfo: (state) => () => {
    return state.userInfo;
  }
};

const mutations = {
  SET_VALUE(state, value) {
    state.value = value;
  },
  SET_USER_INFO(state, userInfo) {
    state.userInfo = userInfo;
    setCookie('userInfo', userInfo);
  },
};

const actions = {
  nuxtServerInit({ commit, state }, { req }) {
    console.log('nuxt init');
    if (req.headers.cookie) {
      let info = req.headers.cookie.split('=')[1];
      console.log(info);
      commit('SET_USER_INFO', info);
    }
  },
  async setToken({ state, commit }, val) {
    commit('SET_USER_INFO', val);
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};