<template>
  <div class="max-w-6xl max-h-[50vh] mt-6 pt-4 md:pt-12 md:ml-20 overflow-y-scroll">
    <div class="flex flex-wrap gap-5 pr-5 md:gap-10 max-w-lg">
      <img
        v-for="icon in iconPathList"
        :alt="icon.alt"
        :src="icon.path"
        class="w-[30px] md:w-[60px]"
      />
    </div>
    <div class="mt-12 pr-4 text-base">
      <ul>
        <li class="mb-4">Mehrjährige Agenturerfahrung</li>
        <li class="mb-4">
          Zuverlässige Umsetzung von Webseiten, komplexen Webanwendungen und
          digitalen Lösungen, die sowohl funktional als auch ästhetisch
          ansprechend sind
        </li>
        <li class="mb-4">
          Einsatz aller gängigen JavaScript- & UI-Frameworks
        </li>
        <li class="mb-4">
          Kundenorientierte & agile Arbeitsweise, sowie ein gutes Verständnis
          dafür ihre Bedürfnisse in effektive digitale Lösungen zu übersetzen
        </li>
        <li class="mb-4">
          Sicherer Umgang mit komplexen Projektanforderungen, Design- und
          Style-Guides
        </li>
        <li class="mb-4">
          Code-workflow (GIT) und entsprechende Plattformen (GitHub, GitLab,
          BitBucket)
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const iconPathList = [
  { path: "./icons/Vuejs.png", alt: "vuejs" },
  { path: "./icons/React.png", alt: "react" },
  { path: "./icons/Angular.png", alt: "angular" },
  { path: "./icons/Node.png", alt: "node" },
  { path: "./icons/Html5.png", alt: "html" },
  { path: "./icons/Css3.png", alt: "css3" },
  { path: "./icons/Gcp.png", alt: "google cloud" },
  { path: "./icons/Firebase.png", alt: "firebase" },
  { path: "./icons/Atlassian.png", alt: "atlassian" },
  { path: "./icons/Git.png", alt: "git" },
];
</script>

<style lang="scss" scoped></style>
