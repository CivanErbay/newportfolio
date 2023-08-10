<template>
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap -mx-4">
      <div class="w-full md:w-1/2 px-4">
        <div class="p-4">
          <div class="bg-gray-800 p-6 rounded-lg">
            <h2 class="text-2xl text-white font-semibold mb-3">Job Title</h2>
            <p class="text-gray-400 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, libero eu dignissim eleifend, augue metus sodales nulla,
              id eleifend metus nulla eu felis. Sed eu tellus id libero sodales
              fermentum. Sed eu tellus id libero sodales fermentum.
            </p>
            <div class="flex items-center justify-between">
              <span class="text-gray-400">Company Name</span>
              <span class="text-gray-400">Date</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const pastProjects = [
  {
    title: "Stadtwerke München (Denkwerk)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedeuismod, libero eu dignissim eleifend, augue metus sodales nulla, id eleifend metus nulla eu felis. Sed eu tellus id libero sodales fermentum. Sed eu tellus id libero sodales fermentum.",
    logoPath: "@/assets/pixel_me.png",
    link: "https://www.swm.de/",
  },
];
</script>

<style scoped>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
</style>
