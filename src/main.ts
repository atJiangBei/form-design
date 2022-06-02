import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import '@/style';
import Components from '@/form-design-components';
import draggable from 'vuedraggable';

const app = createApp(App);
app.component('draggable', draggable);
app.use(Components).use(ElementPlus).mount('#app');
