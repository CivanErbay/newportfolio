<script setup lang="ts">
import LandingElement from "@/components/reusable/LandingElement.vue";
/* defineProps<{
  msg: string;
}>(); */
</script>

<template>
  <div>
    <LandingElement :margin-left="'ml-2'">PROJECTS</LandingElement>

    <LandingElement :margin-left="'ml-8'">ABOUT</LandingElement>

    <LandingElement :margin-left="'ml-14'">CONTACT</LandingElement>
  </div>
</template>

<style scoped></style>
