<template>
  <div>
    <div class="text-secondary-300 m-4">Popular Car</div>
    <div class="flex gap-8 overflow-x-auto">
      <div v-for="car in data" class="">
        <CarCard :car="car" :static-width="true"></CarCard>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { data } = await useFetch("/api/cars/popular");
</script>
