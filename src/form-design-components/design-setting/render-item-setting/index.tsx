import { defineComponent, ref } from 'vue';
import { selectedItem } from '@/form-design-components/store/globalData';
import RenderButton from '../render-basic/render-button';
import RenderInput from '../render-basic/render-input';
import RenderCol from '../render-basic/render-col';
import RenderDivider from '../render-basic/render-divider';
import RenderTextarea from '../render-basic/render-textarea';
import RenderInputNumber from '../render-basic/render-input-number';
import RenderSelect from '../render-basic/render-select';
import RenderSelectMultiple from '../render-basic/render-select-multiple';
import RenderCard from '../render-basic/render-card';
import RenderLink from '../render-basic/render-link';
import RenderDate from '../render-basic/render-date';

export default defineComponent({
  name: 'render-item-setting',
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
            <el-form label-width="90px">{renderItem(type, options)}</el-form>
          </el-collapse-item>
          {/* <el-collapse-item title="高级属性" name="complex">
            <el-empty image-size={100} />
          </el-collapse-item> */}
        </el-collapse>
      );
    };
  },
});

function renderItem(type: string, options: any) {
  type = type.toUpperCase();
  switch (type) {
    case 'BUTTON':
      return <RenderButton modelOptions={options} />;
    case 'INPUT':
      return <RenderInput modelOptions={options} />;
    case 'DIVIDER':
      return <RenderDivider modelOptions={options} />;
    case 'TEXTAREA':
      return <RenderTextarea modelOptions={options} />;
    case 'INPUTNUMBER':
      return <RenderInputNumber modelOptions={options} />;
    case 'SELECT':
      return <RenderSelect modelOptions={options} />;
    case 'SELECTMULTIPLE':
      return <RenderSelect modelOptions={options} />;
    case 'DATEPICKER':
      return <RenderDate modelOptions={options} />;
    case 'DATEPICKERRANGE':
      return <RenderDate modelOptions={options} />;
    case 'LINK':
      return <RenderLink modelOptions={options} />;
    case 'COL':
      return <RenderCol modelOptions={options} />;
    case 'CARD':
      return <RenderCard modelOptions={options} />;
    //return <RenderSelectMultiple modelOptions={options} />;
  }
}
