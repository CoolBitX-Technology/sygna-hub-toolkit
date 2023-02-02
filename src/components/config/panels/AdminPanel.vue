<template>
  <div class="text-h4 q-mb-md">Administrator</div>
  <div>
    <q-input clearable label="Account *" v-model="formData.admin.account" />
    <q-input clearable label="Password *" v-model="formData.admin.password" />
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
</script>
