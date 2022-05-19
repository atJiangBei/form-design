<template>
  <aside class="design-setting">
    <div class="design-setting-content">
      <el-tabs v-model="activeName">
        <el-tab-pane label="组件属性" name="fieldAttribute">
          <render-setting></render-setting>
        </el-tab-pane>
      </el-tabs>
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
    const activeName = ref('fieldAttribute');
    return {
      activeName,
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
