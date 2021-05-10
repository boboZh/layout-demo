<!--
 * @Description: 
 * @version: 
 * @Author: zhaobo
 * @Date: 2021-05-10 11:39:59
 * @LastEditors: zhaobo
 * @LastEditTime: 2021-05-10 14:58:41
-->
<template>
  <div class="subNav-wrapper">
    <h2>金卡云·智慧燃气</h2>
    <h6>{{currentActiveTitle}}</h6>
    <sub-menu class="pale"></sub-menu>
  </div>
</template>
<script>
import SubMenu from './subMenu'
export default {
  name: 'subNav',
  components: {
    SubMenu
  },
  props: {
    currentActiveTitle: {
      type: String,
    }
  }
}
</script>
<style lang="scss" scoped>
  .subNav-wrapper {
    width: 210px;
    height: 100%;
    overflow: hidden;
    background: #EFF5FF;
    box-shadow: 2px 0px 4px 0px rgba(41, 46, 51, 0.1);
    h2 {
      margin-top: 36px;
      font-size: 18px;
      font-weight: 500;
      color: #2F87FE;
      text-align: center;
    }
    h6 {
      font-size: 12px;
      font-weight: 400;
      color: #4A4A4A;
      line-height: 18px;
      text-align: center;
    }
    .pale {
      width: 190px;
      
    }
  }
</style>