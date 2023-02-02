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
      <q-btn
        color="secondary"
        label="Copy To Clipboard"
        @click="handleExport"
      />
      <q-btn color="primary" label="Save" @click="handleSave" />
      <q-btn
        color="grey-6"
        label="Setting"
        @click="isSettingDialogOpen = true"
      />
    </div>
  </div>
  <q-separator color="primary" inset />
  <div class="q-pa-md">
    <config-form></config-form>
  </div>
  <setting-dialog></setting-dialog>
</template>

<script setup lang="ts">
import { useNotify } from 'src/composables/Notify';
import ConfigForm from 'src/components/config/ConfigForm.vue';
import SettingDialog from 'src/components/config/SettingDialog.vue';
import { ConfigFile } from 'src/models';
import { ref } from 'vue';
import { copyToClipboard } from 'quasar';
import { storeToRefs } from 'pinia';
import { useConfigPageStore } from 'src/stores/pages/config';

const notify = useNotify();

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

const target = ref(ConfigFile.BundleProduct);
const configPageStore = useConfigPageStore();
const { bundleProductConfigContent, dockerConfigContent } = configPageStore;
const { isSettingDialogOpen } = storeToRefs(configPageStore);

function handleSave() {
  notify.success('saved');
}

function handleExport() {
  let content = '';
  if (target.value === ConfigFile.BundleProduct) {
    content = bundleProductConfigContent;
  } else if (target.value === ConfigFile.DockerCompose) {
    content = dockerConfigContent;
  }
  copyToClipboard(content)
    .then(() => notify.success('Copy to clipboard'))
    .catch((err) => notify.error(err));
}
</script>
