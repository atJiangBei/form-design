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
  icon: 'Grid';
  options: GridConfigOptionsType;
  cols: ColConfigType[];
};

export type ContainerComponentsType = [
  GridConfigType,
  GridConfigType,
  GridConfigType
];

export type ButtonConfigOptionsType = {
  name: string;
  label: string;
  type: string;
  size: string;
  disabled: boolean;
};
export type ButtonConfigType = {
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
};
export type SelectConfigType = {
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
};

export type SelectMultipleConfigType = {
  type: 'SelectMultiple';
  id: string;
  icon: string;
  options: SelectMultipleConfigOptionsType;
};

export type BasicComponentsType = [
  DividerConfigType,
  ButtonConfigType,
  InputConfigType,
  TextareaConfigType,
  InputNumberConfigType,
  SelectConfigType,
  SelectMultipleConfigType
];

export type AllComponentType =
  | GridConfigType
  | ColConfigType
  | ButtonConfigType
  | InputConfigType
  | DividerConfigType
  | TextareaConfigType
  | InputNumberConfigType
  | SelectConfigType
  | SelectMultipleConfigType;
