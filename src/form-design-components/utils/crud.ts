import {
  AllComponentType,
  GridConfigType,
  ColConfigType,
} from '../design-side/types/options';
import { selectedItem } from '../store/globalData';

let num = 0;
export const createId = () => ++num + String(Math.floor(Math.random() * 1000));
export const hasValueComponentTypes = [
  'Input',
  'InputNumber',
  'Textarea',
  'Select',
  'SelectMultiple',
];

export const deleteComponent = (
  id: string,
  usedRenderData: any,
  formModel: any
) => {
  if (selectedItem.value.id === id) {
    selectedItem.value = {};
  }
  const result = findParentCurrentIndex(id, usedRenderData);
  const [parent, index] = result;
  if (parent.length > 0 && index > -1) {
    const current = parent[index];
    deleteComponentFormName(current, formModel);
    parent.splice(index, 1);
  } else {
    console.warn('not');
  }
};

export const deleteComponentFormName = (
  componentConfig: AllComponentType,
  formModel: any
) => {
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
      config.cols.forEach((col) => {
        recursion(col);
      });
    } else if (config.type === 'Col') {
      config.list.forEach((item) => {
        recursion(item);
      });
    }
  };
  recursion(componentConfig);
};

export const copyComponent = (id: string, usedRenderData: any) => {
  const result = findParentCurrentIndex(id, usedRenderData);
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
const findParentCurrentIndex = (id: string, sourceData: any[]) => {
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
  recursion(sourceData);
  return result;
};

export function emptyAll() {
  // emptyObj(formModel);
  // emptyObj(formRules);
  // selectedItem.value = {};
  // usedRenderData.value = [];
}

export function emptyObj(obj: { [key: string]: any }) {
  for (let k in obj) {
    console.log(k);
    delete obj[k];
  }
}
