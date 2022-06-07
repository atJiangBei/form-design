import { reactive, ref } from 'vue';
import {
  BasicComponentsType,
  ContainerComponentsType,
} from '@/form-design-components/types/form-design-el';

export const containerComponents = ref<ContainerComponentsType>([
  {
    name: '卡片',
    type: 'Card',
    id: 'asfdsfsd',
    icon: 'Grid',
    options: {
      header: 'card',
      shadow: 'hover',
    },
    list: [],
  },
  {
    name: '两栅',
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
  {
    name: '三栅',
    type: 'Grid',
    id: 'fkghfjgh',
    icon: 'Grid',
    options: {},
    cols: [
      {
        type: 'Col',
        id: 'sdfsdgdfh',
        options: {
          span: 8,
        },
        list: [],
      },
      {
        type: 'Col',
        id: 'jkiului',
        options: {
          span: 8,
        },
        list: [],
      },
      {
        type: 'Col',
        id: 'kghjgs',
        options: {
          span: 8,
        },
        list: [],
      },
    ],
  },
  {
    name: '四栅',
    type: 'Grid',
    id: 'hdfvsdgsd',
    icon: 'Grid',
    options: {},
    cols: [
      {
        type: 'Col',
        id: 'sdfsdsdgh',
        options: {
          span: 6,
        },
        list: [],
      },
      {
        type: 'Col',
        id: 'uyjkdsd',
        options: {
          span: 6,
        },
        list: [],
      },
      {
        type: 'Col',
        id: 'iojd',
        options: {
          span: 6,
        },
        list: [],
      },
      {
        type: 'Col',
        id: 'ldsgsd',
        options: {
          span: 6,
        },
        list: [],
      },
    ],
  },
]);

export const basicComponents = ref<BasicComponentsType>([
  {
    name: '分割线',
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
    name: '按钮',
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
    name: '单行输入',
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
    name: '多行输入',
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
    name: '数字输入',
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
  {
    name: '单选下拉',
    type: 'Select',
    id: 'dbfgnfg',
    icon: 'Edit',
    options: {
      name: 'Select',
      label: 'Select',
      size: 'default',
      disabled: false,
      required: false,
      clearable: true,
      optionItems: [],
    },
  },
  {
    name: '多选下拉',
    type: 'SelectMultiple',
    id: 'vsdfsdfsd',
    icon: 'Edit',
    options: {
      name: 'Select',
      label: 'Multiple',
      size: 'default',
      disabled: false,
      required: false,
      clearable: true,
      optionItems: [],
    },
  },
  {
    name: '链接',
    type: 'Link',
    id: 'bfdnjmgh',
    icon: 'Edit',
    options: {
      type: 'primary',
      underline: true,
      disabled: false,
      href: '',
      text: 'link',
    },
  },
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
