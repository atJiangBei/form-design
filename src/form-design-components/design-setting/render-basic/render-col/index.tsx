import { defineComponent, nextTick, PropType, ref, watch } from 'vue';
import { ColConfigOptionsType } from '@/form-design-components/types/form-design-el';

export default defineComponent({
  props: {
    modelOptions: {
      type: Object as PropType<ColConfigOptionsType>,
      default: () => ({
        span: 12,
      }),
    },
  },
  setup(props) {
    return () => {
      const { modelOptions } = props;
      return (
        <>
          <el-form-item label="栅格宽度" prop="name">
            <el-input-number v-model={modelOptions.span} min={1} max={24} />
          </el-form-item>
        </>
      );
    };
  },
});
