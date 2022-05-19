import { reactive, ref } from 'vue-demi';

export const templateFormRef = ref();

export const formModel = reactive<{ [key: string]: any }>({});

export const formRules = reactive<{ [key: string]: any }>({});

export const selectedItem = ref<any>({});

export function emptyAll() {
  emptyObj(formModel);
  emptyObj(formRules);
  selectedItem.value = {};
  renderOptions.value = [];
}

function emptyObj(obj: { [key: string]: any }) {
  for (let k in obj) {
    delete obj[k];
  }
}

export const renderOptions = ref([
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
