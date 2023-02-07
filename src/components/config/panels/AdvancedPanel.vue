<template>
  <div class="text-h4 q-mb-md">Advanced</div>
  <div>
    <q-input
      clearable
      label="Webhook URL"
      v-model="formData.advanced.webhookURL"
      name="advanced.webhookURL"
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
const configpageStore = useConfigPageStore();
const { formData } = storeToRefs(configpageStore);
</script>
