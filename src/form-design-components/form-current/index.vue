<template>
  <el-form
    :model="formModel"
    :rules="formRules"
    v-bind="formConfig"
    ref="templateFormRef"
  >
    <nested-draggable
      :tasks="usedRenderData"
      @actived="onActived"
      @copy="onCopy"
      @delete="onDelete"
    ></nested-draggable>
  </el-form>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { templateFormRef } from '@/form-design-components/store/globalData';
export default defineComponent({
  name: 'form-current',
  props: {
    formModel: {
      type: Object,
      default: () => ({}),
    },
    formRules: {
      type: Object,
      default: () => ({}),
    },
    formConfig: {
      type: Object,
      default: () => ({}),
    },
    usedRenderData: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, { emit }) {
    const onActived = (...arg: any[]) => {
      emit('actived', ...arg);
    };
    const onCopy = (...arg: Array<any>) => {
      emit('copy', ...arg);
    };
    const onDelete = (...arg: Array<any>) => {
      emit('delete', ...arg);
    };
    return {
      templateFormRef,
      onActived,
      onCopy,
      onDelete,
    };
  },
});
</script>
