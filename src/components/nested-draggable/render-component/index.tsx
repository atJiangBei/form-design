import { defineComponent } from 'vue';
export default defineComponent({
  name: 'render-component',
  props: {
    config: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const render = (type: string) => {
      switch (type) {
        case 'Button':
          return <el-button>按钮</el-button>;
        case 'Input':
          return <el-input></el-input>;
        case 'Textarea':
          return <el-input type="textarea"></el-input>;
        case 'Grid':
          return (
            <>
              <el-row>
                {props.config.tasks.map((list: any) => {
                  return (
                    <el-col span={12}>
                      <nested-draggable tasks={list} />
                    </el-col>
                  );
                })}
              </el-row>
            </>
          );
        default:
          break;
      }
    };
    return () => {
      return <div>{render(props.config.type)}</div>;
    };
  },
});
