<template>
  <q-tabs v-model="currTab" vertical class="text-primary">
    <q-tab name="registration" label="Registration Info" />
    <q-tab name="server" label="Server Info" />
    <q-tab name="database" label="Database" />
    <q-tab name="email" label="Email" />
    <q-tab name="security" label="Security" />
    <q-tab name="admin" label="Administrator" />
    <q-tab name="advanced" label="Advanced" />
  </q-tabs>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useConfigPageStore } from 'src/stores/pages/config';

const configStore = useConfigPageStore();
const { currTab } = storeToRefs(configStore);
</script>
