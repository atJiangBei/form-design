<template>
  <draggable
    class="draggable-nested-list"
    tag="ul"
    item-key="id"
    animation="300"
    :list="tasks"
    group="content"
    :group="{ name: 'content' }"
  >
    <template #item="{ element }">
      <li class="draggable-nested-item">
        <render-component :config="element" />
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
  props: {
    tasks: {
      required: true,
      type: Array,
    },
  },
});
</script>
<style scoped>
.draggable-nested-list {
  box-sizing: border-box;
  flex: 1;
  width: 100%;
  height: 100%;
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
