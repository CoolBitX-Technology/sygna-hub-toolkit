<template>
  <div>
    <q-splitter v-model="splitterModel" style="height: 100%">
      <template v-slot:before>
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
      <template v-slot:after>
        <div class="q-px-xl">
          <div v-show="currTab === 'registration'">
            <registration-panel></registration-panel>
          </div>
          <div v-show="currTab === 'server'"><server-panel></server-panel></div>
          <div v-show="currTab === 'database'">
            <database-panel></database-panel>
          </div>
          <div v-show="currTab === 'email'"><email-panel></email-panel></div>
          <div v-show="currTab === 'security'">
            <security-panel></security-panel>
          </div>
          <div v-show="currTab === 'admin'"><admin-panel></admin-panel></div>
          <div v-show="currTab === 'advanced'">
            <advanced-panel></advanced-panel>
          </div>
        </div>
      </template>
    </q-splitter>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ConfigSidebar from 'src/components/config/ConfigSidebar.vue';
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
const splitterModel = ref(20);
</script>
