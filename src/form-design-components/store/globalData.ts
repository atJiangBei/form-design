import { ref, reactive } from 'vue';
export const templateFormRef = ref();

export const selectedItem = ref<any>({});
export const formRules = reactive<{ [key: string]: any }>({});
