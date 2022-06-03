<template>
  <div class="form-side">
    <div>
      <el-collapse v-model="activeNames">
        <el-collapse-item title="容器" name="container">
          <div>
            <draggable
              class="label-list"
              item-key="id"
              v-model="containerComponents"
              :group="{ name: 'content', pull: 'clone' }"
              :clone="cloneData"
            >
              <template #item="{ element }">
                <label-item :label="element.name" :icon="element.icon">
                </label-item>
              </template>
            </draggable>
          </div>
        </el-collapse-item>
        <el-collapse-item title="基本组件" name="basic">
          <div>
            <draggable
              class="label-list"
              item-key="id"
              v-model="basicComponents"
              :group="{ name: 'content', pull: 'clone', put: false }"
              :clone="cloneData"
            >
              <template #item="{ element }">
                <label-item :label="element.name" :icon="element.icon">
                </label-item>
              </template>
            </draggable>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script lang="ts">
import LabelItem from './label-item/index.vue';
import { ref, defineComponent } from 'vue';
import { basicComponents, containerComponents } from './config';
import { createId } from './../utils/crud';

export default defineComponent({
  name: 'design-side',
  components: {
    LabelItem,
  },
  setup(props) {
    const cloneData = (data: any) => {
      const id = createId();
      data = {
        ...JSON.parse(JSON.stringify(data)),
        id: id,
      };
      if (data.type !== 'Grid') {
        if (data.options) {
          data.options.name += id;
        }
      }

      if (data.type === 'Grid') {
        data.cols.forEach((col: any) => {
          col.id = createId();
        });
      }
      return data;
    };
    const activeNames = ref(['container', 'basic']);
    return {
      basicComponents,
      containerComponents,
      cloneData,
      activeNames,
    };
  },
});
</script>

<style lang="less">
.form-side {
  box-sizing: border-box;
  width: 260px;
  padding: 10px;
}
.label-list {
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
}
</style>
