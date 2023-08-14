<script setup lang="ts">
import Nav from "@/components/views/Nav.vue";
import SelfDesc from "@/components/views/SelfDesc.vue";
import ImpressumBox from "@/components/views/ImpressumBox.vue";
import Projects from "@/components/views/Projects.vue";
import TechStack from "@/components/views/TechStack.vue";
import Contact from "@/components/views/Contact.vue";
import { ref } from "vue";

const currSelectedNav = ref("projects");
</script>

<template>
  <div class="app max-w-screen-2xl m-auto font-code-latin text-sky-200 px-4 md:px-8 lg:px-12">
    <header class="flex justify-between pt-9 md:items-center">
      <Nav @nav-selected="(val) => (currSelectedNav = val)" />
      <SelfDesc />
    </header>

    <main>
      <Projects v-if="currSelectedNav === 'projects'" />
      <TechStack v-if="currSelectedNav === 'techstack'" />
      <Contact v-if="currSelectedNav === 'contact'" />
    </main>
    <footer class="mt-auto"><ImpressumBox /></footer>
  </div>
</template>

<style scoped></style>
