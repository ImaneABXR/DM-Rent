<template>
  <button
    class="text-white rounded px-4 py-2 bg-primary-500"
    @click="$emit('onClick')"
  >
    <!-- <span v-if="loading" class="w-5 h-5 animate-spin"></span> -->
    <slot />
  </button>
</template>
<script setup>
defineProps({
  loading: Boolean,
});
defineEmits(["onClick"]);
</script>
