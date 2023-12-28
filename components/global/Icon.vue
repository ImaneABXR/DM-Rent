<template>
  <span v-html="iconContent" class="inline-block"></span>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    iconContent() {
      // Load the SVG content from the file path
      return require(`~/assets/icons/${this.name}.svg`);
    },
  },
};
</script>

<style scoped>
/* Add any additional styling if needed */
.icon {
  display: inline-block;
}
</style>
