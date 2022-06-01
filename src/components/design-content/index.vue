<template>
  <div class="design-content">
    <header>
      <div style="margin-right: 10px">
        <el-button type="primary">Basic</el-button>
        <el-button type="success">Query</el-button>
        <el-button type="warning" @click="onReset">Reset</el-button>
      </div>
      <el-button-group class="ml-4">
        <el-button type="primary" @click="emptyAll">清空所有</el-button>
        <el-button type="primary" @click="onPreview">预览</el-button>
        <el-button type="primary" @click="getData">获取表单数据</el-button>
        <el-button type="primary" @click="getTemplateData">
          获取模板数据
        </el-button>
        <el-button type="primary">导出</el-button>
      </el-button-group>
    </header>
    <section>
      <div>
        <el-form
          :model="formModel"
          :rules="formRules"
          v-bind="formConfig"
          ref="formRef"
        >
          <div>{{ JSON.stringify(formModel) }}</div>
          {{ JSON.stringify(formRules) }}
          <nested-draggable :tasks="renderComponentConfig"></nested-draggable>
        </el-form>
      </div>
    </section>
    <el-dialog v-model="dataDisplayVisible" title="Data">
      <template v-if="dataDisplayVisible">
        <code-editor
          :mode="'json'"
          :readonly="false"
          v-model="blockData"
        ></code-editor>
      </template>
      <!-- <template #footer>
      <div class="dialog-footer">
        
      </div>
    </template> -->
    </el-dialog>
    <el-dialog v-model="previewDialogVisible" title="Preview" width="800px">
      <div
        style="
          height: 500px;
          overflow-y: auto;
          padding: 10px 5px;
          border: 2px dashed #e2e2e2;
          border-radius: 3px;
        "
        v-if="previewDialogVisible"
      >
        <render-form
          :usedRenderData="renderComponentConfig"
          :formRules="formRules"
          :formModel="formModel"
          :formConfig="formConfig"
        ></render-form>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
export default {
  name: 'design-content',
};
</script>
<script setup lang="ts" name="form-content">
import { onMounted, reactive, ref, unref, isRef } from 'vue';
import {
  templateFormRef,
  renderComponentConfig,
  formModel,
  formRules,
  emptyAll,
  formConfig,
} from '@/model/form';

const formRef = ref();
onMounted(() => {
  templateFormRef.value = formRef.value;
});

const dataDisplayVisible = ref(false);

const blockData = ref(JSON.stringify({}));
const getData = () => {
  dataDisplayVisible.value = true;
  blockData.value = JSON.stringify(formModel, null, '  ');
};
const getTemplateData = () => {
  dataDisplayVisible.value = true;
  blockData.value = JSON.stringify(unref(renderComponentConfig), null, '  ');
};

const onReset = () => {
  formRef.value.resetFields();
};
const previewDialogVisible = ref(false);
const onPreview = () => {
  previewDialogVisible.value = true;
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
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #999b9c;
      border-radius: 5px;
    }
    > div {
      background: #fff;
      height: 100%;
      overflow-y: auto;
      &::-webkit-scrollbar {
        width: 5px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #999b9c;
        border-radius: 5px;
      }
    }

    .el-form {
      height: 100%;
      > .draggable-nested-list {
        height: 100%;
        border: 0;
      }
    }
  }
}
</style>
