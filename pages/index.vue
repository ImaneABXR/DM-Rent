<template>
  <div class="bg-secondary-100 py-2 px-6 sm:py-4 sm:px-12">
    <CarPopular></CarPopular>
    <div class="text-secondary-300 m-4">Recomendation Car</div>
    <div
      class="grid grid-flow-row gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
    >
      <div v-for="car in cars" class="">
        <CarCard :car="car"></CarCard>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
// type Pagination = {
//   last_page?: number;
//   total?: number;
// };
// const currentPage = ref(1);
// const paginationData = ref<Pagination>({
//   last_page: 0,
//   total: 0,
// });
const { data: data } = await useFetch(
  "/api/cars"
  // , {querypage: currentPage.value }
);
let { data: cars, meta: meta } = data.value;
// paginationData.value = meta;
</script>
