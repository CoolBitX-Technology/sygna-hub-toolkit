<template>
  <q-tab-panels
    v-model="currTab"
    animated
    swipeable
    vertical
    transition-prev="jump-up"
    transition-next="jump-up"
  >
    <q-tab-panel name="registration">
      <registration-panel></registration-panel>
    </q-tab-panel>
    <q-tab-panel name="server"><server-panel></server-panel> </q-tab-panel>
    <q-tab-panel name="database">
      <database-panel></database-panel
    ></q-tab-panel>
    <q-tab-panel name="email"> <email-panel></email-panel></q-tab-panel>
    <q-tab-panel name="security">
      <security-panel></security-panel
    ></q-tab-panel>
    <q-tab-panel name="admin"><admin-panel></admin-panel> </q-tab-panel>
    <q-tab-panel name="advanced"
      ><advanced-panel></advanced-panel>
    </q-tab-panel>
  </q-tab-panels>
</template>

<script setup lang="ts">
import { useConfigPageStore } from 'src/stores/pages/config';
import AdminPanel from 'src/components/config/panels/AdminPanel.vue';
import AdvancedPanel from 'src/components/config/panels/AdvancedPanel.vue';
import DatabasePanel from 'src/components/config/panels/DatabasePanel.vue';
import EmailPanel from 'src/components/config/panels/EmailPanel.vue';
import RegistrationPanel from 'src/components/config/panels/RegistrationPanel.vue';
import SecurityPanel from 'src/components/config/panels/SecurityPanel.vue';
import ServerPanel from 'src/components/config/panels/ServerPanel.vue';
import { storeToRefs } from 'pinia';

const configStore = useConfigPageStore();
const { currTab } = storeToRefs(configStore);
</script>
