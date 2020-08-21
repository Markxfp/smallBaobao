import {
    REVICE_ADDRESS,
    REVICE_CATEGORYS,
    REVICE_SHOPS
} from './mutation-types'
import {
    reqAddress,
    reqFoodCategorys,
    reqShops
} from '../api'
export default {
    async getAddress({ commit, state }) {
        // const geohash = state.latitude + ',' + state.longitude;
        // const result = await reqAddress(geohash);
        // if (result.code == 0) {
        //     const address = result.data.address;
        //     commit('REVICE_ADDRESS', { address })
        // }
        commit(REVICE_ADDRESS, { address: '上杭' })

    },
    async getCategorys({ commit, state }) {
        // const result = await reqFoodCategorys();
        // if (result.code == 0) {
        //     const categorys = result.data;
        //     commit('REVICE_CATEGORYS', { categorys });
        // }
        commit(REVICE_CATEGORYS, { categorys: [1, 3, 54, 45, 6, 67, 5] })
    },
    async getShops({ commit, state }) {
        // const { latitude, longitude, } = state;
        // const result = await reqShops(latitude, longitude);
        // let shops = result.data;
        commit(REVICE_SHOPS, { shops: [324, 4, 546, 56, 4, 4, 4, 4, ] });
    }
}