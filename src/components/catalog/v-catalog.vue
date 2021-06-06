<template>

<div class="product">
  <v-select
      v-bind:selected="selected"
      v-bind:options="categories"
      @select="sortByCategories"
  />
  <v-catalog-item
      v-for="product in filteredProducts"
      :key="product.id"
      v-bind:product_data="product"
      @addToCart="addToCart"

  />

</div>



</template>

<script>
import vCatalogItem from './v-catalog-item'
import {mapActions, mapGetters} from 'vuex'
import vSelect from '@/components/v-select'
export default {
  name: "v-catalog",
  computed:{
    ...mapGetters([
        'PRODUCTS'
    ]),
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts
      }else {
        return this.PRODUCTS
      }
    }
  },
  components: {
    vCatalogItem,
    vSelect

  },
  methods:{
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
    ]),
    addToCart(data){
      this.ADD_TO_CART(data)
    },
    sortByCategories(category) {
      this.sortedProducts = [];
      let vm = this;
      this.PRODUCTS.map(function (item){
        if (item.categories_name === category.name){
          vm.sortedProducts.push(item);
        }
      })
      this.selected = category.name
    }
  },
  data(){
    return {
      categories: [
        {name: 'All', value: 'A'},
        {name: 'Male', value: 'M'},
        {name: 'Female', value: 'F'}
      ],
      selected: 'All',
      sortedProducts: []
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
  }

}
</script>

<style lang="scss">
.v-catalog {
&__list {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   align-items: center;
 }
&__link_to_cart {
   position: absolute;
   top: 20px;
   right: 10px;
   padding: 16px;
   border: solid 1px #aeaeae;
   background: #ffffff;
 }
}
</style>