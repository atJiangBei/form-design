import { defineComponent, PropType } from 'vue';
import { DividerConfigOptionsType } from '@/form-design-components/types/form-design-el';

export default defineComponent({
  props: {
    modelOptions: {
      type: Object as PropType<DividerConfigOptionsType>,
      default: () => ({}),
    },
  },
  setup(props) {
    return () => {
      const { modelOptions } = props;
      return (
        <>
          <el-form-item label="标题">
            <el-input v-model={modelOptions.title} />
          </el-form-item>
          <el-form-item label="分隔线">
            <el-select v-model={modelOptions.borderStyle} placeholder="Select">
              <el-option label="solid" value="solid" />
              <el-option label="dashed" value="dashed" />
            </el-select>
          </el-form-item>
          <el-form-item label="内容位置">
            <el-select
              v-model={modelOptions.contentPosition}
              placeholder="Select"
            >
              <el-option label="left" value="left" />
              <el-option label="center" value="center" />
              <el-option label="right" value="right" />
            </el-select>
          </el-form-item>
        </>
      );
    };
  },
});
