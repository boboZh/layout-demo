<!--
 * @Description: 
 * @version: 
 * @Author: zhaobo
 * @Date: 2021-05-10 09:34:53
 * @LastEditors: zhaobo
 * @LastEditTime: 2021-05-10 15:14:16
-->
<template>
  <div class="homeContainer">
    <div class="navLeft">
      <nav-left  
      :menu-list="menuList" 
      :folded="folded" 
      :current-active="currentActive"
      @nav-change="handleNavChange"
      ></nav-left>
    </div>
    
    <transition name="move">
      <sub-nav class="subNav" :current-active-title="currentActiveTitle" v-show="!folded"></sub-nav>
    </transition>
    <div class="content" :class="{lg: folded}">
      <i class="el-icon" :class="folded?'el-icon-s-unfold':'el-icon-s-fold'"  @click="folded =!folded"></i>
    </div>
    
  </div>  
</template>

<script>
import NavLeft from './components/navLeft'
import SubNav from './components/subNav'
export default {
  name: 'home',
  components: {
    NavLeft,
    SubNav
  },
  data() {
    const DEFAULT_MENU_LIST = [
  {
    icon: 'el-icon-s-operation',
    title: '首页',
    path: '/',
    name: 'home'
  },
  {
    icon: 'el-icon-menu',
    title: '档案',
    path: '/',
    name: 'nav1'
  },
  {
    icon: 'el-icon-document',
    title: '监控',
    path: '/',
    name: 'nav2'
  },
  {
    icon: 'el-icon-setting',
    title: '报表',
    path: '/',
    name: 'nav3'
  },
]
    return {
      folded: true,
      menuList: DEFAULT_MENU_LIST,
      currentActive: DEFAULT_MENU_LIST[0].name,
      currentActiveTitle: DEFAULT_MENU_LIST[0].title
    }
  },
  methods: {
    handleNavChange(item) {
      this.currentActive = item.name
      this.currentActiveTitle = item.title
    }
  }
}
</script>

<style lang="scss" scoped>
  .homeContainer {
    display: flex;
    height: 100%;
    
    .navLeft {
      position: relative;
      z-index: 9;
      flex: 0 0 65px;
    }

    .subNav {
      position: relative;
      z-index: 1;
      flex: 0 0 210px;
      // transform: translateX(0);
      &.move-enter-active, &.move-leave-active {
        transition: transform ease 0.1s;
      }
      &.move-leave, &.move-enter-to {
        transform: translateX(0);
      }
      &.move-enter, &.move-leave-to {
        transform: translateX(-100%);
      }
    }
    .content {
      width: calc(100%-275px);
      transition: width ease 0.1s;
    
      &.lg {
         width: calc(100%-65px);
      }
      
      .el-icon {
        display: inline-block;
        margin-left: 20px;
        font-size: 24px;
        color: #2F87FE;
      }
    }
  }
</style>
