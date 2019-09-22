import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import * as VueGoogleMaps from "vue2-google-maps";


Vue.use(VueAxios, axios)
Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyB_ICsFMLQcKStOBadf3m-aqzyFewqy2Yk",
        libraries: "places" // necessary for places input

    }
});

Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')