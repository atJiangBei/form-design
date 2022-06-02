import { defineComponent, PropType } from 'vue';
import { ButtonConfigOptionsType } from '@/form-design-components/design-side/types/options';

export default defineComponent({
  props: {
    modelOptions: {
      type: Object as PropType<ButtonConfigOptionsType>,
      default: () => ({}),
    },
  },
  setup(props) {
    return () => {
      const { modelOptions } = props;
      return (
        <>
          <el-form-item label="按钮类型">
            <el-select v-model={modelOptions.type} placeholder="Select">
              <el-option label="default" value="default" />
              <el-option label="primary" value="primary" />
              <el-option label="success" value="success" />
              <el-option label="info" value="info" />
              <el-option label="danger" value="danger" />
              <el-option label="warning" value="warning" />
            </el-select>
          </el-form-item>
          <el-form-item label="禁用">
            <el-switch v-model={modelOptions.disabled}></el-switch>
          </el-form-item>
        </>
      );
    };
  },
});
