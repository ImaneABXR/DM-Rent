<template>
  <div
    class="sm:h-32 h-44 bg-white flex items-center justify-center border-b border-opacity-40 border-secondary-200"
  >
    <div class="flex w-5/6 gab-2 flex-wrap justify-between">
      <img src="/logo.svg" />
      <div
        class="sm:ml-16 ml-0 mt-3 sm:mt-0 grow min-w-96 rounded-full border border-secondary-200 p-3 flex text-secondary-500 gap-4 items-center order-3 sm:order-2"
      >
        <nuxt-icon name="search" :filled="true" />
        Search soemthing here
      </div>
      <div
        class="ml-6 rounded-full border border-secondary-200 px-3 py-3 flex text-secondary-500 order-2 sm:order-3 items-center"
      >
        <nuxt-icon name="heart" :filled="false" fill="#596780" />
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style>
.nuxt-icon svg {
  width: auto;
  height: auto;
}
</style>
