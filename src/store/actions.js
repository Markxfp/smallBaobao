import {
    REVICE_ADDRESS,
    REVICE_CATEGORYS,
    REVICE_SHOPS
} from './mutation-types'
export default {
    getAddress({ commit, state }) {
        commit(REVICE_ADDRESS, { address: '上杭县' })
    },
    getCategorys({ commit, state }) {
        commit(REVICE_CATEGORYS, { categorys: [1, 2, 3, 4, 5] })
    },
    getShops({ commit }) {
        commit(REVICE_SHOPS, { shops: [2, 2, 2, 2, 2, 2, ] })
    }
}