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
                <label-item :label="element.type" :icon="element.icon">
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
            >
              <template #item="{ element }">
                <label-item :label="element.type" :icon="element.icon">
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
import LabelItem from './components/label-item';
import emit from '@/utils/emit';
import { reactive, ref, defineComponent } from 'vue';
export default defineComponent({
  name: 'design-side',
  components: {
    LabelItem,
  },
  setup(props) {
    const dragstart = (type) => {
      emit.emit('dragstart', type, String(Math.random()));
    };
    const containerComponents = reactive([
      {
        type: 'Grid',
        id: 'asfdsfsd',
        icon: 'Grid',
        tasks: [[], []],
      },
    ]);

    const basicComponents = ref([
      {
        type: 'Button',
        id: 'asdasdas',
        icon: 'Tools',
      },
      {
        type: 'Input',
        id: 'dasdas',
        icon: 'Edit',
      },
      {
        type: 'InputNumber',
        id: 'dghdhfg',
        icon: 'Edit',
      },
      {
        type: 'Textarea',
        id: 'dasdsdcsdfas',
        icon: 'EditPen',
      },
      {
        type: 'Radio',
        id: 'sdfsdfsd',
        icon: 'Pointer',
      },
      {
        type: 'Checkbox',
        id: 'asdassad',
        icon: 'Checked',
      },
      {
        type: 'Select',
        id: 'fdgdfgdfg',
        icon: 'Select',
      },
      {
        type: 'Switch',
        id: 'asfasf',
        icon: 'TurnOff',
      },
      {
        type: 'DatePicker',
        id: 'asdasdas',
        icon: 'Timer',
      },
      {
        type: 'Slider',
        id: 'sdfsdfsdf',
        icon: 'Operation',
      },
    ]);
    const cloneData = (data) => {
      data = {
        ...data,
        id: String(Math.random()),
      };
      if (data.type === 'Grid') {
        data.tasks = [[], []];
      }
      return data;
    };
    const activeNames = ref(['container', 'basic']);
    return {
      dragstart,
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
