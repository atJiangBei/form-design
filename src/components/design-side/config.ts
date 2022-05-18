import { reactive, ref } from 'vue';
import { InputOptions } from './types/options';

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

export const basicComponents = ref([
  {
    type: 'Button',
    id: 'asdasdas',
    icon: 'Tools',
    options: {
      name: '',
      type: 'default',
    },
  },
  {
    type: 'Tag',
    id: 'sdfdsfs',
    icon: 'CollectionTag',
  },
  {
    type: 'Input',
    id: 'dasdas',
    icon: 'Edit',
    label: '文本框',
    options: {
      name: 'Input',
      label: 'Input',
      type: 'text',
      size: 'default',
      disabled: false,
    },
  },
  {
    type: 'InputNumber',
    id: 'dghdhfg',
    icon: 'Edit',
  },
  {
    type: 'Textarea',
    id: 'dasdsdcsdfas',
    icon: 'EditPen',
  },
  {
    type: 'Radio',
    id: 'sdfsdfsd',
    icon: 'Pointer',
  },
  {
    type: 'Checkbox',
    id: 'asdassad',
    icon: 'Checked',
  },
  {
    type: 'Select',
    id: 'fdgdfgdfg',
    icon: 'Select',
  },
  {
    type: 'Switch',
    id: 'asfasf',
    icon: 'TurnOff',
  },
  {
    type: 'Slider',
    id: 'sdfsdfsdf',
    icon: 'Operation',
  },
  {
    type: 'DatePicker',
    id: 'asdasdas',
    icon: 'Timer',
  },
  {
    type: 'TimePicker',
    id: 'asdasdasdas',
    icon: 'Clock',
  },
  {
    type: 'Image',
    id: 'sdfsdgsd',
    icon: 'Picture',
  },
  {
    type: 'Link',
    id: 'fsdfsdfs',
    icon: 'Link',
  },
]);
