import { reactive, ref } from 'vue';
import {
  AllComponentType,
  GridConfigType,
  ColConfigType,
} from '@/components/design-side/types/options';

let num = 0;
export const createId = () => ++num + String(Math.floor(Math.random() * 1000));

export const templateFormRef = ref();
export const testRef = ref();
export const formModel = reactive<{ [key: string]: any }>({});

export const formRules = reactive<{ [key: string]: any }>({});

export const formConfig = reactive({
  labelWidth: 100,
  labelPosition: 'right',
});

export const selectedItem = ref<any>({});

export function emptyAll() {
  emptyObj(formModel);
  emptyObj(formRules);
  selectedItem.value = {};
  renderComponentConfig.value = [];
}

function emptyObj(obj: { [key: string]: any }) {
  for (let k in obj) {
    delete obj[k];
  }
}

export const renderComponentConfig = ref([
  // {
  //   type: 'Button',
  //   id: 'sdsdfgsd',
  //   options: {
  //     name: '',
  //     type: 'default',
  //   },
  // },
  // {
  //   type: 'Input',
  //   id: 'fsdfsdfsd',
  // },
  // {
  //   type: 'Grid',
  //   id: 'dsfsdfsdfsd',
  //   tasks: [[], []],
  //   clos: [
  //     {
  //       type: 'col',
  //       span: 12,
  //       list: [],
  //     },
  //     {
  //       type: 'col',
  //       span: 12,
  //       list: [],
  //     },
  //   ],
  // },
]);

export const hasValueComponentTypes = [
  'Input',
  'InputNumber',
  'Textarea',
  'Select',
  'SelectMultiple',
];

export const deleteComponent = (id: string) => {
  const result = findParentCurrentIndex(id);
  const [parent, index] = result;
  if (parent.length > 0 && index > -1) {
    const current = parent[index];
    deleteComponentFormName(current);
    parent.splice(index, 1);
  } else {
    console.warn('not');
  }
};

export const deleteComponentFormName = (componentConfig: AllComponentType) => {
  const recursion = (config: AllComponentType) => {
    if (hasValueComponentTypes.includes(config.type)) {
      const name = (config.options as any).name;
      if (name) {
        delete formModel[name];
      }
    } else if (config.type === 'Card') {
      config.list.forEach((item) => {
        recursion(item);
      });
    } else if (config.type === 'Grid') {
      console.log(2, config.cols);
      config.cols.forEach((col) => {
        recursion(col);
      });
    } else if (config.type === 'Col') {
      console.log(2, config.list);
      config.list.forEach((item) => {
        recursion(item);
      });
    }
  };
  recursion(componentConfig);
};

export const copyComponent = (id: string) => {
  console.log(id);
  const result = findParentCurrentIndex(id);
  const [parent, index] = result;
  if (parent.length > 0 && index > -1) {
    const current = parent[index];
    let copy = null;
    switch (current.type) {
      case 'Grid':
        copy = copyGrid(current);
        break;
      case 'Col':
        copy = copyCol(current);
        break;
    }
    if (copy) {
      parent.splice(index + 1, 0, copy);
    }
  } else {
    console.warn('not');
  }
};

const copyGrid = (gridConfig: GridConfigType) => {
  gridConfig = JSON.parse(JSON.stringify(gridConfig));
  gridConfig.id = createId();
  gridConfig.cols.forEach((col) => {
    col.id = createId();
    col.list = [];
  });
  return gridConfig;
};
const copyCol = (colConfig: ColConfigType) => {
  colConfig = JSON.parse(JSON.stringify(colConfig));
  colConfig.id = createId();
  colConfig.list = [];
  return colConfig;
};

const findParentCurrentIndex = (id: string) => {
  let result: any = [];
  const recursion = (arr: any) => {
    const index = arr.findIndex((item: any) => item.id === id);
    if (index > -1) {
      result = [arr, index];
    } else {
      for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (item.type === 'Card') {
          recursion(item.list);
          continue;
        }
        if (item.type === 'Grid') {
          recursion(item.cols);
          continue;
        }
        if (item.type === 'Col') {
          recursion(item.list);
          continue;
        }
      }
    }
  };
  recursion(renderComponentConfig.value);
  return result;
};
