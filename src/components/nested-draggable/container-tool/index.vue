<template>
  <div
    class="container-tool"
    :class="{ selected: selected }"
    @click.stop="onSelected"
  >
    <div class="container-tool-block" v-if="selected">{{ contentType }}</div>
    <slot></slot>
    <div class="operation-toolbar" v-if="selected">
      <el-icon v-if="['Grid', 'Col'].includes(contentType)" @click="onCopy">
        <DocumentCopy />
      </el-icon>
      <el-icon @click.stop="onDelete">
        <Delete />
      </el-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Delete, DocumentCopy } from '@element-plus/icons-vue';
export default defineComponent({
  name: 'ContainerTool',
  components: {
    Delete,
    DocumentCopy,
  },
  emits: ['selected', 'delete', 'copy'],
  props: {
    selected: {
      type: Boolean,
    },
    contentType: {
      type: String,
      default: 'sdas',
    },
  },
  setup(props, { emit }) {
    const onSelected = () => {
      emit('selected');
    };
    const onDelete = () => {
      emit('delete');
    };
    const onCopy = () => {
      emit('copy');
    };
    return {
      onSelected,
      onDelete,
      onCopy,
    };
  },
});
</script>
<style lang="less">
.container-tool {
  position: relative;
  cursor: move;
  padding: 5px;
  border: 2px solid transparent;
  border-radius: 3px;
  &.selected {
    border-color: var(--el-color-primary);
  }
  .container-tool-block {
    position: absolute;
    left: 0;
    top: 0;
    background-color: var(--el-color-primary);
    color: #fff;
    z-index: 1;
    font-size: 12px;
    padding: 0 2px;
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
    z-index: 1;
    .el-icon + .el-icon {
      margin-left: 10px;
    }
  }
}
</style>
