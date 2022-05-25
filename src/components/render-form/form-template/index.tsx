import { defineComponent, PropType } from 'vue';
import RenderFormItem from './../render-form-item/index';
import {
  formModel,
  selectedItem,
  deleteComponent,
  copyComponent,
} from '@/model/form';

import {
  GridConfigType,
  ButtonConfigType,
  InputConfigType,
  DividerConfigType,
  ColConfigOptionsType,
} from '@/components/design-side/types/options';

type ConfigType =
  | GridConfigType
  | ButtonConfigType
  | InputConfigType
  | DividerConfigType;

export default defineComponent({
  name: 'FormTemplate',
  props: {
    templateConfig: {
      type: Object,
      default: () => ({}),
    },
    formModel: {
      type: Object,
    },
  },
  setup(props) {
    const render = (config: ConfigType) => {
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
      const { templateConfig, formModel } = props;
      return <div>{render(templateConfig as any)}</div>;
    };
  },
});
