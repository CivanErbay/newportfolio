<script setup lang="ts">
import Nav from "@/components/views/Nav.vue";
import SelfDesc from "@/components/views/SelfDesc.vue";
</script>

<template>
  <div class="max-w-9xl font-code-latin  px-4 md:px-8 lg:px-12">
    <header class="flex justify-between pt-9 md:items-center">
      <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->
      <Nav />
      <SelfDesc />
    </header>

    <main></main>
  </div>
</template>

<style scoped></style>
