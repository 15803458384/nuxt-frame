
export const state = () => ({
  value: 'Hello World',
  list: [1, 2, 3, 4, 5]
});

export const getters = {
  include: (state) => (val) => {
    return state.list.indexOf(val) > -1;
  }
};

export const mutations = {
  SET_VALUE(state, value) {
    state.value = value;
  }
};

export const actions = {
  async getInfo({ state, commit }, val) {
    console.log(val);
    commit('SET_VALUE', val);
  }
};