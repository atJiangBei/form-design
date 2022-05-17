import { reactive, ref } from 'vue-demi';

export const formModel = reactive<{ [key: string]: any }>({});

export const formRules = reactive({});

export const selectedItem = ref<any>({});
