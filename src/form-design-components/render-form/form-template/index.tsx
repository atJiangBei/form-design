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
  AllComponentType,
} from '@/form-design-components/design-side/types/options';

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
      return <div>{render(templateConfig as any)}</div>;
    };
  },
});
