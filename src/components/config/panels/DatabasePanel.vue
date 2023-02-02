<template>
  <div class="text-h4 q-mb-md">Database</div>
  <p>設定您的資料庫</p>
  <div>
    <q-select
      v-model="formData.database.driver"
      :options="driverOptions"
      label="Driver *"
    />
    <q-input clearable label="Host *" v-model="formData.database.host" />
    <q-input
      clearable
      label="Port *"
      v-model="formData.database.port"
      :hint="`通常為 ${suggestedPort}`"
    />
    <q-input clearable label="User *" v-model="formData.database.user" />
    <q-input
      clearable
      label="Password *"
      v-model="formData.database.password"
    />
    <q-input
      clearable
      label="Database Name *"
      v-model="formData.database.name"
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
