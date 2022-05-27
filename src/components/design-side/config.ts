import { reactive, ref } from 'vue';
import { BasicComponentsType, ContainerComponentsType } from './types/options';

export const containerComponents = ref<ContainerComponentsType>([
  {
    type: 'Grid',
    id: 'asfdsfsd',
    icon: 'Grid',
    options: {},
    cols: [
      {
        type: 'Col',
        id: 'jghfgs',
        options: {
          span: 12,
        },
        list: [],
      },
      {
        type: 'Col',
        id: 'trhvsgf',
        options: {
          span: 12,
        },
        list: [],
      },
    ],
  },
]);

export const basicComponents = ref<BasicComponentsType>([
  {
    type: 'Divider',
    id: 'fdsfdsgfj',
    icon: 'Tools',
    options: {
      title: 'Title',
      direction: 'horizontal',
      borderStyle: 'solid',
      contentPosition: 'center',
    },
  },
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
  {
    type: 'Textarea',
    id: 'dgdfhgj',
    icon: 'Edit',
    options: {
      name: 'Textarea',
      label: 'Textarea',
      size: 'default',
      disabled: false,
      required: false,
      resize: 'both',
      autosize: false,
      rows: 2,
    },
  },
  {
    type: 'InputNumber',
    id: 'sdgdfgdf',
    icon: 'Edit',
    options: {
      name: 'InputNumber',
      label: 'InputNumber',
      size: 'default',
      disabled: false,
      required: false,
      min: 0,
      max: 100,
      step: 1,
    },
  },
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
