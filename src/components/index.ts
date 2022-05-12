import { App } from 'vue';
import Side from './design-side/index.vue';
import Content from './design-content/index.vue';
import NestedDraggable from './nested-draggable/index.vue';

const components = [Side, Content, NestedDraggable];

export default {
  install(app: App) {
    components.forEach((component) => {
      app.component(component.name, component);
    });
  },
};
