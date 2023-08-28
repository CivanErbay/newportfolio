<template>
  <div class="max-w-6xl mt-6 pt-12 md:ml-20">
    <h5>
      Sie können mich per Kontaktformular kontaktieren oder direkt anrufen:
    </h5>
    <p class="mb-5">Telefon: +49 15116574098</p>
    <form
      action="https://formsubmit.co/d330320b176d4ace6fe30656c0275f61"
      method="POST"
      class="flex flex-col w-[90%] md:w-1/3 gap-y-5"
    >
      <label for="email">Ihre Email Adresse</label>
      <input type="email" name="email" required />
      <label for="subject">Betreff</label>
      <input type="text" name="subject" required />
      <label for="message">Ihre Nachricht</label>
      <textarea name="message" rows="4" cols="50" required />
      <!--  <button class="" type="submit">Absenden</button> -->
      <button
        type="submit"
        class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-md group w-fit"
      >
        <span
          class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-sky-200 opacity-[3%]"
        ></span>
        <span
          class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-sky-200 opacity-100 group-hover:-translate-x-8"
        ></span>
        <span
          class="relative w-full text-left text-sky-200 transition-colors duration-200 ease-in-out group-hover:text-gray-900"
          >Absenden</span
        >
        <span
          class="absolute inset-0 border-2 border-sky-200 rounded-md"
        ></span>
      </button>
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://civan-erbay.de/" />
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
const contactData = ref({ email: "", subject: "", message: "" });
</script>

<style lang="scss" scoped></style>
