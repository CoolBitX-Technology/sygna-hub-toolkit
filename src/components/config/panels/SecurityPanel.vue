<template>
  <div class="text-h4 q-mb-md">Security</div>
  <p>安全性相關設定</p>
  <div>
    <q-input
      clearable
      label="JWT Secret *"
      v-model="formData.security.jwtSecret"
    />
    <q-input
      clearable
      label="Access Token Expire Time (in sec) *"
      v-model="formData.security.accessTokenExpireSec"
    />
    <q-input
      clearable
      label="Data Encryption Key *"
      v-model="formData.security.dataEncryptionKey"
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
