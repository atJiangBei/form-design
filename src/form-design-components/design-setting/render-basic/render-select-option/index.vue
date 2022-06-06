<template>
  <div class="render-select-option">
    <div>
      <el-empty :image-size="20" v-if="!currentOptions.length" />
      <div class="render-select-option-list" v-else>
        <div v-for="(op, index) in currentOptions">
          <el-row :gutter="10">
            <el-col :span="8">
              <el-input size="small" placeholder="label" v-model="op.label" />
            </el-col>
            <el-col :span="8">
              <el-input size="small" placeholder="value" v-model="op.value" />
            </el-col>
            <el-col :span="8">
              <el-icon @click="onDeleteCurrent(index)"
                ><Delete color="#f00"
              /></el-icon>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

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
            <el-button type="primary" size="small" text @click="onImported(op)">
              导入
            </el-button>
            <el-icon @click="onDelete(index)"><Delete color="#f00" /></el-icon>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue';
import { Delete } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';
const createKey = (): string => String(Math.random());
type OptionsType = { label: string; value: string }[];
export default defineComponent({
  name: 'render-select-option',
  components: {
    Delete,
  },
  props: {
    currentOptions: {
      type: Array as PropType<OptionsType>,
      default: () => [],
    },
  },
  setup(props) {
    const options = reactive<OptionsType>([
      { label: '选项1', value: 'select1' },
    ]);
    const onDeleteCurrent = (index: number) => {
      props.currentOptions.splice(index, 1);
    };
    const onAdd = () => {
      options.push({
        label: '',
        value: '',
      });
    };
    const onImported = (op: { label: string; value: string }) => {
      if (!op.label || !op.value) {
        ElMessage.error('label或value不能为空');
        return;
      }
      const optionItems = props.currentOptions;
      const index = optionItems.findIndex(
        (item) => item.label === op.label || item.value === op.value
      );
      if (index > -1) {
        ElMessage.error('label或value不能重复');
        return;
      }
      optionItems.push({ ...op });
    };
    const onDelete = (index: number) => {
      options.splice(index, 1);
    };
    return {
      onDeleteCurrent,
      options,
      onAdd,
      onImported,
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
