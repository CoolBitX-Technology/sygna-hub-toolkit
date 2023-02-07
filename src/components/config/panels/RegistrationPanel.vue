<template>
  <div class="title text-h4 q-mb-md">Registration Info</div>
  <p>
    Please refer to the information provided in the confirmation email of
    successful registration and fill in the following fields.
  </p>
  <DataField
    clearable
    label="VASP code *"
    :rules="[validate.notEmpty]"
    v-model="formData.registration.vaspCode"
    name="registration.vaspCode"
  />
  <DataField
    clearable
    type="password"
    label="API key (license key) *"
    :rules="[validate.notEmpty]"
    v-model="formData.registration.apiKey"
    :maxlength="32"
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
import DataField from 'src/components/common/form/DataField.vue';
const validate = useValidate();
const configpageStore = useConfigPageStore();
const { formData } = storeToRefs(configpageStore);
</script>
