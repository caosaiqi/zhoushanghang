import Vue from 'vue'
import 'normalize.css/normalize.css'
import utils from './utils/index'
import 'vant/lib/icon/index.css';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css
import App from './App'
import store from './store'
import router from './router'
import apis from './api/api'
import '@/icons' // icon
import '@/permission' // permission control
import moment from 'moment' // 导入文件
import vant from 'vant';
import Router from 'vue-router'
import WebIM from './utils/WebIM';
import Antd from 'ant-design-vue'
import echarts from 'echarts';
Vue.prototype.$echarts = echarts;
Vue.use(ElementUI).use(vant)
Vue.prototype.$api = apis
Vue.prototype.$utils = utils;
Vue.config.productionTip = false
Vue.use(Antd)
Vue.prototype.$moment = moment //赋值使用 就是调用一下

moment.locale('zh-cn') // 这里是进行了汉化
window.Vue=new Vue({
  el: '#app',
  router,
  store,
  WebIM,
  render: h => h(App)
})


