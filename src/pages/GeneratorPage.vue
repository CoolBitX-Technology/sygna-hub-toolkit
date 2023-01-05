<template>
  <div class="q-pa-md">
    <div class="row justify-center items-center q-gutter-sm">
      <q-select
        outlined
        v-model="target"
        :options="targetOptions"
        label="Choose Target File"
        emit-value
        map-options
      />
      <div class="">
        <q-btn color="secondary" label="Export" />
      </div>
    </div>
  </div>
  <q-separator color="primary" inset />
  <div class="q-pa-md" v-if="target === ConfigFile.BundleProduct">
    <bundle-product-form></bundle-product-form>
  </div>
</template>

<script lang="ts">
// import { ref } from 'vue';
import { useGeneratorStore } from 'src/stores/generator';
import { storeToRefs } from 'pinia';
import BundleProductForm from 'src/components/generator/BundleProductForm.vue';
import { ConfigFile } from 'src/types';

const targetOptions = [
  {
    label: `Bundle Product Config (${ConfigFile.BundleProduct})`,
    value: ConfigFile.BundleProduct
  },
  {
    label: `Docker Compose (${ConfigFile.DockerCompose})`,
    value: ConfigFile.DockerCompose
  }
];

export default {
  components: { BundleProductForm },

  setup() {
    // const generator = useGeneratorStore();
    const { target } = storeToRefs(useGeneratorStore());

    return {
      ConfigFile,
      targetOptions,
      target
    };
  }
};
</script>
