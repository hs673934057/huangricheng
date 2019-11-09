import axios from "axios";
const GET_MOVIES = 'GET_MOVIES'

export default {
    state: {
        movies: null,
    },
    actions: {
        getMovies({ commit }) {
            axios({
                url: '/ajax/movieOnInfoList',
                params: {
                    token: ''
                }
            }).then(res => {
                commit({
                    type: GET_MOVIES,
                    payload: res.data
                })
            })
        }
    },
    mutations: {
        GET_MOVIES(state, action) {
            state.movies = action.payload
        }
    },
}