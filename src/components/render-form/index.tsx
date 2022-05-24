import { defineComponent } from 'vue';

export default defineComponent({
  name: 'render-form',
  props: {
    renderOptions: {
      type: Object,
    },
    formModel: {
      type: Object,
    },
  },
  setup(props) {
    return () => {
      return <div>form-template</div>;
    };
  },
});
