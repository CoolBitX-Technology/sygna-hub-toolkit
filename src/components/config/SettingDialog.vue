<template>
  <q-dialog v-model="isSettingDialogOpen">
    <q-card>
      <q-card-section>
        <div class="text-h6">Setting</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-select
          outlined
          v-model="setting.targetEnv"
          :options="imagesEnvOptions"
          label="Choose Images Enviroment"
          emit-value
          map-options
        />
        <q-toggle
          v-model="setting.enableWebConsole"
          label="Enable Web Console"
        />
        <q-toggle v-model="setting.enableTRISA" label="Enable TRISA" disable />
        <q-toggle
          v-model="setting.enableShyft"
          label="Enable Veriscope on Shyft"
          disable
        />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="Cancel" v-close-popup @click="onCancel" />
        <q-btn label="Save" color="primary" @click="onSave" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useConfigPageStore } from 'src/stores/pages/config';
import _ from 'lodash';
import { reactive } from 'vue';
import { useNotify } from 'src/composables/Notify';

const notify = useNotify();
const configStore = useConfigPageStore();
const { isSettingDialogOpen } = storeToRefs(configStore);
const setting = reactive({ ...configStore.setting });
const imagesEnvOptions = ['prod', 'test'];
function onSave() {
  configStore.$patch({
    setting: { ...setting }
  });
  isSettingDialogOpen.value = false;
}
function onCancel() {
  Object.assign(setting, { ...configStore.setting });
}
</script>
