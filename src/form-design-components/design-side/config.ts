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
    icon: 'card',
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
    icon: 'grid-2',
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
    icon: 'grid-3',
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
    icon: 'grid-4',
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
    icon: 'divider',
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
    icon: 'button',
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
    icon: 'input',
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
    icon: 'textarea',
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
    icon: 'inputNumber',
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
    icon: 'select',
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
    icon: 'selectMultiple',
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
    icon: 'link',
    options: {
      type: 'primary',
      underline: true,
      disabled: false,
      href: '',
      text: 'link',
    },
  },
  {
    name: '日期',
    type: 'DatePicker',
    id: 'jvjhxddf',
    icon: 'date',
    options: {
      name: 'DatePicker',
      label: 'Date',
      size: 'default',
      disabled: false,
    },
  },
  {
    name: '日期范围',
    type: 'DatePickerRange',
    id: 'sdgdfhfg',
    icon: 'dateRange',
    options: {
      name: 'DatePickerRange',
      label: 'DateRange',
      size: 'default',
      disabled: false,
    },
  },
  {
    name: '表格',
    type: 'Table',
    id: 'jdfghs',
    icon: 'table',
    options: {
      name: 'Table',
    },
    columns: [
      {
        id: 'hdfsds',
        prop: 'column',
        label: 'column',
        contentType: 'Input',
        selectOptions: [],
      },
      {
        id: 'kykfds',
        prop: 'column',
        label: 'column',
        contentType: 'Input',
        selectOptions: [],
      },
    ],
  },
]);

const mainContainerType = 'Form';

const primaryVesselTypes = ['Card'];

const layoutContainerTypes = ['Grid', 'Col'];

const basicGraggableTypes = basicComponents.value.map((com) => com.type);

export const canOrNotBeMoved = (currentType: string, toType: string) => {
  if (
    primaryVesselTypes.includes(currentType) &&
    toType === mainContainerType
  ) {
    return true;
  }
  if (
    layoutContainerTypes.includes(currentType) &&
    primaryVesselTypes.includes(toType)
  ) {
    return true;
  }
  type BasicType = typeof basicGraggableTypes[number];
  if (
    basicGraggableTypes.includes(currentType as BasicType) &&
    (layoutContainerTypes.includes(toType) ||
      primaryVesselTypes.includes(toType))
  ) {
    return true;
  }
  return false;
};
