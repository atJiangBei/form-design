import { defineComponent, reactive, PropType } from 'vue';
import RenderFormItem from '../render-form-item/index';
import { Plus, Delete } from '@element-plus/icons-vue';
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
  TableConfigType,
  AllComponentType,
} from '@/form-design-components/types/form-design-el';
import { createDefaultFormItemValue } from '@/form-design-components/utils/crud';

const TableCell = defineComponent({
  name: 'TableCell',
  props: {
    column: {
      type: Object as PropType<any>,
    },
    row: {
      type: Object as PropType<any>,
    },
  },
  setup(props) {
    const renderForm = () => {
      const { column, row } = props;

      switch (column.contentType) {
        case 'Input':
          return <el-input v-model={row[column.prop]} size="small"></el-input>;
        case 'InputNumber':
          return (
            <el-input-number
              v-model={row[column.prop]}
              size="small"
            ></el-input-number>
          );
        case 'Select':
          return (
            <el-select v-model={row[column.prop]} size="small">
              {column.selectOptions.map((item: any) => {
                return (
                  <el-option value={item.value} label={item.label}></el-option>
                );
              })}
            </el-select>
          );
        case 'SelectMultiple':
          return (
            <el-select v-model={row[column.prop]} size="small" multiple>
              {column.selectOptions.map((item: any) => {
                return (
                  <el-option value={item.value} label={item.label}></el-option>
                );
              })}
            </el-select>
          );
        case 'DatePicker':
          return (
            <el-date-picker
              v-model={row[column.prop]}
              type="date"
              size="small"
            />
          );
        case 'DateTimePicker':
          return (
            <el-date-picker
              v-model={row[column.prop]}
              type="datetime"
              size="small"
            />
          );
      }
    };
    return () => {
      return renderForm();
    };
  },
});
const BlockTable = defineComponent({
  name: 'BolckTable',
  props: {
    columns: {
      type: Array as PropType<any[]>,
      default: () => [],
    },
    tableData: {
      type: Array as PropType<any[]>,
      default: () => [],
    },
  },
  setup(props) {
    const add = () => {
      const { columns, tableData } = props;
      const row: any = {};
      columns.forEach((column) => {
        row[column.prop] = createDefaultFormItemValue(column.contentType);
      });
      console.log(tableData);
      tableData.push(row);
    };
    const deleteColumn = (index: number) => {
      props.tableData.splice(index, 1);
    };
    return () => {
      const { columns, tableData } = props;

      return (
        <div class="block-table-container ym-table">
          <div class="block-table-header">
            <el-icon color="#0052d9" onClick={add}>
              <Plus />
            </el-icon>
          </div>
          <el-table border stripe data={tableData}>
            {columns.map((column) => {
              return (
                <el-table-column label={column.label} prop={column.prop}>
                  {{
                    default: ({ row }: { row: any }) => {
                      return <TableCell column={column} row={row} />;
                    },
                  }}
                </el-table-column>
              );
            })}
            <el-table-column width="70px">
              {{
                default: ({ $index }: { $index: number }) => (
                  <el-button
                    icon={Delete}
                    type="danger"
                    size="small"
                    onClick={() => deleteColumn($index)}
                  ></el-button>
                ),
              }}
            </el-table-column>
          </el-table>
        </div>
      );
    };
  },
});

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
    const initBasic = () => {
      const { templateConfig: config, formModel } = props;
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
        case 'Table':
          const tableOptions = (config as TableConfigType).options;
          formModel[tableOptions.name] = formModel[tableOptions.name] || [];
          return;
        default:
          break;
      }
    };
    initBasic();
    const render = (config: AllComponentType) => {
      const { formModel } = props;

      const { type } = config;
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

        case 'Table':
          const { options: tableOptions, columns: tableColumns } =
            config as TableConfigType;
          return (
            <BlockTable
              columns={tableColumns}
              tableData={formModel[tableOptions.name]}
            ></BlockTable>
          );
        case 'Card':
          const cardOptions = (config as CardConfigType).options;
          return (
            <el-card header={cardOptions.header} shadow={cardOptions.shadow}>
              <RenderFormItem
                formModel={formModel}
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
                      <RenderFormItem
                        formModel={formModel}
                        usedRenderData={colItem.list}
                      />
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
