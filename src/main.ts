import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import '@/styles/index.scss';
import 'normalize.css';
import 'element-plus/dist/index.css';
import '@/styles/resetElementPlus.scss';
import 'cesium/Build/Cesium/Widgets/widgets.css';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import * as Cesium from 'cesium';
import '@/mock/index';
window.Cesium = Cesium;
Cesium.Ion.defaultAccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1OGZiOGI5Yi0wN2E0LTRlMTgtOTMwYi04NDdhNDg4MTIyNjUiLCJpZCI6MTM1MTU0LCJpYXQiOjE2ODIyNDM3Mjh9.32mOaQTRHc_l41eaI-sTVx4tVODDsrAoAG6Vo_DTL-U';

const pinia = createPinia();
pinia.use(({ store }) => {
    if (store.$id === 'menu') {
        store.$subscribe((_, state) => {
            sessionStorage.setItem('state', JSON.stringify(state));
        });
    }
});

const app = createApp(App);

app.use(ElementPlus, {
    locale: zhCn
});
app.use(pinia);
app.use(router);

app.mount('#app');
