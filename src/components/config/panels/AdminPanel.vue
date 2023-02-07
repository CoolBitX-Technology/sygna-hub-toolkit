<template>
  <div class="text-h4 q-mb-md">Administrator</div>
  <div>
    <q-input
      clearable
      label="Account *"
      v-model="formData.admin.account"
      name="admin.account"
      :rules="[validate.notEmpty]"
    />
    <SecretField
      clearable
      label="Password *"
      v-model="formData.admin.password"
      name="admin.password"
      :rules="[validate.notEmpty]"
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
