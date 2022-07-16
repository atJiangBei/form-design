<template>
  <div class="render-basic-table">
    <div>
      <div class="table-columns-title">
        <span>Table-Columns</span>
        <span>
          <el-icon color="#0034b5" @click="addColumn">
            <Plus />
          </el-icon>
        </span>
      </div>
      <draggable
        class="table-basic-columns"
        tag="ul"
        handle=".drag"
        item-key="id"
        animation="300"
        :list="columns"
      >
        <template #item="{ element: column, index }">
          <li class="table-column-item">
            <div class="table-column-title">
              <span>{{ column.label }}</span>
              <span>
                <el-icon color="#0052d9" class="drag">
                  <Rank />
                </el-icon>
                <el-icon color="#e34d59" @click="deleteColumn(index)">
                  <Delete />
                </el-icon>
              </span>
            </div>
            <div class="table-column-content">
              <el-form :model="column" size="small" label-width="50px">
                <el-form-item label="label">
                  <el-input v-model="column.label"></el-input>
                </el-form-item>
                <el-form-item label="prop">
                  <el-input v-model="column.prop"></el-input>
                </el-form-item>
                <el-form-item label="type">
                  <el-select v-model="column.contentType" placeholder="Select">
                    <el-option
                      v-for="option in typeConfig"
                      :label="option.label"
                      :value="option.value"
                    />
                  </el-select>
                </el-form-item>
              </el-form>
              <div
                v-if="['Select', 'SelectMultiple'].includes(column.contentType)"
              >
                <el-divider content-position="center">选项设置</el-divider>
                <render-select-option
                  :current-options="column.selectOptions"
                ></render-select-option>
              </div>
            </div>
          </li>
        </template>
      </draggable>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { createId } from '@/form-design-components/utils/crud';
import RenderSelectOption from './../render-select-option/index.vue';
import { Plus, Rank, Delete } from '@element-plus/icons-vue';
export default defineComponent({
  components: {
    RenderSelectOption,
    Plus,
    Rank,
    Delete,
  },
  props: {
    columns: {
      type: Array as PropType<any[]>,
      default: () => [],
    },
  },
  setup(props) {
    const active = ref([]);
    console.log('render-table', props.columns);
    const typeConfig = ref([
      {
        label: 'Input',
        value: 'Input',
      },
      {
        label: 'InputNumber',
        value: 'InputNumber',
      },
      {
        label: 'Select',
        value: 'Select',
      },
      {
        label: 'SelectMultiple',
        value: 'SelectMultiple',
      },
      {
        label: 'Date',
        value: 'DatePicker',
      },
      {
        label: 'DateTime',
        value: 'DateTimePicker',
      },
    ]);
    const deleteColumn = (index: number) => {
      props.columns.splice(index, 1);
    };
    const addColumn = () => {
      const id = createId();
      props.columns.push({
        id: id,
        prop: 'column' + id,
        label: 'column' + id,
        contentType: 'Input',
        selectOptions: [],
      });
    };
    return {
      typeConfig,
      addColumn,
      deleteColumn,
    };
  },
});
</script>
<style lang="less" scoped>
.render-basic-table {
  .table-columns-title {
    font-size: 14px;
    padding: 5px;
    color: var(--ym-font-color-gray3);
    display: flex;
    justify-content: space-between;
  }
  .table-basic-columns {
    font-size: 12px;
    padding-left: 10px;
  }
  .table-column-item {
    border-bottom: 1px solid #fff;
  }
  .table-column-title {
    background-color: var(--ym-gray-1);
    padding: 5px;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
