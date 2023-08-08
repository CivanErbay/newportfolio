<script setup lang="ts">
import { ref } from "vue";
import NavElement from "@/components/reusable/NavElement.vue";

const currNav = ref("");
</script>

<template>
  <nav
    :class="{ relative: !currNav.length }"
    class="transition-all duration-500"
  >
    <NavElement
      @click="
        () => {
          currNav = 'projects';
        }
      "
      :class="{ absolute: currNav.length }"
      :styles="'ml-2'"
      :is-small="currNav != 'projects' && currNav.length"
      >PROJEKTE</NavElement
    >

    <NavElement
      @click="
        () => {
          currNav = 'techstack';
        }
      "
      :class="{ 'absolute top-0 left-[25%]': currNav.length }"
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
      :class="{ 'absolute top-0 left-[50%]': currNav.length }"
      :styles="'ml-[51%]'"
      :is-small="currNav != 'contact' && currNav.length"
      >KONTAKT</NavElement
    >
  </nav>
</template>

<style scoped></style>
