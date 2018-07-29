import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const names = {
  LAST_CIGARETTE_SET: 'LAST_CIGARETTE_SET',
  PACK_PRICE_SET: 'PACK_PRICE_SET'
}

export const store = new Vuex.Store({
  state: {
    lastCigarette: null,
    packPrice: null
  },
  mutations: {
    [names.LAST_CIGARETTE_SET] (state, lastCigarette) {
      state.lastCigarette = lastCigarette
    },
    [names.PACK_PRICE_SET] (state, packPrice) {
      state.packPrice = packPrice
    }
  }
})
