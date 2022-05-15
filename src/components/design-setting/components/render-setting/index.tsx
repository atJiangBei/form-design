import { defineComponent, ref } from 'vue';
import { formModel, selectedItem } from '@/model/form';

export default defineComponent({
  name: 'render-setting',
  setup() {
    const activeNames = ref(['basic', 'complex']);
    return () => {
      const { options } = selectedItem.value;
      if (!options) return '';
      return (
        <el-collapse v-model={activeNames.value}>
          <el-collapse-item title="基本属性" name="basic">
            <div>
              <el-form-item label="按钮类型">
                <el-select
                  v-model={options.type}
                  placeholder="Select"
                  size="small"
                >
                  <el-option label="default" value="default" />
                  <el-option label="primary" value="primary" />
                  <el-option label="success" value="success" />
                  <el-option label="info" value="info" />
                  <el-option label="danger" value="danger" />
                  <el-option label="warning" value="warning" />
                </el-select>
              </el-form-item>
            </div>
          </el-collapse-item>
          <el-collapse-item title="高级属性" name="complex">
            <el-empty image-size={100} />
          </el-collapse-item>
        </el-collapse>
      );
    };
  },
});
