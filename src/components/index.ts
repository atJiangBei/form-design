import { App } from 'vue';
import Side from './design-side/index.vue';
import Content from './design-content/index.vue';
import Setting from './design-setting/index.vue';
import NestedDraggable from './nested-draggable/index.vue';
import CodeEditor from './code-editor/index.vue';
import RenderForm from './render-form/index';

const components = [
  Side,
  Content,
  Setting,
  NestedDraggable,
  CodeEditor,
  RenderForm,
];

export default {
  install(app: App) {
    components.forEach((component) => {
      app.component(component.name, component);
    });
  },
};
