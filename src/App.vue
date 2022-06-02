<template>
  <form-design
    :formModel="formModel"
    :formConfig="formConfig"
    :usedRenderData="usedRenderData"
  />
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
const formModel = reactive<{ [key: string]: any }>({});

const formConfig = reactive({
  labelWidth: 100,
  labelPosition: 'right',
});

const usedRenderData = ref([]);
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
</style>
