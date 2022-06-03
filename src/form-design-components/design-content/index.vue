<template>
  <div class="design-content">
    <header>
      <el-button-group class="ml-4">
        <el-button type="primary" @click="emptyAll">清空</el-button>
        <el-button type="primary" @click="onPreview">预览</el-button>
        <el-button type="primary" @click="getData">表单数据</el-button>
        <el-button type="primary" @click="getTemplateData">
          模板配置数据
        </el-button>
        <el-button type="primary" @click="getOtherData">
          其它测试数据
        </el-button>
      </el-button-group>
      <!-- <div>{{ JSON.stringify(formModel) }}</div> -->
    </header>
    <section>
      <div class="design-content-body">
        <div class="no-data-tip" v-if="!usedRenderData.length">
          请从左侧列表中选择一个组件 然后用鼠标拖动组件放置于此处
        </div>
        <form-current
          :model="formModel"
          :rules="formRules"
          :formConfig="formConfig"
          :usedRenderData="usedRenderData"
          @actived="onActived"
          @copy="onCopy"
          @delete="onDelete"
        ></form-current>
        <!-- <el-form
          :model="formModel"
          :rules="formRules"
          v-bind="formConfig"
          ref="templateFormRef"
        >
          <nested-draggable
            :tasks="usedRenderData"
            @actived="onActived"
          ></nested-draggable>
        </el-form> -->
      </div>
    </section>
    <el-dialog v-model="dataDisplayVisible" title="数据展示">
      <template v-if="dataDisplayVisible">
        <code-editor
          :mode="'json'"
          :readonly="false"
          v-model="blockData"
        ></code-editor>
      </template>
    </el-dialog>
    <el-dialog v-model="previewDialogVisible" title="Preview" width="1000px">
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
          :usedRenderData="usedRenderData"
          :formRules="formRules"
          :formModel="formModel"
          :formConfig="formConfig"
        ></render-form>
      </div>
    </el-dialog>
    <el-dialog v-model="otherDataVisible" title="开发调试数据" width="800px">
      <div>
        <div>{{ JSON.stringify(formModel) }}</div>
        <div>{{ JSON.stringify(formRules) }}</div>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';

import { selectedItem } from './../store/globalData';
import { formRules } from './../store/globalData';
import { deleteComponent, copyComponent, emptyObj } from './../utils/crud';
export default defineComponent({
  name: 'design-content',
  props: {
    formModel: {
      type: Object,
      default: () => ({}),
    },
    formConfig: {
      type: Object,
      default: () => ({}),
    },
    usedRenderData: {
      type: Array,
      default: () => ref([]).value,
    },
  },
  setup(props) {
    const dataDisplayVisible = ref(false);
    const blockData = ref(JSON.stringify({}));
    const emptyAll = () => {
      props.usedRenderData.length = 0;
      selectedItem.value = {};
      emptyObj(props.formModel);
      emptyObj(formRules);
    };
    const getData = () => {
      dataDisplayVisible.value = true;
      blockData.value = JSON.stringify(props.formModel, null, '  ');
    };
    const getTemplateData = () => {
      dataDisplayVisible.value = true;
      blockData.value = JSON.stringify(props.usedRenderData, null, '  ');
    };

    const previewDialogVisible = ref(false);
    const onPreview = () => {
      previewDialogVisible.value = true;
    };
    const otherDataVisible = ref(false);
    const getOtherData = () => {
      otherDataVisible.value = true;
    };
    const onActived = (config: any) => {
      console.log('actived', config);
      selectedItem.value = config;
    };
    const onCopy = (id: string) => {
      console.log('copy', id);
      copyComponent(id, props.usedRenderData);
    };
    const onDelete = (id: string) => {
      console.log('delete', id);
      deleteComponent(id, props.usedRenderData, props.formModel);
    };
    return {
      onCopy,
      onDelete,
      onActived,
      emptyAll,
      //
      formRules,
      dataDisplayVisible,
      blockData,
      getData,
      getTemplateData,
      previewDialogVisible,
      onPreview,
      otherDataVisible,
      getOtherData,
    };
  },
});
</script>

<style lang="less">
.design-content {
  box-sizing: border-box;
  flex: 1;
  height: 100vh;
  min-width: 700px;
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
    padding: 8px;
    background: #f1f2f3;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #999b9c;
      border-radius: 5px;
    }
    .design-content-body {
      background: #fff;
      min-height: 100%;
      position: relative;
    }
    .no-data-tip {
      z-index: 0;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      color: #999;
    }
    .el-form {
      min-height: calc(100vh - 100px);
      position: relative;
      z-index: 1;
      > .draggable-nested-list {
        min-height: calc(100vh - 100px);
        border: 0;
      }
    }
  }
}
</style>
