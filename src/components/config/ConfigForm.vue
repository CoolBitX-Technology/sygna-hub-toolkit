<template>
  <div>
    <q-splitter v-model="splitterModel" style="height: 100%">
      <template v-slot:before>
        <config-sidebar></config-sidebar>
      </template>
      <template v-slot:after>
        <div class="q-px-xl">
          <config-panels></config-panels>
        </div>
      </template>
    </q-splitter>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ConfigSidebar from 'src/components/config/ConfigSidebar.vue';
import ConfigPanels from 'src/components/config/ConfigPanels.vue';
import { useConfigPageStore } from 'src/stores/pages/config';
import { storeToRefs } from 'pinia';
import { useQuasar } from 'quasar';

const configStore = useConfigPageStore();
const { currTab } = storeToRefs(configStore);

const $q = useQuasar();
const onSubmit = () => {
  $q.notify({
    position: 'bottom-right',
    color: 'green-4',
    textColor: 'white',
    icon: 'cloud_done',
    message: 'Submitted'
  });
};

const onReset = () => {
  console.log('reset');
};

const splitterModel = ref(20);
</script>
