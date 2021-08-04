<template>
  <div id="app">
    <display />
    <buttons />
  </div>
</template>

<script>
import buttons from './components/buttons.vue'
import display from './components/display.vue'

export default {
  name: 'App',
  components: {
    buttons,
    display
  },
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
