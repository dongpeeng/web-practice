import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//样式重置和rem计算文件
import  './assets/css/reset.css'
import  './assets/js/rem.js'

// import { createApp } from 'vue';
// import { Button } from 'vant';
import { Tab, Tabs } from 'vant';
import 'vant/lib/index.css';
import { Swipe, SwipeItem } from 'vant';
import { Col, Row } from 'vant';
import { Skeleton } from 'vant';
import { Grid, GridItem } from 'vant';
import { Image as VanImage } from 'vant';
import { Icon } from 'vant';
import { Cell, CellGroup } from 'vant';

Vue.use(Cell);
Vue.use(CellGroup);

Vue.use(Icon);

Vue.use(VanImage);

Vue.use(Grid);
Vue.use(GridItem);

Vue.use(Skeleton);

Vue.use(Col);
Vue.use(Row);

Vue.use(Swipe);
Vue.use(SwipeItem);

// Vue.use(Button);
Vue.use(Tab);
Vue.use(Tabs);

//Element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
