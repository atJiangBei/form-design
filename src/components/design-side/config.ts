import { reactive, ref } from 'vue';
import { InputOptions, BasicComponentsType } from './types/options';

export const containerComponents = reactive([
  {
    type: 'Grid',
    id: 'asfdsfsd',
    icon: 'Grid',
    tasks: [[], []],
    clos: [
      {
        type: 'col',
        span: 12,
        list: [],
      },
      {
        type: 'col',
        span: 12,
        list: [],
      },
    ],
  },
]);

export const basicComponents = ref<BasicComponentsType>([
  {
    type: 'Button',
    id: 'asdasdas',
    icon: 'Tools',
    options: {
      name: '',
      label: '',
      type: 'default',
      size: 'default',
      disabled: false,
    },
  },

  {
    type: 'Input',
    id: 'dasdas',
    icon: 'Edit',
    options: {
      name: 'Input',
      type: 'text',
      label: 'Input',
      size: 'default',
      disabled: false,
      required: false,
    },
  },
  // {
  //   type: 'InputNumber',
  //   id: 'dghdhfg',
  //   icon: 'Edit',
  // },
  // {
  //   type: 'Textarea',
  //   id: 'dasdsdcsdfas',
  //   icon: 'EditPen',
  // },

  // {
  //   type: 'Select',
  //   id: 'fdgdfgdfg',
  //   icon: 'Select',
  // },
  // {
  //   type: 'DatePicker',
  //   id: 'asdasdas',
  //   icon: 'Timer',
  // },
  // {
  //   type: 'TimePicker',
  //   id: 'asdasdasdas',
  //   icon: 'Clock',
  // },
  // {
  //   type: 'Image',
  //   id: 'sdfsdgsd',
  //   icon: 'Picture',
  // },
  // {
  //   type: 'Link',
  //   id: 'fsdfsdfs',
  //   icon: 'Link',
  // },
  // {
  //   type: 'Tag',
  //   id: 'sdfdsfs',
  //   icon: 'CollectionTag',
  // },
  // {
  //   type: 'Radio',
  //   id: 'sdfsdfsd',
  //   icon: 'Pointer',
  // },
  // {
  //   type: 'Checkbox',
  //   id: 'asdassad',
  //   icon: 'Checked',
  // },
  // {
  //   type: 'Switch',
  //   id: 'asfasf',
  //   icon: 'TurnOff',
  // },
  // {
  //   type: 'Slider',
  //   id: 'sdfsdfsdf',
  //   icon: 'Operation',
  // },
]);
