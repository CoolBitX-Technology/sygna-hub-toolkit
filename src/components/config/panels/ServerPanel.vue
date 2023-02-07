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
          name="server.frontend.scheme"
          :rules="[validate.notEmpty]"
        />
      </div>
      <div class="col-12 col-md-4 q-px-sm">
        <q-input
          clearable
          label="Domain Name *"
          v-model="formData.server.frontend.domainName"
          name="server.frontend.domainName"
          :rules="[validate.notEmpty]"
        />
      </div>
      <div class="col-12 col-md-2 q-px-sm">
        <q-input
          clearable
          label="Port *"
          v-model="formData.server.frontend.port"
          type="number"
          name="server.frontend.port"
          :rules="[validate.notEmpty]"
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
          name="server.backend.scheme"
          :rules="[validate.notEmpty]"
        />
      </div>
      <div class="col-12 col-md-4 q-px-sm">
        <q-input
          clearable
          label="Domain Name *"
          v-model="formData.server.backend.domainName"
          name="server.backend.scheme"
          :rules="[validate.notEmpty]"
        />
      </div>
      <div class="col-12 col-md-2 q-px-sm">
        <q-input
          clearable
          label="Port *"
          v-model="formData.server.backend.port"
          name="server.backend.scheme"
          :rules="[validate.notEmpty]"
          type="number"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useConfigPageStore } from 'src/stores/pages/config';
import { storeToRefs } from 'pinia';
import { useValidate } from 'src/composables/Validate';
const validate = useValidate();
const configpageStore = useConfigPageStore();
const { setting } = configpageStore;
const { formData } = storeToRefs(configpageStore);
const schemeOptions = ['https', 'http'];
</script>
