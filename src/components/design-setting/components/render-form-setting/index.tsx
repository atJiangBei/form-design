import { defineComponent } from 'vue';

export default defineComponent({
  name: 'render-form-setting',
  setup() {
    return () => {
      return <el-form label-width="90px">form-setting</el-form>;
    };
  },
});
