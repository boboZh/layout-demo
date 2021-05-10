<!--
 * @Description: 
 * @version: 
 * @Author: zhaobo
 * @Date: 2021-05-10 10:28:12
 * @LastEditors: zhaobo
 * @LastEditTime: 2021-05-10 15:53:38
-->
<template>
  <div class="navLeft-container">
    <div class="logo"></div>
    <div class="border-1px-bottom" />
    <div class="nav-item" 
    :ref="'nav'+item.name"
    v-for="(item, index) in menuList" 
    :class="{'active': currentActive === item.name, 'folded': folded}" 
    :key="index+item.title" 
    @click="checkActive(item)"
    @mouseenter="handleNavItemHover(item)"
    >
      <div class="subMenuContainer" v-if="hoverActive === item.name">
        <sub-menu ></sub-menu>
      </div>
      <el-tooltip class="item" effect="dark" :content="item.title" placement="top" :disabled="folded">
          <i :class="item.icon" ></i>
        </el-tooltip>
    </div>
  </div>
    
</template>
<script>
import SubMenu from './subMenu'
export default {
  name: 'navLeft',
  components: {
    SubMenu
  },
  data() {
    return {
      hoverActive: ''
    }
  },
  props: {
    menuList: {
      type: Array,
    },
    folded: {
      type: Boolean
    },
    currentActive: {
      type: String,
    }
  },
  methods: {
    checkActive(item) {
      this.$emit('nav-change', item)
    },
    handleNavItemHover(item) {
      this.hoverActive = item.name
      const navItem = this.$refs['nav'+item.name]
      console.log('item', navItem.offsetTop, navItem.pageYOffset)
    }
  }
}
</script>
<style lang="scss" scoped>
  .navLeft-container {
    padding: 17px 0px;
    display: flex;
    flex-direction: column;
    width: 65px;
    height: 100%;
    background: linear-gradient(135deg, #4D9AFF 0%, #1771E6 100%);
    box-sizing: border-box; 
   
    .logo {
       margin: 0 20px;
      width: 25px;
      height: 35px;
      border: 1px solid white;
    }
    .border-1px-bottom {
      margin: 30px 20px;
      width: 25px;
      height: 0;
      border-bottom: 1px solid #7FB5FE;
    }
    .nav-item {
      position: relative;
      height: 44px;
      line-height: 44px;
      // padding: 0 20px;
      text-align: center;
      box-sizing: border-box; 
      color: white;
      font-size: 24px;
      &.active {
        background: rgba(216, 216, 216, 0.35);
      }
      &:hover {
        position: relative;
        background: rgba(216, 216, 216, 0.35);
        
      }
      &.folded:hover {
        .subMenuContainer {
          display: block;
        }
      }
      .subMenuContainer {
        display: none;
        position: absolute;
        margin-top: 0;
        margin-left: 67px;
        width: 146px;
        background: #2F87FE;
      }
    }
    
  }
</style>