import { defineComponent, nextTick, PropType, ref, watch } from 'vue';
import {
  CardConfigType,
  CardConfigOptionsType,
} from '@/form-design-components/types/form-design-el';

export default defineComponent({
  props: {
    modelOptions: {
      type: Object as PropType<CardConfigOptionsType>,
      default: () => ({}),
    },
  },
  setup(props) {
    return () => {
      const { modelOptions } = props;
      return (
        <>
          <el-form-item label="header">
            <el-input v-model={modelOptions.header}></el-input>
          </el-form-item>
          <el-form-item label="shadow">
            <el-select v-model={modelOptions.shadow} placeholder="Select">
              <el-option label="never" value="never" />
              <el-option label="hover" value="hover" />
              <el-option label="always" value="always" />
            </el-select>
          </el-form-item>
        </>
      );
    };
  },
});
