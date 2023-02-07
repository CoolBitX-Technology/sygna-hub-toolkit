<template>
  <div class="text-h4 q-mb-md">Registration Info</div>
  <p>註冊成功後收到的信件內容 可以直接填這</p>
  <q-input
    clearable
    label="VASP code *"
    hint="Usually 8 characters"
    :rules="[validate.notEmpty]"
    v-model="formData.registration.vaspCode"
    name="registration.vaspCode"
  />
  <SecretField
    clearable
    label="API key (license key) *"
    :rules="[validate.notEmpty]"
    v-model="formData.registration.apiKey"
    name="registration.apiKey"
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
import SecretField from 'src/components/common/form/SecretField.vue';
const validate = useValidate();
const configpageStore = useConfigPageStore();
const { formData } = storeToRefs(configpageStore);
</script>
