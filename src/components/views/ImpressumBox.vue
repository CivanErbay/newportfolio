<template>
  <div class="text-sky-200 flex justify-end md:-mt-7">
    <div class="flex flex-col items-end">
      <img
        alt="Civan Erbay"
        src="@/assets/pixel_me.png"
        width="125"
        height="125"
        class="-mr-4"
      />

      <div
        class="flex items-center text-xl pb-2 pt-2 md:pb-4 md:pt-3 gap-5 md:gap-8"
      >
        <img alt="Github" src="@/assets/github.svg" width="30" height="30" />
        <img alt="linkedIn" src="@/assets/insta.svg" width="30" height="30" />
        <img alt="Insta" src="@/assets/linked.svg" width="30" height="30" />
        <a class="cursor-pointer" @click="toImpressum()">Impressum</a>
      </div>
    </div>
    <div class="flex-col md:-mr-12">
      <p class="text-xl rotate-90 -mt-14 mr-[-69px] md:-mr-6">info@civan.io</p>
      <p class="text-6xl mr-[-40px] mt-[95px] rotate-90 md:mt-[6rem] md:mr-0">
        2023
      </p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const toImpressum = () => {
  router.push("/impressum");
};
</script>

<style lang="scss" scoped></style>
