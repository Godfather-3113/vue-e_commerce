<template>

    <div class="v-popup">
      <div class="v-popup_header">
        <span>Add discount item</span>
        <span>
        <i
            class="material-icons"
            @click="closePopup"
        >close</i>
      </span>
      </div>
      <div class="v-popup_content">
        <slot></slot>
      </div>
      <div class="v-popup_footer">
        <button class="close_modal" @click="closePopup">Close</button>
        <button
            class="submit_item_discount"
            @click="rightBtnAction"
        >{{defaultBtnTitle}}</button>
      </div>
    </div>


</template>

<script>
export default {
  name: "v-popup",
  methods: {
    rightBtnAction(){
      this.$emit('rightBtnAction')
    },
    closePopup(){
      this.$emit('closePopup')
    }
  },
  props: {
    defaultBtnTitle: {
      type: String,
      default: 'Right',
    }
  },
 }
</script>

<style lang="scss">

.v-popup{
  position: fixed;
  background: #ffffff;
  box-shadow: 0 0 17px 0 #e7e7e7;
  width: 300px;
  z-index: 10;
  padding: 16px;
  right: 25px;
  top: 185px;
  &_header, &_footer{
    display:flex;
    justify-content: space-between;
    align-items: center;
  }
  &_content{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .submit_item_discount{
    padding: 8px;
    color: #ffff;
    background: #26aeae68;
  }
  .close_modal{
    padding: 8px;
    color: #ffff;
    background: red;
  }

}
</style>