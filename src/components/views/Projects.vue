<template>
  <div
    class="flex flex-wrap max-w-6xl max-h-[60vh] mt-6 pt-12 md:ml-12 overflow-y-scroll rounded-lg"
  >
    <div v-for="project in pastProjects" class="max-w-sm md:max-w-xl px-4">
      <div class="-mx-4">
        <div class="px-4">
          <div class="p-4">
            <div class="bg-gray-800 p-6 rounded-lg">
              <h2 class="text-2xl text-white font-semibold mb-3">
                {{ project.title }}
              </h2>
              <p class="text-gray-400 mb-8">
                {{ project.description }}
              </p>
              <a
                :href="project.link"
                target="_blank"
                class="text-sky-200 mr-2 md:block"
                >{{ project.linkText }}</a
              >
              <br />
              <span class="text-gray-400 mb-2">
                {{ project.stack }}
              </span>

              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <span class="text-gray-400 mr-2">{{ project.company }}</span>
                  <a
                    :href="project.link"
                    target="_blank"
                    class="text-gray-400 mr-2 hidden md:block"
                    >{{ project.link }}</a
                  >
                </div>
                <span class="text-gray-400 mr-2">{{ project.date }}</span>
              </div>
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
    title: "Stadtwerke München - Kundenportal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedeuismod, libero eu dignissim eleifend, augue metus sodales nulla, id eleifend metus nulla eu felis. Sed eu tellus id libero sodales fermentum. Sed eu tellus id libero sodales fermentum.",
    logoPath: "@/assets/pixel_me.png",
    link: "https://meine.swm.de/",
    company: "denkwerk",
    stack: "Angular",
    date: "2023",
    linkText: "meine-swm.de",
  },
  {
    title: "Zugvögel Festival - Personalplaner ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedeuismod, libero eu dignissim eleifend, augue metus sodales nulla, id eleifend metus nulla eu felis. Sed eu tellus id libero sodales fermentum. Sed eu tellus id libero sodales fermentum.",
    logoPath: "@/assets/pixel_me.png",
    link: "https://schwarmplaner.zugvoegelfestival.org/",
    company: "privat",
    stack: "VueJs, Express",
    date: "2023",
    linkText: "Schwarmplaner",
  },
  {
    title: "Kappes Kimchi - Webshop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedeuismod, libero eu dignissim eleifend, augue metus sodales nulla, id eleifend metus nulla eu felis. Sed eu tellus id libero sodales fermentum. Sed eu tellus id libero sodales fermentum.",
    logoPath: "@/assets/pixel_me.png",
    link: "https://kappes-kimchi.de/",
    company: "privat",
    stack: "VueJs, Firebase, GCP",
    date: "2022",
    linkText: "Kappes Kimchi",
  },
  {
    title: "Stadtwerke München - Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedeuismod, libero eu dignissim eleifend, augue metus sodales nulla, id eleifend metus nulla eu felis. Sed eu tellus id libero sodales fermentum. Sed eu tellus id libero sodales fermentum.",
    logoPath: "@/assets/pixel_me.png",
    link: "https://www.swm.de/",
    company: "denkwerk",
    stack: "VueJs,Nunjucks",
    date: "2022",
    linkText: "smw.de",
  },
  {
    title: "Deka Investments",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedeuismod, libero eu dignissim eleifend, augue metus sodales nulla, id eleifend metus nulla eu felis. Sed eu tellus id libero sodales fermentum. Sed eu tellus id libero sodales fermentum.",
    logoPath: "@/assets/pixel_me.png",
    link: "https://deka.de/",
    stack: "VueJs,Nunjucks",
    company: "denkwerk",
    date: "2021",
    linkText: "deka.de",
  },
];
</script>

<style scoped>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
</style>
