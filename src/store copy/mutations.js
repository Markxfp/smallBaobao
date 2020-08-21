import {
    REVICE_ADDRESS,
    REVICE_CATEGORYS,
    REVICE_SHOPS
} from './mutation-types'
export default {

    [REVICE_ADDRESS](state, { address }) {
        state.address = address;
    },
    [REVICE_CATEGORYS](state, { categorys }) {
        state.categorys = categorys;
    },
    [REVICE_SHOPS](state, { shops }) {
        state.shops = shops;
    }
}