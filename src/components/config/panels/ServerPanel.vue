<template>
  <div class="text-h4 q-mb-md">Server Info</div>
  <div v-if="setting.enableWebConsole">
    <div class="text-h5 q-mb-md">Frontend</div>
    <div class="row justify-start">
      <div class="col-12 col-md-2 q-px-sm">
        <q-select
          v-model="formData.server.frontend.scheme"
          :options="schemeOptions"
          label="Scheme *"
        />
      </div>
      <div class="col-12 col-md-4 q-px-sm">
        <q-input
          clearable
          label="Domain Name *"
          hint="只要網址不用port號"
          v-model="formData.server.frontend.domainName"
        />
      </div>
      <div class="col-12 col-md-2 q-px-sm">
        <q-input
          clearable
          label="Port *"
          v-model="formData.server.frontend.port"
        />
      </div>
    </div>
  </div>
  <div>
    <div class="text-h5 q-mb-md">Backend</div>
    <div class="row justify-start">
      <div class="col-12 col-md-2 q-px-sm">
        <q-select
          label="Scheme *"
          v-model="formData.server.backend.scheme"
          :options="schemeOptions"
        />
      </div>
      <div class="col-12 col-md-4 q-px-sm">
        <q-input
          clearable
          label="Domain Name *"
          hint="只要網址不用port號"
          v-model="formData.server.backend.domainName"
        />
      </div>
      <div class="col-12 col-md-2 q-px-sm">
        <q-input
          clearable
          label="Port *"
          v-model="formData.server.backend.port"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useConfigPageStore } from 'src/stores/pages/config';
import { storeToRefs } from 'pinia';
const configpageStore = useConfigPageStore();
const { setting } = configpageStore;
const { formData } = storeToRefs(configpageStore);
const schemeOptions = ['https', 'http'];
</script>
