<template>
  <div id="app">
    <commlayout/>
  </div>
</template>

<script>
import Commlayout from './layout/commlayout'

export default {
  name: 'App',
  components: {
    Commlayout
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
  height: 100%;
}
</style>
