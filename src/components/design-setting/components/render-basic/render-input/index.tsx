import { defineComponent, PropType, ref, watch } from 'vue';
import { InputOptions } from '@/components/design-side/types/options';
import { formModel } from '@/model/form';
import { ElMessage } from 'element-plus';

export default defineComponent({
  props: {
    modelOptions: {
      type: Object as PropType<InputOptions>,
      default: () => ({}),
    },
  },
  setup(props) {
    const onlyName = ref<string>(props.modelOptions.name);

    watch(
      () => props.modelOptions,
      () => {
        onlyName.value = props.modelOptions.name;
      }
    );
    const onChange = () => {
      if (!onlyName.value) {
        onlyName.value = props.modelOptions.name;
        ElMessage.warning('不能为空');
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
            <el-input v-model={onlyName.value} onChange={onChange}></el-input>
          </el-form-item>
          <el-form-item label="标签">
            <el-input v-model={modelOptions.label}></el-input>
          </el-form-item>
          <el-form-item label="显示类型">
            <el-select v-model={modelOptions.type} placeholder="Select">
              <el-option label="text" value="text" />
              <el-option label="password" value="password" />
            </el-select>
          </el-form-item>
          {/* <el-form-item label="组件大小">
            <el-select v-model={modelOptions.size} placeholder="Select">
              <el-option label="large" value="large" />
              <el-option label="default" value="default" />
              <el-option label="small" value="small" />
            </el-select>
          </el-form-item> */}
          <el-form-item label="禁用">
            <el-switch v-model={modelOptions.disabled} />
          </el-form-item>
        </>
      );
    };
  },
});
