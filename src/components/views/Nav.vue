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
          currNav = 'projects';
          router.push('/projects');
        }
      "
      :styles="'md:ml-2'"
      :is-small="currNav != 'projects' && currNav.length"
      >PROJEKTE</NavElement
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
      >STACK</NavElement
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
      >KONTAKT</NavElement
    >
  </nav>
</template>

<style scoped></style>
