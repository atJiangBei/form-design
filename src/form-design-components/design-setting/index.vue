<template>
  <aside class="design-setting">
    <div class="design-setting-content">
      <el-tabs v-model="activeName">
        <el-tab-pane label="组件属性" name="fieldAttribute">
          <render-item-setting></render-item-setting>
        </el-tab-pane>
        <el-tab-pane label="表单属性" name="formAttribute">
          <render-form-setting></render-form-setting>
        </el-tab-pane>
      </el-tabs>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import renderItemSetting from './render-item-setting/index';
import renderFormSetting from './render-form-setting/index';

export default defineComponent({
  name: 'design-setting',
  components: {
    renderItemSetting,
    renderFormSetting,
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
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #999b9c;
    border-radius: 5px;
  }
}

.design-setting-content {
  padding: 10px;
  ::v-deep .el-collapse-item__header {
    color: var(--el-color-primary);
    font-weight: 600;
  }
}
</style>
