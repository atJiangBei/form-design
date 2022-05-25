import { defineComponent } from 'vue';
import FormTemplate from '../form-template/index';

export default defineComponent({
  name: 'render-form',
  props: {
    usedRenderData: {
      type: Array,
      default: () => [],
    },
    formModel: {
      type: Object,
    },
  },
  setup(props) {
    return () => {
      const { usedRenderData, formModel } = props;
      return usedRenderData.map((config) => {
        return (
          <FormTemplate
            templateConfig={config as any}
            formModel={formModel}
          ></FormTemplate>
        );
      });
    };
  },
});
