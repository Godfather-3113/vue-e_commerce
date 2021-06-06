<template>
  <div class="v-cart">
    <div class="main_section">
      <div class="popupModal">
        <div class="popupHeader">
          <div class="popupHeaderItem1">
            <div class="itemBlock1">
              <i class="fa  fa-cart-plus"></i>
              <div>Basket:{{ cart_data.length }}</div>
            </div>
          </div>
          <div class="popupHeaderItem2"></div>
          <div class="popupHeaderItem3"></div>
        </div>
          <p v-if="!cart_data.length">Cart is empty...</p>
        <v-cart-item
            v-for="(item, index) in cart_data"
            :key="item.id"
            :cart_item_data="item"
            @increment="increment(index)"
            @decrement="decrement(index)"
            @deleteFromCart="deleteFromCart(index)"
        />
        <div class="popupFooter">
          <div class="block1">
              <ul>
              <li>Total:</li>
              <li>Discount:</li>
              <li>Total Coast:</li>
            </ul>
            <ul>
              <li> {{ cartTotalCost }} руб.</li>
              <li> {{ discontPrice }}</li>
              <li>{{ cartTotalCost - discontPrice }}</li>

            </ul>
          </div>
          <div class="block2">
            <div class="block2_item1">block1_item1</div>
            <div class="block2_item2">block2_item2</div>
            <div class="block2_item3">block2_item3</div>
          </div>
          <div class="block3">
            <div class="block3_item1">PAY</div>
            <div class="block3_item2">DISCOUNT</div>
            <div class="block3_item3">DELIVERY</div>
          </div>
        </div>
      </div>
    </div>
<!--      <div class="v-catalog__link_to_cart">Back to Catalog</div>-->





  </div>


</template>

<script>
import vCartItem from './cart-item'
import {mapActions} from "vuex";

export default {
  name: "v-cart",
  components: {
    vCartItem
  },
  props: {
    cart_data:{
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return{
    }
  },
  computed: {

    discontPrice() {
      let result = []
      let itemQty =[]


      if (this.cart_data.length) {
        for (let item of this.cart_data) {
        let itemDis = item.discount
         let totalCoast = item.price * item.quantity
          let totalDiscount = ((itemDis) * totalCoast / 100 )  ;
          let result = totalDiscount * item.quantity;
          return result.toFixed(2);
        }
      }
        return 0

    },
    cartTotalCost() {
      let result = []
      let itemQty =[]
      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          itemQty = item.quantity
          result.push(item.price * item.quantity)
        }
        result = result.reduce(function (sum, el) {
          return sum + el;
        })
        return result;
      } else {
        return 0
      }
    }
  },
  methods: {
    ...mapActions([
      'GET_TOTAL_DISCOUNT',
      'INCREMENT_CART_ITEM',
      'DECREMENT_CART_ITEM',
       'DELETE_FROM_CART'
    ]),
    total(index){
      this.GET_TOTAL_DISCOUNT(index)
    },
    increment(index) {
      this.INCREMENT_CART_ITEM(index)
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index)
    },
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
    }
  }
}
</script>

<style lang="scss">
</style>