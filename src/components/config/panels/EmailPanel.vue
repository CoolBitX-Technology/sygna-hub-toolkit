<template>
  <div class="text-h4 q-mb-md">Email</div>
  <p>設定您的發信伺服器</p>
  <div>
    <q-input
      clearable
      label="Host *"
      v-model="formData.email.host"
      name="email.host"
      :rules="[validate.notEmpty]"
    />
    <q-input
      clearable
      label="Port *"
      v-model.number="formData.email.port"
      name="email.port"
      type="number"
      :rules="[validate.notEmpty]"
    />
    <q-input
      clearable
      label="Account *"
      v-model="formData.email.account"
      name="email.account"
      :rules="[validate.notEmpty]"
    />
    <SecretField
      clearable
      label="Password *"
      v-model="formData.email.password"
      name="email.password"
      :rules="[validate.notEmpty]"
    />
    <q-input
      clearable
      label="Display Name"
      v-model="formData.email.displayName"
      name="email.displayName"
    />
    <q-input
      clearable
      label="Subject Prefix"
      v-model="formData.email.subjectPrefix"
      name="email.subjectPrefix"
    />
  </div>
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
const configpageStore = useConfigPageStore();
const validate = useValidate();
const { formData } = storeToRefs(configpageStore);
</script>
