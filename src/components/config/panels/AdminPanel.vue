<template>
  <div class="title text-h4 q-mb-md">Administrator</div>
  <p>This is setup for your initial account to the hub</p>
  <div>
    <q-input
      clearable
      label="Account *"
      v-model="formData.admin.account"
      name="admin.account"
      :rules="[validate.notEmpty]"
    />
    <DataField
      clearable
      type="password"
      label="Password *"
      v-model="formData.admin.password"
      name="admin.password"
      :rules="[validate.notEmpty, validate.isStrongPassword]"
      hint="Password should contain at least 6 letters, at least 1 number, at least 1 upper case and at least 1 special character"
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
import DataField from 'src/components/common/form/DataField.vue';
const configpageStore = useConfigPageStore();
const validate = useValidate();
const { formData } = storeToRefs(configpageStore);
</script>
