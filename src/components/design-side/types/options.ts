export type ButtonConfigType = {
  type: 'Button';
  id: string;
  icon: string;
  options: {
    name: string;
    label: string;
    type: string;
    size: string;
    disabled: boolean;
  };
};
export type InputOptions = {
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
  options: InputOptions;
};

export type BasicComponentsType = [ButtonConfigType, InputConfigType];
