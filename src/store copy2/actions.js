import {
    REVICE_ADDRESS,
    REVICE_CATEGORYS,
    REVICE_SHOPS
} from './mutation-types'
export default {
    getAddress({ commit, state }) {
        commit(REVICE_ADDRESS, { address: '北京' })
    },
    getCategorys({ commit, state }) {
        commit(REVICE_CATEGORYS, { categorys: [1, 2, 3, 4, 5, 6, 7] })
    },
    getShops({ commit, state }) {
        commit(REVICE_SHOPS, { shops: [43, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3] })
    }
}