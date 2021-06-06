import axios from "axios";

export default {
    GET_PRODUCTS_FROM_API({ commit }){
        return axios('http://localhost:3000/products',{
            method: "GET"
        })
            .then((products)=>{
                commit('SET_PRODUCTS_STATE', products.data);
                return products;
               //  console.log(products)
            })
            .catch((error) =>{
                console.log(error)
            })
    },

    ADD_TO_CART({commit}, product){
        commit('SET_CART', product);
    },
    INCREMENT_CART_ITEM({commit}, index){
        commit('INCREMENT',index)
    },
    DECREMENT_CART_ITEM({commit}, index){
        commit('DECREMENT',index)
    },
    DELETE_FROM_CART({commit}, index) {
        commit('REMOVE_FROM_CART', index)
    },
    GET_TOTAL_DISCOUNT({commit}, index){
        commit('TOTAL_COAST', index)
    }
}