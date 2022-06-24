<template>
  <span class="label-item">
    <span>
      <!-- <el-icon>
        <component :is="icon" />
      </el-icon> -->
      <svg-icon title="全屏" :icon="icon" className="side-icon" />
      {{ label }}
    </span>
  </span>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'label-item',
  props: {
    label: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: 'Grid',
    },
  },
});
</script>
<style lang="less" scoped>
.label-item {
  display: inline-block;
  height: 28px;
  line-height: 28px;
  width: 110px;
  //   float: left;
  margin: 2px 6px 6px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  background: #f1f2f3;
  cursor: move;
  color: #409eff;
  .side-icon {
    margin-left: 0.35em;
    margin-right: 0.35em;
    vertical-align: -0.15em;
  }
}
</style>
