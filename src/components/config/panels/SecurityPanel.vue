<template>
  <div class="text-h4 q-mb-md">Security</div>
  <p>安全性相關設定</p>
  <div>
    <SecretField
      clearable
      label="JWT Secret *"
      v-model="formData.security.jwtSecret"
      name="security.jwtSecret"
    />
    <q-input
      clearable
      label="Access Token Expire Time (in sec) *"
      v-model="formData.security.accessTokenExpireSec"
      type="number"
      name="security.accessTokenExpireSec"
    />
    <SecretField
      clearable
      label="Data Encryption Key *"
      v-model="formData.security.dataEncryptionKey"
      :rules="[
        (val) => val.length === 32 || 'Should be a 32 character long hex string'
      ]"
      name="security.dataEncryptionKey"
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
import { ref } from 'vue';
import SecretField from 'src/components/common/form/SecretField.vue';
const configpageStore = useConfigPageStore();
const { formData } = storeToRefs(configpageStore);

const showJwtSecret = ref(false);
const showDataEncryptionKey = ref(false);
</script>
