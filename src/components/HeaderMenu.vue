<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md" style="max-width: 800px">
      <q-tabs v-model="tab" class="text-white" inline-label>
        <q-route-tab to="/config" name="config" icon="build" label="Config" />
      </q-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const tab = ref('config');
</script>
