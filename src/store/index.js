import Vue from 'vue';
import Vuex from 'vuex';
import { MOCK_API } from '@/store/options';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
  },

  getters: {
    posts (state) {
      return state.posts;
    }
  },

  mutations: {
    posts (state, payload) {
      state.posts = payload;
    }
  },

  actions: {
    async getPosts ({ commit }, requestData = '') {
      commit('posts', []);
      const res = await fetch(`${MOCK_API}${requestData}`)
      try {
        const data = await res.json();
        commit('posts', data);
      } catch (error) {
        console.error(error);
      }
    },

    // eslint-disable-next-line no-empty-pattern
    async updatePosts({}, updatesData) {
      console.log(' updatesData ', updatesData);
      const res = await fetch(`${MOCK_API}`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatesData)
      });
      try {
        const data = await res.json();
        console.info(data);
      } catch (error) {
        console.error(error);
      }
    }
  },
});
