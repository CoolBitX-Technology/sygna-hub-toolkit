import { defineStore } from 'pinia';
import { ConfigFile } from 'src/types';

interface State {
  target: ConfigFile;
  formData: Record<string, any>;
}

export const useGeneratorStore = defineStore('generator', {
  state: (): State => ({
    target: ConfigFile.BundleProduct,
    formData: {

    }
  }),
  getters: {},
  actions: {
  },
});
