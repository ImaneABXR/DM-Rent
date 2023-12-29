<template>
  <div>
    <div class="text-secondary-300 m-4">Recomendation Car</div>
    <div
      class="grid grid-flow-row gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
    >
      <div v-for="car in cars" class="">
        <CarCard :car="car"></CarCard>
      </div>
    </div>
    <div class="flex w-full p-4 items-center justify-center">
      <Button
        v-if="data?.meta?.last_page > page"
        @onClick="refetch"
        :loading="pending"
        >Show more cars</Button
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import Button from "../global/Button.vue";

const page = ref(1);
const cars = ref([]);
const pending = ref(false);
// type CarsData = {
//     meta?: {
//         last_page?: Number,
//         totla?: Number
//     },
//     data: Array<Object>
// }
const { data } = await useFetch(`/api/cars?page=${page.value}`);

pushToCars(data.value.data);
async function refetch() {
  page.value++;
  pending.value = true;
  const { data } = await useFetch(`/api/cars?page=${page.value}`);
  pending.value = false;
  pushToCars(data.value.data);
}
function pushToCars(val) {
  cars.value.push(...val);
}
</script>
