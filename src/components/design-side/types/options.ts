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
  type: 'Grid';
  id: string;
  icon: 'Grid';
  options: GridConfigOptionsType;
  cols: ColConfigType[];
};

export type ContainerComponentsType = [GridConfigType];

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

export type BasicComponentsType = [
  DividerConfigType,
  ButtonConfigType,
  InputConfigType
];

export type AllComponentType =
  | GridConfigType
  | ColConfigType
  | ButtonConfigType
  | InputConfigType
  | DividerConfigType;
