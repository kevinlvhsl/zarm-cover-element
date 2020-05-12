import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
// import '../dist/css/index.css'; // 分出来修改的地址 不要用
import '@/styles/theme/index.css';
import '@/styles/index.scss';
import locale from 'element-ui/lib/locale/lang/zh-CN'
Vue.use(ElementUI, { locale, size: 'small' })

import '@/styles/index.scss'

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
