<template>
  <div class="render-select-option">
    <el-button type="primary" size="small" text @click="onAdd">添加</el-button>
    <div class="render-select-option-list">
      <div v-for="(op, index) in options">
        <el-row :gutter="10">
          <el-col :span="8">
            <el-input size="small" placeholder="label" v-model="op.label" />
          </el-col>
          <el-col :span="8">
            <el-input size="small" placeholder="value" v-model="op.value" />
          </el-col>
          <el-col :span="8">
            <el-icon @click="onDelete(index)"><Delete color="#f00" /></el-icon>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Delete } from '@element-plus/icons-vue';
export default defineComponent({
  name: 'render-select-option',
  components: {
    Delete,
  },
  props: {
    options: {
      type: Array,
      default: () => [{ label: '选项1', value: 'select1' }],
    },
  },
  setup(props) {
    const onAdd = () => {};
    const onDelete = (index: number) => {
      props.options.splice(index, 1);
    };
    return {
      onAdd,
      onDelete,
    };
  },
});
</script>
<style lang="less">
.render-select-option {
  .render-select-option-list {
    padding: 10px 5px;
    > div {
      margin-bottom: 10px;
    }
  }
}
</style>
