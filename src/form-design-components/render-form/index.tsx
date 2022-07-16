import { defineComponent, reactive } from 'vue';
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
      //当默认为普通对象时{}，给其添加某个key的value为普通对象（例如[]）时，此数据的变更将不会触发更新
      default: () => reactive({}),
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
