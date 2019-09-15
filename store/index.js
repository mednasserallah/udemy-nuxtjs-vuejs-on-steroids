import Vuex from 'vuex'

export const state = () => ({
    loadedPosts: []
});

export const mutations = {
    SET_POSTS(state, posts) {
        state.loadedPosts = posts;
    }
};

export const actions = {
    async nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
            vuexContext.commit('SET_POSTS', [
                {
                    id: "1",
                    title: "First Post",
                    previewText: "This is our first post!",
                    thumbnail:
                        "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
                },
                {
                    id: "2",
                    title: "Second Post",
                    previewText: "This is our second post!",
                    thumbnail:
                        "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
                }
            ]);
            resolve();
        })
    },
};

export const getters = {
    loadedPosts(state) {
        return state.loadedPosts;
    }
};