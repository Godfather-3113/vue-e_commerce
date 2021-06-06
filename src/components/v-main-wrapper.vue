<template>
  <div class="v-main-wrapper">
    <div class="catalog">
      <div class="main_section">
        <div class="header">
          <div class="header_item1"></div>
          <div class="header_item2"></div>
        </div>
        <div class="main_content">


          <v-catalog />
        </div>
      </div>
    </div>
      <div class="card-side">
        <v-cart
        v-if="CART.length"
        :cart_data="CART"
        />
      </div>



    </div>
</template>

<script>

import vCatalog from './catalog/v-catalog'
import vCart from './cart/v-cart'
import {mapGetters} from "vuex";


export default {
  name: "v-main-wrapper",
  components: {
    vCatalog,
    vCart,

  },
  props: {},
  data() {
    return {}
  },
  computed:{
    ...mapGetters([

        'CART'
    ])
  },
  methods: {},
  watch: {},
  mounted() {
    console.log('Hello Its working')
  }
}
</script>

<style lang="scss">
.v-main-wrapper{
  display:flex;
  justify-content: center;
}
.popupModal {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px #8cf1f1;
}
.popupHeader {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.popupHeaderItem1 {
  display: flex;
}
.popupHeaderItem1 .itemBlock1 {
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: inherit;
   height: 84px;
}

.popupHeaderItem2 {
  background: #E8E4E4;
  width: 384px;
  height: 40px;
}
.popupHeaderItem3 {
  background: #f3efef;
  width: 384px;
  height: 40px;
}
.popupBody {
  width: 384px;
  background: #54B5F3;
}
.basket_qty {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  outline: solid 1px #ffff;
  padding: 10px;
}
.basket_qty .items1 {
  width: 34px;
  height: 34px;
  background: #E1E1C0;
  border-radius: 33px;
  text-align: center;
  cursor: pointer;
}
.basket_qty_items {
  display: flex;
  width: 140px;
  justify-content: space-around;
}
.items2 {
  display: flex;
  align-items: center;
  height: 36px;
  background: #ffff;
}
.basket_qty .qty_decrement, .qty_increment {
  width: 36px;
  height: 36px;
  background: #C4C4C4;
  text-align: center;
  cursor: pointer;
}
.basket_qty .items2 p.qty {
  background: #FFFFFF;
  min-width: 65px;
  text-align: center;
  margin: 0;
}
.basket_qty .qty_decrement, .qty_increment {
  width: 36px;
  height: 36px;
  background: #C4C4C4;
  text-align: center;
  cursor: pointer;
}
.basket_qty .items3 {
  width: 34px;
  height: 34px;
  background: #E1E1C0;
  border-radius: 33px;
  text-align: center;
  cursor: pointer;
}
.popupFooter {
  position: relative;
  width: 384px;
  height: 243px;
  background: #F1F1F1;
}
.block1 {
  display: flex;
  justify-content: space-around;
  height: 120px;
}
.block1 ul {
  display: flex;
  list-style-type: none;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0;
}
.block2 {
  display: flex;
  justify-content: space-around;
}
.block2 .block2_item1, .block2_item2, .block2_item3 {
  width: 126px;
  height: 59px;
  background: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.block3 {
  display: flex;
  justify-content: space-around;
  margin-top: 3px;
}
.block3 .block3_item1 {
  width: 126px;
  height: 59px;
  background: #F24B4B;
}
.block3 .block3_item2 {
  width: 126px;
  height: 59px;
  background: #5A9FF8;
}
.block3 .block3_item3 {
  width: 126px;
  height: 59px;
  background: #82BB43;
}
.catalog {
  display: flex;
  padding: 0;
  margin: 0;
  width: 832px;
  background: #3076FF;
  justify-content: center;
}
.main_section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header {
  display: flex;
  flex-direction: column;
  &_item1 {
    width: 800px;
    height: 84px;
    background: #84AEFE;
  }
  &_item2 {
    width: 800px;
    height: 44px;
    background: #4E8AFF;
  }
}
.main_content {
  width: 800px;
}
.v-category {
  width: 800px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 16px;
  &_item1 {
    width: 176px;
    height: 104px;
    background: #BEFF97;
    cursor: pointer;
  }
  &_item2 {
    width: 176px;
    height: 104px;
    background: #618ADA;
    cursor: pointer;
  }
  &_item3 {
    width: 176px;
    height: 104px;
    background: #618ADA;
    cursor: pointer;
  }
  &_item4 {
    width: 176px;
    height: 104px;
    background: #618ADA;
    cursor: pointer;
  }
}
.product {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  width: 800px;
  padding-bottom: 20px;
  &_item {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 176px;
    height: 104px;
    background: #FFFFFF;
    cursor: pointer;
  }
  .item_footer {
    width: 176px;
    height: 20px;
    background: #C4C4C4;
  }
}
.card-side{
  display: flex;
}
</style>