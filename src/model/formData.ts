import { reactive, ref } from 'vue';

export const formModel = reactive<{ [key: string]: any }>({});

export const formConfig = reactive({
  labelWidth: 100,
  labelPosition: 'right',
});

export const usedRenderData = ref([]);
