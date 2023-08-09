<script setup lang="ts">
import { ref } from "vue";
import NavElement from "@/components/reusable/NavElement.vue";

const currNav = ref("");
</script>

<template>
  <nav>
    <NavElement
      @click="
        () => {
          currNav = 'projects';
        }
      "
      :styles="'ml-2 '"
      :is-small="currNav != 'projects' && currNav.length"
      >PROJEKTE</NavElement
    >

    <NavElement
      @click="
        () => {
          currNav = 'techstack';
        }
      "
      :styles="'ml-[25%]'"
      :is-small="currNav != 'techstack' && currNav.length"
      >TECHSTACK</NavElement
    >

    <NavElement
      @click="
        () => {
          currNav = 'contact';
        }
      "
      :styles="'ml-[51%]'"
      :is-small="currNav != 'contact' && currNav.length"
      >KONTAKT</NavElement
    >
  </nav>
</template>

<style scoped></style>
