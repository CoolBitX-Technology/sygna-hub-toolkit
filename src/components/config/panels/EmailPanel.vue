<template>
  <div class="text-h4 q-mb-md">Email</div>
  <p>設定您的發信伺服器</p>
  <div>
    <q-input clearable label="Host *" v-model="formData.email.host" />
    <q-input clearable label="Port *" v-model="formData.email.port" />
    <q-input clearable label="Account *" v-model="formData.email.account" />
    <q-input clearable label="Password *" v-model="formData.email.password" />
    <q-input
      clearable
      label="Display Name *"
      v-model="formData.email.displayName"
    />
    <q-input
      clearable
      label="Subject Prefix"
      v-model="formData.email.subjectPrefix"
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
