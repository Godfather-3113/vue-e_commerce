<template>
  <div id="app">
    <h1> Send msg Telegram: <a href="https://t.me/Shutterstock777" style="text-decoration: none; color: red; " >Махкамов Алишер</a>  </h1>
      <v-main-wrapper />
  </div>
</template>

<script>
import vMainWrapper from './components/v-main-wrapper'

export default {
  name: 'App',
  components: {
    vMainWrapper
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
