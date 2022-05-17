import { defineComponent, PropType, ref } from 'vue';
import { InputOptions } from '@/components/design-side/types/options';
import { formModel } from '@/model/form';

export default defineComponent({
  props: {
    modelOptions: {
      type: Object as PropType<InputOptions>,
      default: () => ({}),
    },
  },
  setup(props) {
    const onlyName = ref<string>(props.modelOptions.name);
    const onBlur = () => {
      if (!onlyName.value) {
        onlyName.value = props.modelOptions.name;
        return;
      }
      if (onlyName.value !== props.modelOptions.name) {
        formModel[onlyName.value] = formModel[props.modelOptions.name];
        delete formModel[props.modelOptions.name];
        props.modelOptions.name = onlyName.value;
      }
    };
    return () => {
      const { modelOptions } = props;
      return (
        <>
          <el-form-item label="唯一名称" prop="name">
            <el-input v-model={onlyName.value} onBlur={onBlur}></el-input>
          </el-form-item>
          <el-form-item label="显示类型">
            <el-select v-model={modelOptions.type} placeholder="Select">
              <el-option label="text" value="text" />
              <el-option label="password" value="password" />
            </el-select>
          </el-form-item>
          <el-form-item label="组件大小">
            <el-select v-model={modelOptions.size} placeholder="Select">
              <el-option label="large" value="large" />
              <el-option label="default" value="default" />
              <el-option label="small" value="small" />
            </el-select>
          </el-form-item>
        </>
      );
    };
  },
});
