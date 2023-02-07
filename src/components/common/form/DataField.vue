<template>
  <q-input
    :clearable="props.clearable"
    :label="props.label"
    v-model="localModelValue"
    :rules="props.rules"
    :type="type"
    :name="props.name"
    :maxlength="props.maxlength"
    :placeholder="props.placeholder"
  >
    <template v-slot:append>
      <q-icon
        v-if="props.type === 'password'"
        :name="showSecret ? 'visibility' : 'visibility_off'"
        class="cursor-pointer"
        @click="toggleShow"
      />
      <q-icon v-if="hint" name="o_help_outline" size="sm" class="text-warning">
        <q-tooltip anchor="center right" self="center left" :offset="[10, 10]">
          {{ props.hint }}
        </q-tooltip>
      </q-icon>
    </template>
  </q-input>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { ValidationRule } from 'quasar';
type ModelValue = string | number | null | undefined;
interface Props {
  name?: string | undefined;
  modelValue: ModelValue;
  error?: boolean | undefined;
  errorMessage?: string | undefined;
  rules?: ValidationRule[] | undefined;
  label?: string | undefined;
  hint?: string | undefined;
  clearable?: boolean | undefined;
  placeholder?: string | undefined;
  type?:
    | 'text'
    | 'password'
    | 'textarea'
    | 'email'
    | 'search'
    | 'tel'
    | 'file'
    | 'number'
    | 'url'
    | 'time'
    | 'date'
    | undefined;
  maxlength?: string | number | undefined;
  autogrow?: boolean | undefined;
  canShow?: boolean | undefined;
}
const props = withDefaults(defineProps<Props>(), {
  canShow: true
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: ModelValue): void;
}>();

const showSecret = ref(false);

const localModelValue = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit('update:modelValue', val);
  }
});

const type = computed(() => {
  if (props.type === 'password') {
    return showSecret.value ? 'text' : 'password';
  }

  return props.type;
});

function toggleShow() {
  if (props.canShow) {
    showSecret.value = !showSecret.value;
  } else {
    showSecret.value = false;
  }
}
</script>
