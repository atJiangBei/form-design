import { App } from 'vue';
import SvgIcon from './svg-icon/index.vue';

const components = [SvgIcon];

export default {
  install(app: App) {
    components.forEach((component) => {
      app.component(component.name, component);
    });
    return app;
  },
};
