export type CardConfigOptionsType = {
  header: string;
  shadow: 'always' | 'hover' | 'never';
};
export type CardConfigType = {
  name: string;
  type: 'Card';
  id: string;
  icon: string;
  options: CardConfigOptionsType;
  list: [];
};
export type GridConfigOptionsType = {};
export type ColConfigOptionsType = {
  span: number;
};
export type ColConfigType = {
  type: 'Col';
  id: string;
  options: ColConfigOptionsType;
  list: [GridConfigType, ButtonConfigType, InputConfigType] | [];
};
export type GridConfigType = {
  name: string;
  type: 'Grid';
  id: string;
  icon: string;
  options: GridConfigOptionsType;
  cols: ColConfigType[];
};

export type ContainerComponentsType = Array<
  CardConfigType | GridConfigType | ColConfigType
>;
/*
Button
*/
export type ButtonConfigOptionsType = {
  name: string;
  label: string;
  type: string;
  size: string;
  disabled: boolean;
};
export type ButtonConfigType = {
  name: string;
  type: 'Button';
  id: string;
  icon: string;
  options: ButtonConfigOptionsType;
};
export type InputConfigOptionsType = {
  name: string;
  label: string;
  type: string;
  size: string;
  disabled: boolean;
  required: boolean;
};

export type InputConfigType = {
  name: string;
  type: 'Input';
  id: string;
  icon: string;
  options: InputConfigOptionsType;
};

export type TextareaConfigOptionsType = {
  name: string;
  label: string;
  size: string;
  disabled: boolean;
  required: boolean;
  resize: string;
  autosize: boolean;
  rows: number;
};
export type TextareaConfigType = {
  name: string;
  type: 'Textarea';
  id: string;
  icon: string;
  options: TextareaConfigOptionsType;
};

export type InputNumberConfigOptionsType = {
  name: string;
  label: string;
  size: string;
  disabled: boolean;
  required: boolean;
  min: number;
  max: number;
  step: number;
};
export type InputNumberConfigType = {
  name: string;
  type: 'InputNumber';
  id: string;
  icon: string;
  options: InputNumberConfigOptionsType;
};

export type DividerConfigOptionsType = {
  title: string;
  direction: 'horizontal';
  borderStyle: 'solid' | 'dashed';
  contentPosition: 'left' | 'right' | 'center';
};

export type DividerConfigType = {
  name: string;
  type: 'Divider';
  id: string;
  icon: string;
  options: DividerConfigOptionsType;
};

export type SelectConfigOptionsType = {
  name: string;
  label: string;
  size: string;
  disabled: boolean;
  required: boolean;
  clearable: boolean;
  optionItems: { label: string; value: string }[];
};
export type SelectConfigType = {
  name: string;
  type: 'Select';
  id: string;
  icon: string;
  options: SelectConfigOptionsType;
};

export type SelectMultipleConfigOptionsType = {
  name: string;
  label: string;
  size: string;
  disabled: boolean;
  required: boolean;
  clearable: boolean;
  optionItems: { label: string; value: string }[];
};

export type SelectMultipleConfigType = {
  name: string;
  type: 'SelectMultiple';
  id: string;
  icon: string;
  options: SelectMultipleConfigOptionsType;
};

export type LinkConfigOptionsType = {
  type: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
  underline: boolean;
  disabled: boolean;
  href: string;
  text: string;
};
export type LinkConfigType = {
  name: string;
  type: 'Link';
  id: string;
  icon: string;
  options: LinkConfigOptionsType;
};

export type DatePickerConfigOptionsType = {
  name: string;
  label: string;
  size: string;
  disabled: boolean;
};
export type DatePickerConfigType = {
  name: string;
  type: 'DatePicker';
  id: string;
  icon: string;
  options: DatePickerConfigOptionsType;
};
export type DatePickerRangeConfigOptionsType = {
  name: string;
  label: string;
  size: string;
  disabled: boolean;
};
export type DatePickerRangeConfigType = {
  name: string;
  type: 'DatePickerRange';
  id: string;
  icon: string;
  options: DatePickerRangeConfigOptionsType;
};

/*
 *table column
 */
export type ColumnConfigType = {
  id: string;
  prop: string;
  label: string;
  contentType: string;
  selectOptions: any[];
};
export type TableConfigOptionsType = {
  name: string;
};

export type TableConfigType = {
  name: string;
  type: 'Table';
  id: string;
  icon: string;
  options: TableConfigOptionsType;
  columns: ColumnConfigType[];
};

export type BasicComponentsType = [
  DividerConfigType,
  ButtonConfigType,
  InputConfigType,
  TextareaConfigType,
  InputNumberConfigType,
  SelectConfigType,
  SelectMultipleConfigType,
  LinkConfigType,
  DatePickerConfigType,
  DatePickerRangeConfigType,
  TableConfigType
];

export type AllComponentType =
  | ContainerComponentsType[number]
  | BasicComponentsType[number];

export type BasicTemplateTypes = BasicComponentsType[number]['type'][];
