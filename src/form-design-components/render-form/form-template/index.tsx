import { defineComponent, PropType } from 'vue';
import RenderFormItem from '../render-form-item/index';

import {
  CardConfigType,
  GridConfigType,
  ButtonConfigType,
  InputConfigType,
  DividerConfigType,
  TextareaConfigType,
  InputNumberConfigType,
  SelectConfigType,
  SelectMultipleConfigType,
  LinkConfigType,
  DatePickerConfigType,
  DatePickerRangeConfigType,
  AllComponentType,
} from '@/form-design-components/types/form-design-el';

export default defineComponent({
  name: 'FormTemplate',
  props: {
    templateConfig: {
      type: Object,
      default: () => ({}),
    },
    formModel: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const render = (config: AllComponentType) => {
      const { formModel } = props;
      const { type } = config;
      console.log('config', config);
      switch (type) {
        case 'Divider':
          const dividerOptions = (config as DividerConfigType).options;
          return (
            <el-divider
              borderStyle={dividerOptions.borderStyle}
              contentPosition={dividerOptions.contentPosition}
            >
              {dividerOptions.title}
            </el-divider>
          );
        case 'Button':
          return (
            <el-button type={(config as ButtonConfigType).options.type}>
              按钮
            </el-button>
          );
        case 'Input':
          const inputOptions = (config as InputConfigType).options;
          formModel[inputOptions.name] = formModel[inputOptions.name] || '';
          return (
            <el-form-item label={inputOptions.label} prop={inputOptions.name}>
              <el-input
                type={inputOptions.type}
                size={inputOptions.size}
                disabled={inputOptions.disabled}
                v-model={formModel[inputOptions.name]}
              ></el-input>
            </el-form-item>
          );
        case 'Textarea':
          const textareaOptions = (config as TextareaConfigType).options;
          formModel[textareaOptions.name] =
            formModel[textareaOptions.name] || '';
          return (
            <el-form-item
              label={textareaOptions.label}
              prop={textareaOptions.name}
            >
              <el-input
                clearable
                type="textarea"
                resize={textareaOptions.resize}
                autosize={textareaOptions.autosize}
                size={textareaOptions.size}
                disabled={textareaOptions.disabled}
                v-model={formModel[textareaOptions.name]}
              ></el-input>
            </el-form-item>
          );
        case 'InputNumber':
          const inputNumberOptions = (config as InputNumberConfigType).options;
          formModel[inputNumberOptions.name] =
            formModel[inputNumberOptions.name] || 0;
          return (
            <el-form-item
              label={inputNumberOptions.label}
              prop={inputNumberOptions.name}
            >
              <el-input-number
                size={inputNumberOptions.size}
                disabled={inputNumberOptions.disabled}
                min={inputNumberOptions.min}
                max={inputNumberOptions.max}
                step={inputNumberOptions.step}
                v-model={formModel[inputNumberOptions.name]}
              ></el-input-number>
            </el-form-item>
          );
        case 'Select':
          const selectOptions = (config as SelectConfigType).options;
          formModel[selectOptions.name] = formModel[selectOptions.name] || '';
          return (
            <el-form-item label={selectOptions.label} prop={selectOptions.name}>
              <el-select
                type="textarea"
                clearable={selectOptions.clearable}
                size={selectOptions.size}
                disabled={selectOptions.disabled}
                v-model={formModel[selectOptions.name]}
              >
                {selectOptions.optionItems.map((item) => {
                  return (
                    <el-option
                      key={item.value}
                      label={item.label}
                      value={item.value}
                    />
                  );
                })}
              </el-select>
            </el-form-item>
          );
        case 'SelectMultiple':
          const selectMultipleOptions = (config as SelectMultipleConfigType)
            .options;
          formModel[selectMultipleOptions.name] =
            formModel[selectMultipleOptions.name] || [];
          return (
            <el-form-item
              label={selectMultipleOptions.label}
              prop={selectMultipleOptions.name}
            >
              <el-select
                multiple
                clearable={selectMultipleOptions.clearable}
                size={selectMultipleOptions.size}
                disabled={selectMultipleOptions.disabled}
                v-model={formModel[selectMultipleOptions.name]}
              >
                {selectMultipleOptions.optionItems.map((item) => {
                  return (
                    <el-option
                      key={item.value}
                      label={item.label}
                      value={item.value}
                    />
                  );
                })}
              </el-select>
            </el-form-item>
          );
        case 'Link':
          const linkOptions = (config as LinkConfigType).options;
          return (
            <el-link
              target="_blank"
              type={linkOptions.type}
              underline={linkOptions.underline}
              href={linkOptions.href}
              disabled={linkOptions.disabled}
            >
              {linkOptions.text}
            </el-link>
          );
        case 'DatePicker':
          const datePickerOptions = (config as DatePickerConfigType).options;
          formModel[datePickerOptions.name] =
            formModel[datePickerOptions.name] || '';
          return (
            <el-form-item
              label={datePickerOptions.label}
              prop={datePickerOptions.name}
            >
              <el-date-picker
                type="date"
                placeholder="Pick a Date"
                format="YYYY-MM-DD"
                size={datePickerOptions.size}
                v-model={formModel[datePickerOptions.name]}
              />
            </el-form-item>
          );
        case 'DatePickerRange':
          const datePickerRangeOptions = (config as DatePickerRangeConfigType)
            .options;
          formModel[datePickerRangeOptions.name] =
            formModel[datePickerRangeOptions.name] || [];
          return (
            <el-form-item
              label={datePickerRangeOptions.label}
              prop={datePickerRangeOptions.name}
            >
              <el-date-picker
                type="daterange"
                placeholder="Pick a Date"
                format="YYYY-MM-DD"
                size={datePickerRangeOptions.size}
                v-model={formModel[datePickerRangeOptions.name]}
              />
            </el-form-item>
          );
        case 'Card':
          const cardOptions = (config as CardConfigType).options;
          return (
            <el-card header={cardOptions.header} shadow={cardOptions.shadow}>
              <RenderFormItem
                usedRenderData={(config as CardConfigType).list}
              />
            </el-card>
          );
        case 'Grid':
          return (
            <>
              <el-row>
                {(config as GridConfigType).cols.map((colItem) => {
                  return (
                    <el-col span={colItem.options.span}>
                      <RenderFormItem usedRenderData={colItem.list} />
                    </el-col>
                  );
                })}
              </el-row>
            </>
          );
        default:
          break;
      }
    };
    return () => {
      const { templateConfig } = props;
      return (
        <div style="padding:0 5px;margin-bottom:5px;">
          {render(templateConfig as any)}
        </div>
      );
    };
  },
});
