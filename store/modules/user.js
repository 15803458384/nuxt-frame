const state = ({
	value: 'Hello World',
	list: [1, 2, 3, 4, 5]
});
const getters = {
	include: (state) => (val) => {
		return state.list.indexOf(val) > -1;
	}
};
const mutations = {
	SET_VALUE(state, value) {
		state.value = value;
	}
};
const actions = {
	async getInfo({ state, commit }, val) {
		console.log(val)
		commit('SET_VALUE', val);
	}
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};