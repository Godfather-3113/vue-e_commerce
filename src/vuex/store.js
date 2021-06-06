import Vue from "vue";
import Vuex from "vuex";


import actions from "@/vuex/actions/actions";
import mutations from "@/vuex/mutations/mutations";
import getters from "@/vuex/getters/getters";

Vue.use(Vuex);

let store = new Vuex.Store({
    state:{
        products: [],
        cart: []
    },
    mutations,
    actions,
    getters,
    mounted(){
        this.GET_PRODUCTS_FROM_API()
    }
})

export default store;
