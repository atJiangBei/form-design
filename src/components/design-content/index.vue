<template>
  <div class="design-content">
    <header>
      <div style="margin-right: 10px">
        <el-button type="primary">Basic</el-button>
        <el-button type="success">Query</el-button>
        <el-button type="warning">Reset</el-button>
      </div>
      <el-button-group class="ml-4">
        <el-button type="primary">Delete</el-button>
        <el-button type="primary">Preview</el-button>
        <el-button type="primary">Import</el-button>
        <el-button type="primary">Export</el-button>
      </el-button-group>
    </header>
    <section>
      <div>
        <el-form :model="formModel" :rules="formRules">
          <nested-draggable :tasks="renderOptions"></nested-draggable>
        </el-form>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
export default {
  name: 'design-content',
};
</script>
<script setup lang="ts" name="form-content">
import { reactive, ref } from 'vue';
import { formModel, formRules } from '@/model/form';

const renderOptions = ref([
  {
    type: 'Button',
    id: 'sdsdfgsd',
    options: {
      name: '',
      type: 'default',
    },
  },
  {
    type: 'Input',
    id: 'fsdfsdfsd',
  },
  {
    type: 'Grid',
    id: 'dsfsdfsdfsd',
    tasks: [[], []],
  },
]);

const getData = () => {
  console.log(renderOptions);
};
</script>

<style lang="less">
.design-content {
  box-sizing: border-box;
  flex: 1;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-left: 2px dotted #ebeef5;
  border-right: 2px dotted #ebeef5;
  header {
    box-sizing: border-box;
    padding: 5px 10px;
    background: #fff;
    height: 42px;
    display: flex;
  }
  section {
    flex: 1;
    padding: 10px 10px 0 10px;
    background: #f1f2f3;
    > div {
      background: #fff;
      height: 100%;
    }
    .el-form {
      height: 100%;
      > .nested-content {
        height: 100%;
        border: 0;
      }
    }
  }
}
</style>
