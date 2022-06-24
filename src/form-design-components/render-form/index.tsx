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
      default: () => ({}),
    },
    formRules: {
      type: Object,
      default: () => ({}),
    },
    formConfig: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    return () => {
      const { usedRenderData, formConfig, formModel, formRules } = props;
      return (
        <el-form {...formConfig} rules={formRules} model={formModel}>
          <RenderFormItem
            usedRenderData={usedRenderData}
            formModel={formModel}
          ></RenderFormItem>
        </el-form>
      );
    };
  },
});
