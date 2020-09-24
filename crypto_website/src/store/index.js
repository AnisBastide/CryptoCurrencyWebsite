import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//1. Import coingecko-api
const CoinGecko = require('coingecko-api');

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();


export default new Vuex.Store({
  state: {
    cryptoList:[]
  },
  mutations: {
    fillCryptoList(state,payload){
      state.cryptoList=payload
    }
  },
  actions: {
    async getCryptoList(context){
      const result = await CoinGeckoClient.coins.markets();
      context.commit('fillCryptoList',result)
    }
  },
  modules: {
  }
})
