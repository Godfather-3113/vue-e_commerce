<template>
  <div class="product_item " @click="addToCart ">

      <div class="item_header">{{product_data.product_name}}</div>
      <div class="item_body">{{product_data.price}}p.</div>
      <div class="item_footer">{{ product_data.discount}}</div>

  </div>

</template>

<script>
// import vPopup from '../popup/v-popup'

export default {
  name: "v-catalog-item",
  components: {
    // vPopup
  },
  props: {
    product_data: {
      type: Object,
      default() {
        return{}
      }
    }
  },
  data() {
    return {
      isInfoPopupVisible: false
    }
  },
  computed: {},
  methods:{
    showPopupInfo(){
      this.isInfoPopupVisible = true
    },
    closeInfoPopup() {
      this.isInfoPopupVisible = false
    },
    addToCart(){
      this.$emit('addToCart', this.product_data)
    },
  },
  mounted() {
    this.$set(this.product_data,'quantity',1)
  }
}

</script>

<style lang="scss">
.product_item {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>