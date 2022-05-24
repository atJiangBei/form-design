import { defineComponent } from 'vue';

export default defineComponent({
  name: 'form-template',
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
