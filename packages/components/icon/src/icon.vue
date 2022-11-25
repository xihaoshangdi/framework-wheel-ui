<template>
  <i :class="bem.b()" :style="style">
    <slot></slot>
  </i>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import {createNamespace} from '@frameworl-wheel-ui/utils/create'
const bem = createNamespace("icon");
const props = defineProps<{
  size: [Number, String]
  color: String
}>()

const style = computed(() => {
  if (!props.color && !props.size) {
    return {};
  }
  return {
    ...(props.size ? { "font-size": props.size + "px" } : {}),
    ...(props.color ? { color: props.color } : {}),
  };
});
</script>