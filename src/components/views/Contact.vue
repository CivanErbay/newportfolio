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
      <button type="submit">Absenden</button>
      <input type="hidden" name="_captcha" value="false" />
      <input
        type="hidden"
        name="_next"
        value="https://civan.io/"
      />
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
const contactData = ref({ email: "", subject: "", message: "" });
</script>

<style lang="scss" scoped></style>
