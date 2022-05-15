import { defineComponent, PropType } from 'vue';
import { formModel, selectedItem } from '@/model/form';

type ConfigType = {
  type: string;
  id: string;
  options: {
    type: string;
  };
  tasks: [][];
};
export default defineComponent({
  name: 'render-component',
  props: {
    config: {
      type: Object as PropType<ConfigType>,
      default: () => ({}),
    },
  },
  setup(props) {
    const onActived = () => {
      console.log('sssss', props.config);
      selectedItem.value = props.config;
    };
    const render = (config: ConfigType) => {
      const { type, options } = config;

      switch (type) {
        case 'Button':
          return (
            <el-button type={options.type} onClick={onActived}>
              按钮
            </el-button>
          );
        case 'Tag':
          return (
            <el-tag type="success" effect="dark">
              tag
            </el-tag>
          );
        case 'Input':
          return <el-input></el-input>;
        case 'Textarea':
          return <el-input type="textarea"></el-input>;
        case 'InputNumber':
          return <el-input-number></el-input-number>;
        case 'Radio':
          return (
            <el-radio-group>
              <el-radio label="3">Option A</el-radio>
              <el-radio label="6">Option B</el-radio>
              <el-radio label="9">Option C</el-radio>
            </el-radio-group>
          );
        case 'Checkbox':
          return (
            <el-checkbox-group>
              <el-checkbox label="Option A" />
              <el-checkbox label="Option B" />
              <el-checkbox label="Option C" />
            </el-checkbox-group>
          );
        case 'Select':
          const selectOptions = [
            {
              value: 'Option1',
              label: 'Option1',
            },
            {
              value: 'Option2',
              label: 'Option2',
              disabled: true,
            },
          ];
          return (
            <el-select placeholder="Select">
              {selectOptions.map((item) => {
                return (
                  <el-option
                    key={item.value}
                    label={item.label}
                    value={item.value}
                    disabled={item.disabled}
                  />
                );
              })}
            </el-select>
          );
        case 'Switch':
          return (
            <el-switch
              inline-prompt
              active-color="#13ce66"
              inactive-color="#ff4949"
              active-text="Y"
              inactive-text="N"
            />
          );
        case 'Slider':
          return <el-slider step={10} />;
        case 'DatePicker':
          return <el-date-picker type="date" placeholder="Pick a day" />;
        case 'TimePicker':
          return <el-time-picker arrow-control placeholder="Arbitrary time" />;
        case 'Image':
          const url =
            'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg';
          const srcList = [
            'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
            'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
            'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
            'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
            'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
            'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
            'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
          ];
          return (
            <el-image
              style="width: 100px; height: 100px"
              src={url}
              preview-src-list={srcList}
              initial-index={4}
              fit="cover"
            />
          );
        case 'Link':
          return (
            <el-link
              type="primary"
              href="https://element.eleme.io"
              target="_blank"
            >
              element
            </el-link>
          );
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
      return <div>{render(props.config)}</div>;
    };
  },
});