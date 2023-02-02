<template>
  <div class="text-h4 q-mb-md">Registration Info</div>
  <p>註冊成功後收到的信件內容 可以直接填這</p>
  <q-input
    clearable
    label="VASP code *"
    hint="通常是8個字元"
    :rules="[validate.notEmpty]"
    label-color="black"
    v-model="formData.registration.vaspCode"
  />
  <q-input
    clearable
    label="API key (license key) *"
    label-color="black"
    :rules="[validate.notEmpty]"
    v-model="formData.registration.apiKey"
  />
</template>
<style scoped>
.q-field {
  width: 30%;
  min-width: 400px;
}
</style>
<script setup lang="ts">
import { useConfigPageStore } from 'src/stores/pages/config';
import { storeToRefs } from 'pinia';
import { useValidate } from 'src/composables/Validate';
const validate = useValidate();
const configpageStore = useConfigPageStore();
const { formData } = storeToRefs(configpageStore);
</script>
