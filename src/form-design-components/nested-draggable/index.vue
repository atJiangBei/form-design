<template>
  <draggable
    class="draggable-nested-list"
    tag="ul"
    item-key="id"
    animation="300"
    :list="tasks"
    :move="checkMove"
    :group="{ name: 'content' }"
  >
    <template #item="{ element }">
      <li class="draggable-nested-item" :data-type="element.type">
        <render-component
          :config="element"
          @actived="onActived"
          @copy="onCopy"
          @delete="onDelete"
        />
      </li>
    </template>
  </draggable>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import RenderComponent from './render-component';
export default defineComponent({
  name: 'nested-draggable',
  components: {
    RenderComponent,
  },
  emits: ['actived', 'copy', 'delete'],
  props: {
    tasks: {
      required: true,
      type: Array,
    },
  },
  setup(props, { emit }) {
    const onActived = (...arg: Array<any>) => {
      emit('actived', ...arg);
    };
    const onCopy = (...arg: Array<any>) => {
      emit('copy', ...arg);
    };
    const onDelete = (...arg: Array<any>) => {
      emit('delete', ...arg);
    };
    const checkMove = (evt: any) => {
      //const currentType = evt.dragged.dataset.type;
      //const toType = evt.to.dataset.type;
      return true;
    };
    return {
      onCopy,
      onDelete,
      onActived,
      checkMove,
    };
  },
});
</script>
<style scoped>
.draggable-nested-list {
  box-sizing: border-box;
  flex: 1;
  width: 100%;
  /* height: 100%; */
  min-height: 50px;
  list-style: none;
  border: 1px dashed #00497d;
}
.draggable-nested-item {
  cursor: move;
  /* padding: 5px; */
  border: 1px dashed #0092ff;
}
</style>
