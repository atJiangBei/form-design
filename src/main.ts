import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import '@/style';
import FormDesign from '@/form-design-components';
import draggable from 'vuedraggable';
import '@/svgs/loadSvg';
import CommonComponents from './components';

const app = createApp(App);
app.component('draggable', draggable);

app.use(CommonComponents).use(FormDesign).use(ElementPlus).mount('#app');
