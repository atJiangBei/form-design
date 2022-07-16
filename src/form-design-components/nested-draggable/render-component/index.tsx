import { defineComponent, PropType, InjectionKey, inject } from 'vue';

import './index.less';
import ContainerTool from './../container-tool/index.vue';
import {
  CardConfigType,
  GridConfigType,
  ButtonConfigType,
  InputConfigType,
  DividerConfigType,
  ColConfigOptionsType,
  TextareaConfigType,
  InputNumberConfigType,
  SelectConfigType,
  SelectMultipleConfigType,
  LinkConfigType,
  DatePickerConfigType,
  DatePickerRangeConfigType,
  TableConfigType,
  AllComponentType,
} from '@/form-design-components/types/form-design-el';
import { formCurrentProvideKey } from '../../types/provide-inject';
import { selectedItem } from '../../store/globalData';

export default defineComponent({
  name: 'render-component',
  emits: ['actived', 'delete', 'copy'],
  props: {
    config: {
      type: Object as PropType<AllComponentType>,
      default: () => ({}),
    },
  },
  setup(props, { emit }) {
    const privideData = inject(formCurrentProvideKey);
    const formModel = privideData!.formModel;
    const onActived = (config: any) => {
      emit('actived', config);
    };
    const onDelete = (id: string) => {
      emit('delete', id);
    };
    const onCopy = (id: string) => {
      emit('copy', id);
    };
    const initBasic = () => {
      const { config } = props;
      const { type } = config;
      switch (type) {
        case 'Input':
          const inputOptions = (config as InputConfigType).options;
          formModel[inputOptions.name] = formModel[inputOptions.name] || '';
          return;
        case 'Textarea':
          const textareaOptions = (config as TextareaConfigType).options;
          formModel[textareaOptions.name] =
            formModel[textareaOptions.name] || '';
          return;
        case 'InputNumber':
          const inputNumberOptions = (config as InputNumberConfigType).options;
          formModel[inputNumberOptions.name] =
            formModel[inputNumberOptions.name] || 0;
          return;
        case 'Select':
          const selectOptions = (config as SelectConfigType).options;
          formModel[selectOptions.name] = formModel[selectOptions.name] || '';
          return;
        case 'SelectMultiple':
          const selectMultipleOptions = (config as SelectMultipleConfigType)
            .options;
          formModel[selectMultipleOptions.name] =
            formModel[selectMultipleOptions.name] || [];
          return;
        case 'DatePicker':
          const datePickerOptions = (config as DatePickerConfigType).options;
          formModel[datePickerOptions.name] =
            formModel[datePickerOptions.name] || '';
          return;
        case 'DatePickerRange':
          const datePickerRangeOptions = (config as DatePickerRangeConfigType)
            .options;
          formModel[datePickerRangeOptions.name] =
            formModel[datePickerRangeOptions.name] || [];
          return;
        default:
          break;
      }
    };
    initBasic();
    const render = (config: AllComponentType) => {
      const { type } = config;

      switch (type) {
        case 'Divider':
          const dividerOptions = (config as DividerConfigType).options;
          return (
            <ContainerTool
              contentType={type}
              selected={selectedItem.value.id === config.id}
              onSelected={() => onActived(config)}
              onDelete={() => onDelete(config.id)}
            >
              <el-divider
                borderStyle={dividerOptions.borderStyle}
                contentPosition={dividerOptions.contentPosition}
              >
                {dividerOptions.title}
              </el-divider>
            </ContainerTool>
          );
        case 'Button':
          const buttonOptions = (config as ButtonConfigType).options;
          return (
            <ContainerTool
              contentType={type}
              selected={selectedItem.value.id === config.id}
              onSelected={() => onActived(config)}
              onDelete={() => onDelete(config.id)}
            >
              <el-button
                type={buttonOptions.type}
                disabled={buttonOptions.disabled}
                size={buttonOptions.size}
              >
                按钮
              </el-button>
            </ContainerTool>
          );
        case 'Input':
          const inputOptions = (config as InputConfigType).options;
          return (
            <ContainerTool
              contentType={type}
              selected={selectedItem.value.id === props.config.id}
              onSelected={() => onActived(config)}
              onDelete={() => onDelete(config.id)}
            >
              <el-form-item label={inputOptions.label} prop={inputOptions.name}>
                <el-input
                  clearable
                  type={inputOptions.type}
                  size={inputOptions.size}
                  disabled={inputOptions.disabled}
                  v-model={formModel[inputOptions.name]}
                ></el-input>
              </el-form-item>
            </ContainerTool>
          );
        case 'Textarea':
          const textareaOptions = (config as TextareaConfigType).options;
          return (
            <ContainerTool
              contentType={type}
              selected={selectedItem.value.id === props.config.id}
              onSelected={() => onActived(config)}
              onDelete={() => onDelete(config.id)}
            >
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
            </ContainerTool>
          );
        case 'InputNumber':
          const inputNumberOptions = (config as InputNumberConfigType).options;
          return (
            <ContainerTool
              contentType={type}
              selected={selectedItem.value.id === props.config.id}
              onSelected={() => onActived(config)}
              onDelete={() => onDelete(config.id)}
            >
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
            </ContainerTool>
          );
        case 'Select':
          const selectOptions = (config as SelectConfigType).options;

          return (
            <ContainerTool
              contentType={type}
              selected={selectedItem.value.id === props.config.id}
              onSelected={() => onActived(config)}
              onDelete={() => onDelete(config.id)}
            >
              <el-form-item
                label={selectOptions.label}
                prop={selectOptions.name}
              >
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
            </ContainerTool>
          );
        case 'SelectMultiple':
          const selectMultipleOptions = (config as SelectMultipleConfigType)
            .options;
          return (
            <ContainerTool
              contentType={type}
              selected={selectedItem.value.id === props.config.id}
              onSelected={() => onActived(config)}
              onDelete={() => onDelete(config.id)}
            >
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
            </ContainerTool>
          );
        case 'Link':
          const linkOptions = (config as LinkConfigType).options;
          return (
            <ContainerTool
              contentType={type}
              selected={selectedItem.value.id === config.id}
              onSelected={() => onActived(config)}
              onDelete={() => onDelete(config.id)}
            >
              <el-link
                target="_blank"
                type={linkOptions.type}
                underline={linkOptions.underline}
                href={linkOptions.href}
                disabled={linkOptions.disabled}
              >
                {linkOptions.text}
              </el-link>
            </ContainerTool>
          );
        case 'DatePicker':
          const datePickerOptions = (config as DatePickerConfigType).options;

          return (
            <ContainerTool
              contentType={type}
              selected={selectedItem.value.id === config.id}
              onSelected={() => onActived(config)}
              onDelete={() => onDelete(config.id)}
            >
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
            </ContainerTool>
          );
        case 'DatePickerRange':
          const datePickerRangeOptions = (config as DatePickerRangeConfigType)
            .options;

          return (
            <ContainerTool
              contentType={type}
              selected={selectedItem.value.id === config.id}
              onSelected={() => onActived(config)}
              onDelete={() => onDelete(config.id)}
            >
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
            </ContainerTool>
          );
        case 'Table':
          const tableColumns = (config as TableConfigType).columns;
          return (
            <ContainerTool
              contentType={type}
              selected={selectedItem.value.id === config.id}
              onSelected={() => onActived(config)}
              onDelete={() => onDelete(config.id)}
            >
              <el-table>
                {tableColumns.map((column) => {
                  return (
                    <el-table-column
                      label={column.label}
                      prop={column.prop}
                    ></el-table-column>
                  );
                })}
              </el-table>
            </ContainerTool>
          );
        // case 'Radio':
        //   return (
        //     <el-radio-group>
        //       <el-radio label="3">Option A</el-radio>
        //       <el-radio label="6">Option B</el-radio>
        //       <el-radio label="9">Option C</el-radio>
        //     </el-radio-group>
        //   );
        // case 'Checkbox':
        //   return (
        //     <el-checkbox-group>
        //       <el-checkbox label="Option A" />
        //       <el-checkbox label="Option B" />
        //       <el-checkbox label="Option C" />
        //     </el-checkbox-group>
        //   );
        // case 'Switch':
        //   return (
        //     <el-switch
        //       inline-prompt
        //       active-color="#13ce66"
        //       inactive-color="#ff4949"
        //       active-text="Y"
        //       inactive-text="N"
        //     />
        //   );
        // case 'Slider':
        //   return <el-slider step={10} />;
        // case 'DatePicker':
        //   return <el-date-picker type="date" placeholder="Pick a day" />;
        // case 'TimePicker':
        //   return <el-time-picker arrow-control placeholder="Arbitrary time" />;
        // case 'Image':
        //   const url =
        //     'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg';
        //   const srcList = [
        //     'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        //     'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        //     'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
        //     'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
        //     'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
        //     'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
        //     'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
        //   ];
        //   return (
        //     <el-image
        //       style="width: 100px; height: 100px"
        //       src={url}
        //       preview-src-list={srcList}
        //       initial-index={4}
        //       fit="cover"
        //     />
        //   );
        case 'Card':
          const cardOptions = (config as CardConfigType).options;
          return (
            <ContainerTool
              contentType={config.type}
              selected={selectedItem.value.id === config.id}
              onSelected={() => onActived(config)}
              onDelete={() => onDelete(config.id)}
              onCopy={() => onCopy(config.id)}
            >
              <el-card header={cardOptions.header} shadow={cardOptions.shadow}>
                <nested-draggable
                  tasks={(config as CardConfigType).list}
                  onActived={onActived}
                  onCopy={onCopy}
                  onDelete={onDelete}
                />
              </el-card>
            </ContainerTool>
          );
        case 'Grid':
          return (
            <>
              <ContainerTool
                contentType={config.type}
                selected={selectedItem.value.id === config.id}
                onSelected={() => onActived(config)}
                onDelete={() => onDelete(config.id)}
                onCopy={() => onCopy(config.id)}
              >
                <el-row>
                  {(config as GridConfigType).cols.map((colItem) => {
                    return (
                      <el-col span={colItem.options.span}>
                        <ContainerTool
                          contentType={colItem.type}
                          selected={selectedItem.value.id === colItem.id}
                          onSelected={() => onActived(colItem)}
                          onDelete={() => onDelete(colItem.id)}
                          onCopy={() => onCopy(colItem.id)}
                        >
                          <nested-draggable
                            tasks={colItem.list}
                            onActived={onActived}
                            onCopy={onCopy}
                            onDelete={onDelete}
                          />
                        </ContainerTool>
                      </el-col>
                    );
                  })}
                </el-row>
              </ContainerTool>
            </>
          );
        default:
          break;
      }
    };
    return () => {
      return <div>{render(props.config)}</div>;
    };
  },
});
