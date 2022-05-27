import { defineComponent } from 'vue';
import { formConfig } from '@/model/form';

export default defineComponent({
  name: 'render-form-setting',
  setup() {
    return () => {
      return (
        <el-form>
          <el-form-item label="标签宽度">
            <el-input-number
              min={50}
              v-model={formConfig.labelWidth}
            ></el-input-number>
          </el-form-item>
          <el-form-item label="标签位置">
            <el-select v-model={formConfig.labelPosition} placeholder="Select">
              <el-option label="left" value="left" />
              <el-option label="right" value="right" />
              <el-option label="top" value="top" />
            </el-select>
          </el-form-item>
        </el-form>
      );
    };
  },
});
