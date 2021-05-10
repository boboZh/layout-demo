/*
 * @Description: 
 * @version: 
 * @Author: zhaobo
 * @Date: 2021-05-10 09:23:14
 * @LastEditors: zhaobo
 * @LastEditTime: 2021-05-10 10:14:11
 */
import Vue from 'vue'
import ElementUI from 'element-ui';
import './styles/index.scss'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
