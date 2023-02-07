<template>
  <q-input
    :clearable="props.clearable"
    :label="props.label"
    :model-value="props.modelValue"
    @update:model-value="props.modelValue"
    :rules="props.rules"
    :type="showSecret ? 'text' : 'password'"
    :name="props.name"
  >
    <template v-slot:append>
      <q-icon
        :name="showSecret ? 'visibility' : 'visibility_off'"
        class="cursor-pointer"
        @click="toggleShow"
      />
    </template>
  </q-input>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { QInputProps } from 'quasar';
interface Props extends QInputProps {
  canShow?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  canShow: true
});

const showSecret = ref(false);

function toggleShow() {
  if (props.canShow) {
    showSecret.value = !showSecret.value;
  } else {
    showSecret.value = false;
  }
}
</script>
