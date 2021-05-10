<!--
 * @Description: 
 * @version: 
 * @Author: zhaobo
 * @Date: 2021-05-10 09:23:14
 * @LastEditors: zhaobo
 * @LastEditTime: 2021-05-10 10:56:31
-->
<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './views/home/home'
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style lang="scss">
#app {
  height: 100%;
  overflow: hidden;
}
</style>
