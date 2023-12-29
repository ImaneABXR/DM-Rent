<template>
  <div class="bg-white rounded-xl p-5 h-full min-w-96">
    <div class="flex justify-between">
      <div>
        <div class="font-bold text-lg">
          {{ car.name }}
        </div>
        <div class="text-sm text-secondary-300">{{ car.type }}</div>
      </div>
      <div class="mr-6 cursor-pointer">
        <nuxt-icon
          name="heart"
          class="text-red-500"
          :filled="!favoritesList[car.id]"
          @click="addCarToFavoritesList(car.id, car)"
        />
      </div>
    </div>
    <div class="flex items-center justify-center w-full">
      <img :src="car.img" class="h-24 my-12" />
    </div>

    <div class="flex justify-between text-secondary-300 my-4">
      <div class="flex gap-1 items-center">
        <nuxt-icon name="station" /><span class="text-sm"
          >{{ car.gasolineLiter }}L</span
        >
      </div>
      <div class="flex gap-1 items-center">
        <nuxt-icon name="manual" /><span class="text-sm"
          >{{ car.gasolineLiter }}L</span
        >
      </div>
      <div class="flex gap-1 items-center">
        <nuxt-icon name="people" /><span class="text-sm"
          >{{ car.people }}People</span
        >
      </div>
    </div>
    <div class="flex justify-between items-center">
      <div>
        <span class="font-bold text-lg">{{ car.pricePerDay }}/ </span>
        <span class="text-sm text-secondary-300">day</span>
      </div>

      <ButtonVue>Rent Now</ButtonVue>
    </div>
  </div>
</template>

<script setup>
import ButtonVue from "../global/Button.vue";
import { useFavoriteStore } from "~/store/favorite";
import { storeToRefs } from "pinia";

const favoriteStore = useFavoriteStore();
const { addCarToFavoritesList } = favoriteStore;
const { favoritesList } = storeToRefs(favoriteStore);

const props = defineProps({
  car: {
    type: Object,
    required: true,
  },
});

const { car } = props;
</script>
