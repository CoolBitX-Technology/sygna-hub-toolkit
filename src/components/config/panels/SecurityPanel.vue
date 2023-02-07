<template>
  <div class="title text-h4 q-mb-md">Security</div>
  <p>安全性相關設定</p>
  <div>
    <DataField
      clearable
      type="password"
      label="JWT Secret *"
      v-model="formData.security.jwtSecret"
      name="security.jwtSecret"
      hint="signing key for JWT token"
    />
    <DataField
      clearable
      label="Access Token Expire Time (in sec) *"
      v-model="formData.security.accessTokenExpireSec"
      type="number"
      name="security.accessTokenExpireSec"
      hint="JWT token will expire after {this value} seconds"
    />
    <DataField
      clearable
      label="Data Encryption Key *"
      type="password"
      v-model="formData.security.dataEncryptionKey"
      :maxlength="32"
      :rules="[
        (val) => val.length === 32 || 'Should be a 32 character long hex string'
      ]"
      name="security.dataEncryptionKey"
      hint="an encryption key used to encrypt service credential, should be a 32 character long hex string"
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
import DataField from 'src/components/common/form/DataField.vue';
const configpageStore = useConfigPageStore();
const { formData } = storeToRefs(configpageStore);
</script>
