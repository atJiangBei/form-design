<template>
  <aside class="design-setting">
    <div class="design-setting-content">
      <render-setting></render-setting>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import renderSetting from './components/render-setting/index';

export default defineComponent({
  name: 'design-setting',
  components: {
    renderSetting,
  },
  setup() {
    const activeNames = ref(['basic', 'complex']);
    return {
      activeNames,
    };
  },
});
</script>

<style lang="less" scoped>
.design-setting {
  width: 260px;
}
.design-setting-content {
  padding: 10px;
  ::v-deep .el-collapse-item__header {
    color: var(--el-color-primary);
    font-weight: 600;
  }
}
</style>
