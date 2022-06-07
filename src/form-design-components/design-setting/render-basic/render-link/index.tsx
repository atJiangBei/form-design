import { defineComponent, nextTick, PropType, ref, watch } from 'vue';
import { LinkConfigOptionsType } from '@/form-design-components/types/form-design-el';

export default defineComponent({
  props: {
    modelOptions: {
      type: Object as PropType<LinkConfigOptionsType>,
      default: () => ({}),
    },
  },
  setup(props) {
    return () => {
      const { modelOptions } = props;
      return (
        <>
          <el-form-item label="类型">
            <el-select v-model={modelOptions.type} placeholder="Select">
              <el-option label="default" value="default" />
              <el-option label="primary" value="primary" />
              <el-option label="success" value="success" />
              <el-option label="warning" value="warning" />
              <el-option label="danger" value="danger" />
              <el-option label="info" value="info" />
            </el-select>
          </el-form-item>
          <el-form-item label="text">
            <el-input v-model={modelOptions.text}></el-input>
          </el-form-item>
          <el-form-item label="href">
            <el-input v-model={modelOptions.href}></el-input>
          </el-form-item>

          <el-form-item label="是否必填">
            <el-switch v-model={modelOptions.underline} />
          </el-form-item>
          <el-form-item label="禁用">
            <el-switch v-model={modelOptions.disabled} />
          </el-form-item>
        </>
      );
    };
  },
});
