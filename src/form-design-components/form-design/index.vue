<template>
  <div class="form-design-warper">
    <design-side />
    <design-content
      :usedRenderData="usedRenderData"
      :formModel="formModel"
      :formConfig="formConfig"
    />
    <design-setting />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, computed } from 'vue';
import { formCurrentProvideKey } from './../types/provide-inject';
export default defineComponent({
  name: 'form-design',
  props: {
    formModel: {
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
  setup(props) {
    provide(formCurrentProvideKey, {
      formModel: props.formModel,
      formConfig: props.formConfig,
    });
  },
});
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
.form-design-warper {
  display: flex;
  height: 100vh;
  min-width: 1200px;
  margin: 0 auto;
}
</style>
