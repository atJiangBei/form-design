import { defineComponent, ref } from 'vue';
import { formModel, selectedItem } from '@/model/form';
import RenderInput from '../render-basic/render-input';

export default defineComponent({
  name: 'render-setting',
  setup() {
    const activeNames = ref(['basic', 'complex']);

    return () => {
      const { type, options } = selectedItem.value;
      if (!options) {
        return <el-empty image-size={100} />;
      }
      return (
        <el-collapse v-model={activeNames.value}>
          <el-collapse-item title="基本属性" name="basic">
            <div>{renderItem(type, options)}</div>
          </el-collapse-item>
          <el-collapse-item title="高级属性" name="complex">
            <el-empty image-size={100} />
          </el-collapse-item>
        </el-collapse>
      );
    };
  },
});

function renderItem(type: string, options: any) {
  type = type.toUpperCase();

  switch (type) {
    case 'INPUT':
      return <RenderInput modelOptions={options} />;
  }
}
