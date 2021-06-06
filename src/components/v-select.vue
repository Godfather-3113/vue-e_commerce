<template>
  <div class="v-select">

    <p
        class="v-select__title"
        @click="areOptionVisible = !areOptionVisible"
    >{{ selected }}</p>
    <div
        class="options"
        v-if="areOptionVisible"
    >
      <p
          v-for="option in options"
          v-bind:key="option.value"
          @click="selectOption(option)"
      >
        {{option.name}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-select",
  props: {
    options: {
      type: Array,
      default(){
        return []
      }
    },
  selected: {
    type: String,
    default: ''
  },
  },
  data() {
    return {
      areOptionVisible: false
    }
  },
  methods: {
    selectOption(option) {
      this.$emit('select', option)
      this.areOptionVisible = false
    },
    hideSelect() {
      this.areOptionVisible = false;
    }
  },
  mounted() {
    document.addEventListener('click', this.hideSelect.bind(this),true)
  },
  beforeDestroy() {
    document.removeEventListener('click',this.hideSelect)
  }
}
</script>

<style lang="scss">
    .v-select {
      position: relative;
      width: 800px;
      &__title {
        border: solid 1px #aeaeae;
        cursor: pointer;
      }
    }
    .v-select p{
      margin: 0;
    }
    .options {
      background: #ffffff;
      border: solid 1px #aeaeae;
      position: absolute;
      cursor: pointer;
      //top: 20px;
      right: 0;
      width: 100%;
    }
    .options p:hover {
      background: #e7e7e7;
    }
</style>