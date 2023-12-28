<template>
  <div class="mt-4 px-6 pt-12 pb-4">
    <div class="grid grid-cols-2 sm:grid-cols-6 gap-2 py-4">
      <div class="col-span-2 sm:col-span-3">
        <img src="/logo.svg" />
        <p class="text-secondary-400 w-1/2 py-4 opacity-60">
          Our vision is to provide convenience and help increase your sales
          business.
        </p>
      </div>

      <div v-for="section in sections">
        <h4 class="font-medium text-secondary-400 text-xl mb-6">
          {{ section.title }}
        </h4>
        <ul class="list-none text-secondary-400 opacity-60 flex flex-col gap-4">
          <li v-for="item in section.items">{{ item }}</li>
        </ul>
      </div>
    </div>
    <hr />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const sections = ref([
  {
    title: "About",
    items: ["How it works", "Featured", "Partnership", "Bussiness Relation"],
  },
  {
    title: "Community",
    items: ["Events", "Blog", "Podcast", "Invite a friend"],
  },
  {
    title: "Socials",
    items: ["Discord", "Instagram", "Twitter", "Facebook"],
  },
]);
</script>
