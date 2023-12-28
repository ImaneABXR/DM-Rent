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
// const runtimeConfig = useRuntimeConfig();
const data = [
  {
    name: "Honda Accord",
    type: "Sedan",
    gasolineLiter: 65,
    kindOfTransition: "Manual",
    people: 5,
    pricePerDay: 60,
    id: "honda-accord",
    img: "https://dm-assignment-commonshare.koyeb.app/img/1.png",
  },
  {
    name: "Mazda 3",
    type: "Hatchback",
    gasolineLiter: 55,
    kindOfTransition: "Automatic",
    people: 5,
    pricePerDay: 45,
    id: "mazda-3",
    img: "https://dm-assignment-commonshare.koyeb.app/img/2.png",
  },
  {
    name: "Volkswagen Golf",
    type: "Hatchback",
    gasolineLiter: 50,
    kindOfTransition: "Manual",
    people: 5,
    pricePerDay: 55,
    id: "volkswagen-golf",
    img: "https://dm-assignment-commonshare.koyeb.app/img/3.png",
  },
  {
    name: "Audi A4",
    type: "Sedan",
    gasolineLiter: 70,
    kindOfTransition: "Automatic",
    people: 5,
    pricePerDay: 75,
    id: "audi-a4",
    img: "https://dm-assignment-commonshare.koyeb.app/img/4.png",
  },
];
// const p = await useFetch(
//   "https://dm-assignment-commonshare.koyeb.app/api/cars"
// );

// console.log(p);
// console.log(data);
</script>
