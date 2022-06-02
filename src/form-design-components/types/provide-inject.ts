import { InjectionKey } from 'vue';

export type FormCurrentProvideType = {
  formModel: any;
  formConfig: any;
};

export const formCurrentProvideKey: InjectionKey<FormCurrentProvideType> =
  Symbol();
