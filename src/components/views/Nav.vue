<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

import NavElement from "@/components/reusable/NavElement.vue";

const currNav = ref("projects");
</script>

<template>
  <nav>
    <NavElement
      @click="
        () => {
          currNav = 'whoami';
          router.push('/whoami');
        }
      "
      :styles="'md:ml-2'"
      :is-small="currNav != 'whoami' && currNav.length"
      >whoami</NavElement
    >
    <NavElement
      @click="
        () => {
          currNav = 'projects';
          router.push('/projects');
        }
      "
      :styles="'md:ml-2'"
      :is-small="currNav != 'projects' && currNav.length"
      >projekte</NavElement
    >

    <NavElement
      @click="
        () => {
          currNav = 'techstack';
          router.push('/techstack');
        }
      "
      :styles="'ml-[23%]'"
      :is-small="currNav != 'techstack' && currNav.length"
      >techstack</NavElement
    >

    <NavElement
      @click="
        () => {
          currNav = 'contact';
          router.push('/contact');
        }
      "
      :styles="'ml-[51%]'"
      :is-small="currNav != 'contact' && currNav.length"
      >kontakt</NavElement
    >
  </nav>
</template>

<style scoped></style>
