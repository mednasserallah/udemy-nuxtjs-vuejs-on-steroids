import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            SET_POSTS(state, posts) {
                state.loadedPosts = posts;
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
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
            setPosts(vuexContext, posts) {
                vuexContext.commit('SET_POSTS', posts);
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts;
            }
        }
    })
}

export default createStore;