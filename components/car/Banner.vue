<template>
  <div class="bg-white rounded-xl p-5"></div>
</template>

<script setup>
const props = defineProps({
  car: {
    type: Object,
    required: true,
  },
});
const { car } = props;
</script>
