<template>
  <div
    class="flex flex-wrap max-w-6xl max-h-[55vh] md:max-h-[60vh] mt-6 md:pt-12 md:ml-12 overflow-y-scroll rounded-lg text-sm md:text-base"
  >
    <div v-for="project in pastProjects" class="max-w-sm md:max-w-xl px-4">
      <div class="-mx-4">
        <div class="pr-4 md:px-4">
          <div class="py-4 pr-4 md:p-4">
            <div
              class="bg-gray-800 p-6 rounded-lg md:h-[426px] flex flex-col justify-between"
            >
              <div>
                <h2 class="text-xl md:text-2xl text-white font-semibold mb-3">
                  {{ project.title }}
                </h2>
                <p class="text-gray-400 mb-8">
                  {{ project.description }}
                </p>
              </div>
              <div>
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
                    <span class="text-gray-400 mr-2">{{
                      project.company
                    }}</span>
                  </div>
                  <span class="text-gray-400 mr-2">{{ project.date }}</span>
                </div>
                <a
                  :href="project.link"
                  target="_blank"
                  class="text-gray-400 mr-2 hidden md:block"
                  >{{ project.link }}</a
                >
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
      "Weiterentwicklung eines Angular-basierten Kundenportals, welches Kunden der Stadtwerke München Zugriff auf Kontodaten, Rechnungen, Verträge und Zählerstände ermöglicht. Mein Aufgabenbereich bestand darin eine interaktive Oberfläche für eine benutzerfreundliche Erfahrung zu implementieren, entsprechende Kundendaten zu visualisieren und eine Vielzahl weiterer Portal-spezifischer Funktionen umzusetzen.",
    link: "https://meine.swm.de/",
    company: "denkwerk",
    stack: "Angular",
    date: "2023",
    linkText: "meine-swm.de",
  },
  {
    title: "Zugvögel Festival - Personalplaner ",
    description:
      "Mitwirkung an der Umsetzung des Personalplanungstool 'Schwarmplaner' für das Zugvögelfestival. Die Entwicklung erfolgte mit VueJs und Vuetify. Hauptfunktion des Tools ist die effiziente Zuordnung von Mitarbeiterschichten. Organisatoren & Crew können Schichten erstellen und bearbeiten, während Mitarbeiter ihre Verfügbarkeit verwalten können. Für das Backend kam das Node.js Framework Express zum Einsatz.",
    link: "https://schwarmplaner.zugvoegelfestival.org/",
    company: "Zugvögel e.V.",
    stack: "VueJs, Express",
    date: "2023",
    linkText: "schwarmplaner.org",
  },
  {
    title: "Kappes Kimchi - Webshop",
    description:
      "Umsetzung des Webshops für Kappes-Kimchi. Für das Frontend kommt VueJs zum Einsatz, Google Firebase für Authentifizierung und Datenbank, Stripe für Zahlungen und Google Cloud Functions für E-Mail-Services und weitere nötige Serverless Functions. Diese Technologien verschmilzen zu einem funktionsreichen Webshop, der es ermöglicht, hochwertige Produkte online anzubieten.",
    link: "https://kappes-kimchi.de/",
    company: "privat",
    stack: "VueJs, Firebase, GCP",
    date: "2022",
    linkText: "kappes-kimchi.de",
  },
  {
    title: "Stadtwerke München - Website",
    description:
      "Mitentwicklung der swm.de. Das dynamische und ansprechende Design wurden mithilfe von VueJs (Frontend) und Nunjucks (Templating). Ein Vielfalt an custom Modulen und reusable Patterns ermöglichen konsistente Elemente und eine intuitive Benutzererfahrung.",
    link: "https://www.swm.de/",
    company: "denkwerk",
    stack: "VueJs, Nunjucks",
    date: "2022",
    linkText: "smw.de",
  },
  {
    title: "Deka Investments",
    description:
      "Umsetzung der deka.de Landingpage für das Kreditinstitut Deka Investments. Die Entwicklung erfolgte mittels VueJs (Frontend) und NunJucks (Templating). Ein Zusammenspiel aus wiederverwendbaren und maßgeschneiderten Komponenten schafft ein ansprechende User-Inferface. Die ensprechende Nunjucks-Templates wurden in ein CMS eingebunden, um Inhalte kundenseitig pflegbar zu machen.",
    link: "https://deka.de/",
    stack: "VueJs, Nunjucks",
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
