<template>
  <div class="v-cart-item">
    <v-popup
      v-if="isDiscountModalViseble"
      defaultBtnTitle="Set discount"
      @closePopup="closeInfoPopup"

    >
      <p>{{cart_item_data.product_name}} руб.</p>
      <p>{{ cart_item_data.price}} руб.</p>
      <input
          class="item-discount"
          name="item-discount"
          id="item-discount"
          type="text"

          v-bind:value="cart_item_data.discount  ">

    </v-popup>
    <div class="popupBody">
      <div class="item_in_basket">
        <h3>{{ cart_item_data.product_name }}</h3>
        <div class="basket_qty">
          <div class="basket_qty_items">
            <div class="items1">1</div>
            <div class="items1">1</div>
            <div
                class="items1"
                @click="discountModal"
            >{{ cart_item_data.discount }}%</div>
          </div>
          <div class="items2">
            <span
                class="qty_decrement"
                @click="decrementItem"
            >-</span>
            <p class="qty">{{ cart_item_data.quantity }}</p>
            <span
                class="qty_increment"
                @click="incrementItem"
            >+</span>
          </div>
          <div class="items3" @click="deleteFromCart" >X</div>
        </div>
         <p>{{ cart_item_data.price}} руб.</p>
      </div>
    </div>

  </div>
</template>

<script>
import vPopup from '@/components/popup/v-popup'
import {mapActions} from "vuex";
export default {
  name: "cart-item",
  components:{
    vPopup
  },
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {

      isDiscountModalViseble: false
    }
  },
  computed: {

  },
  methods: {
    totalCoast(){
      this.$emit('total')
    },
    discountModal(){
      this.isDiscountModalViseble = true;
    },
    closeInfoPopup(){
      this.isDiscountModalViseble = false;
    },
    decrementItem()  {
      this.$emit('decrement')
    },
    incrementItem() {
      this.$emit('increment')

    },
    deleteFromCart(){
      this.$emit('deleteFromCart')
    }
  },
  mounted() {

    this.$set(this.cart_item_data,'quantity', 1)
  }

}
</script>

<style lang="scss">
.product {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  width: 800px;
  min-height: 600px;
  &_item {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
}


  .v-cart-item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 8px 0 #e0e0e0;

    margin-bottom: $margin;
    .quantity__btn {
      cursor: pointer;
    }
  }
.item-discount{
  margin: 10px;
}
</style>