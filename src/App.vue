<script setup lang="ts">
import Nav from "@/components/views/Nav.vue";
import SelfDesc from "@/components/views/SelfDesc.vue";
import ImpressumBox from "@/components/views/ImpressumBox.vue";

import { ref } from "vue";
</script>

<template>
  <div
    class="app max-w-screen-2xl m-auto font-code-latin text-sky-200 px-4 md:px-8 lg:px-12"
  >
    <header class="flex justify-between pt-3 md:pt-9 md:items-center">
      <Nav />
      <!-- <SelfDesc /> -->
    </header>

    <main>
      <router-view></router-view>
    </main>
    <footer class="mt-auto"><ImpressumBox /></footer>
  </div>
</template>

<style scoped></style>
