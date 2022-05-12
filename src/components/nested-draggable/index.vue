<template>
  <draggable
    class="nested-content"
    tag="ul"
    item-key="id"
    animation="300"
    :list="tasks"
    group="content"
    :group="{ name: 'content' }"
  >
    <template #item="{ element }">
      <li class="content-item">
        <render-component :config="element" />
        <!-- <template v-if="element.tasks">
          <nested-draggable :tasks="element.tasks" />
        </template> -->
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
.nested-content {
  flex: 1;
  box-sizing: border-box;
  width: 100%;
  min-height: 50px;
  list-style: none;
  border: 1px dashed #000;
}
.content-item {
  padding: 10px;
  border: 1px dashed #0092ff;
  cursor: move;
}
</style>
