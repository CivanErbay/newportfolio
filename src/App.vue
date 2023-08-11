<script setup lang="ts">
import Nav from "@/components/views/Nav.vue";
import SelfDesc from "@/components/views/SelfDesc.vue";
import ImpressumBox from "@/components/views/ImpressumBox.vue";
import Projects from "@/components/views/Projects.vue";
import { ref } from "vue";

const currSelectedNav = ref("projects");
</script>

<template>
  <div class="app max-w-9xl font-code-latin text-sky-200 px-4 md:px-8 lg:px-12">
    <header class="flex justify-between pt-9 md:items-center">
      <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->
      <Nav @nav-selected="(val) => (currSelectedNav = val)" />
      <SelfDesc />
    </header>

    <main><Projects v-if="currSelectedNav === 'projects'" /></main>
    <footer class="mt-auto"><ImpressumBox /></footer>
  </div>
</template>

<style scoped></style>
