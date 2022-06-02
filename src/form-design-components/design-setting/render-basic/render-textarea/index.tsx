import { defineComponent, nextTick, PropType, ref, watch, inject } from 'vue';
import { TextareaConfigOptionsType } from '@/form-design-components/design-side/types/options';
import { formCurrentProvideKey } from '@/form-design-components/types/provide-inject';
import {
  templateFormRef,
  formRules,
} from '@/form-design-components/store/globalData';
import { ElMessage } from 'element-plus';

export default defineComponent({
  props: {
    modelOptions: {
      type: Object as PropType<TextareaConfigOptionsType>,
      default: () => ({}),
    },
  },
  setup(props) {
    const onlyName = ref<string>(props.modelOptions.name);
    const privideData = inject(formCurrentProvideKey);
    const formModel = privideData!.formModel;
    watch(
      () => props.modelOptions,
      () => {
        onlyName.value = props.modelOptions.name;
      },
      {
        immediate: true,
      }
    );
    const onChange = () => {
      if (!onlyName.value) {
        onlyName.value = props.modelOptions.name;
        ElMessage.warning('不能为空');
        return;
      }
      if (onlyName.value !== props.modelOptions.name) {
        const currentNames = Object.getOwnPropertyNames(formModel);
        if (currentNames.includes(onlyName.value)) {
          onlyName.value = props.modelOptions.name;
          ElMessage.warning('唯一名称不能重复');
        } else {
          formModel[onlyName.value] = formModel[props.modelOptions.name];
          delete formModel[props.modelOptions.name];
          props.modelOptions.name = onlyName.value;
        }
      }
    };
    const setRequired = (val: boolean) => {
      console.log(val);
      if (val) {
        formRules[props.modelOptions.name] = {
          required: true,
          trigger: 'change',
        };
      } else {
        delete formRules[props.modelOptions.name];
      }
      nextTick(() => {
        console.log(templateFormRef.value);
        templateFormRef.value.clearValidate();
      });
    };
    return () => {
      const { modelOptions } = props;
      return (
        <>
          <el-form-item label="唯一名称" prop="name">
            <el-input
              v-model={onlyName.value}
              onChange={onChange}
              disabled
            ></el-input>
          </el-form-item>
          <el-form-item label="标签">
            <el-input v-model={modelOptions.label}></el-input>
          </el-form-item>
          <el-form-item label="可缩放">
            <el-select v-model={modelOptions.resize} placeholder="Select">
              <el-option label="none" value="none" />
              <el-option label="both" value="both" />
              <el-option label="horizontal" value="horizontal" />
              <el-option label="vertical" value="vertical" />
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
          <el-form-item label="是否必填">
            <el-switch v-model={modelOptions.required} onChange={setRequired} />
          </el-form-item>
          <el-form-item label="高度自适应">
            <el-switch v-model={modelOptions.autosize} />
          </el-form-item>
        </>
      );
    };
  },
});
