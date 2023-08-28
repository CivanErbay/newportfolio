<template>
  <div class="text-sky-200 flex justify-end md:-mt-7">
    <div class="flex flex-col items-end pr-4">
      <img
        alt="Civan Erbay"
        src="@/assets/pixel_me.png"
        class="-mr-4 h-[90px] md:h-[140px]"
      />

      <div
        class="flex items-center text-xl pb-2 pt-2 md:pb-4 md:pt-3 gap-5 md:gap-8"
      >
        <img alt="Github" src="@/assets/github.svg" class="w-[15px] md:w-[30px]"/>
        <img alt="linkedIn" src="@/assets/insta.svg" class="w-[15px] md:w-[30px]"/>
        <img alt="Insta" src="@/assets/linked.svg" class="w-[15px] md:w-[30px]"/>
        <a class="cursor-pointer text-sm md:text-xl" @click="toImpressum()">Impressum</a>
      </div>
    </div>
<!--     <div class="flex-col mt-[64px] mr-3 md:-mr-12">
      <p class="text-sm rotate-90 mr-[-52px] md:-mr-6">info@civan.io</p>
      <p class="text-sm rotate-90 mt-[17px] md:mt-[6rem] md:mr-0 md:text-6xl ">
        2023
      </p>
    </div> -->
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
