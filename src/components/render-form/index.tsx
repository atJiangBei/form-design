import { defineComponent } from 'vue';
import RenderFormItem from './render-form-item/index';

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
    formRules: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    return () => {
      const { usedRenderData, formModel, formRules } = props;
      return (
        <el-form label-width="100px" rules={formRules} model={formModel}>
          <RenderFormItem
            usedRenderData={usedRenderData}
            formModel={formModel}
          ></RenderFormItem>
        </el-form>
      );
    };
  },
});
