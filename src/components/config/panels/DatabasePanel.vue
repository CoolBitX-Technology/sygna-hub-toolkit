<template>
  <div class="text-h4 q-mb-md">Database</div>
  <p>設定您的資料庫</p>
  <div>
    <q-select
      :options="driverOptions"
      label="Driver *"
      v-model="formData.database.driver"
      name="database.driver"
      :rules="[validate.notEmpty]"
    />
    <q-input
      clearable
      label="Host *"
      v-model="formData.database.host"
      name="database.host"
      :rules="[validate.notEmpty]"
    />
    <q-input
      clearable
      label="Port *"
      v-model.number="formData.database.port"
      name="database.port"
      type="number"
      :rules="[validate.notEmpty]"
      :hint="`Usually ${suggestedPort}`"
    />
    <q-input
      clearable
      label="User *"
      v-model="formData.database.user"
      name="database.user"
      :rules="[validate.notEmpty]"
    />
    <SecretField
      clearable
      label="Password *"
      v-model="formData.database.password"
      name="database.password"
      :rules="[validate.notEmpty]"
    />
    <q-input
      clearable
      label="Database Name *"
      v-model="formData.database.name"
      name="database.name"
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
import { computed } from 'vue';
import { useValidate } from 'src/composables/Validate';
import SecretField from 'src/components/common/form/SecretField.vue';
const validate = useValidate();
const configpageStore = useConfigPageStore();
const { formData } = storeToRefs(configpageStore);

const driverOptions = ['postgres', 'mysql'];

const suggestedPort = computed(() => {
  switch (formData.value.database.driver) {
    case 'postgres':
      return 5432;
    case 'mysql':
      return 3306;
    default:
      return null;
  }
});
</script>
