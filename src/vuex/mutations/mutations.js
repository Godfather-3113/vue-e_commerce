export default {
    SET_PRODUCTS_STATE: (state, products) => {
        state.products = products;
    },
    SET_CART: (state, product)=>{
        if (state.cart.length) {
            let isItemExists = false;
            state.cart.map(function (item){
                if (item.id === product.id){
                    isItemExists = true;
                    item.quantity++
                }
            })
            if (!isItemExists){
                state.cart.push(product)
            }
        }else {
            state.cart.push(product)
        }
    },
    TOTAL_COAST:(state, index)=>{
            if (state.cart[index].length){
                let totalPrice='';
                state.cart[index].map(function (item){
                    if (item.discount === 0){
                        totalPrice = item.price * item.quantity
                    }else {
                        totalPrice =  ( ( item.discount * item.price ) / 100 ) + item.price
                    }
                })
            }
    },
    REMOVE_FROM_CART: (state,index) => {
        state.cart.splice(index, 1)
    },
    INCREMENT: (state,index) => {
        state.cart[index].quantity++
    },
    DECREMENT: (state,index) => {
        if (state.cart[index].quantity > 1 ){
            state.cart[index].quantity--
        }
    },
}