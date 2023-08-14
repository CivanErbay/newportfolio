<script setup lang="ts">
import { ref } from "vue";
import NavElement from "@/components/reusable/NavElement.vue";

const emits = defineEmits(["nav-selected"]);

const currNav = ref("projects");
</script>

<template>
  <nav>
    <NavElement
      @click="
        () => {
          currNav = 'projects';
          emits('nav-selected', currNav);
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
          emits('nav-selected', currNav);
        }
      "
      :styles="'ml-[23%]'"
      :is-small="currNav != 'techstack' && currNav.length"
      >TECHSTACK</NavElement
    >

    <NavElement
      @click="
        () => {
          currNav = 'contact';
          emits('nav-selected', currNav);
        }
      "
      :styles="'ml-[51%]'"
      :is-small="currNav != 'contact' && currNav.length"
      >KONTAKT</NavElement
    >
  </nav>
</template>

<style scoped></style>
