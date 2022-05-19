<template>
  <div
    class="container-tool"
    :class="{ selected: selected }"
    @click="onSelected"
  >
    <slot></slot>
    <div class="operation-toolbar" v-if="selected">
      <el-icon @click="onDelete">
        <Delete />
      </el-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Delete } from '@element-plus/icons-vue';
export default defineComponent({
  name: 'ContainerTool',
  components: {
    Delete,
  },
  emits: ['selected', 'delete'],
  props: {
    selected: {
      type: Boolean,
    },
  },
  setup(props, { emit }) {
    const onSelected = () => {
      emit('selected');
    };
    const onDelete = () => {
      emit('delete');
    };
    return {
      onSelected,
      onDelete,
    };
  },
});
</script>
<style lang="less">
.container-tool {
  position: relative;
  cursor: move;
  padding: 10px 5px;
  border: 2px solid transparent;
  border-radius: 3px;
  &.selected {
    border-color: var(--el-color-primary);
  }
  .operation-toolbar {
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: var(--el-color-primary);
    display: flex;
    align-items: center;
    padding: 5px 10px;
    color: #fff;
    cursor: pointer;
  }
}
</style>
