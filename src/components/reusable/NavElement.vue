<template>
  <div class="cursor-pointer">
    <div
      :class="styles"
      class="font-code-latin w-fit text-3xl md:text-5xl lg:text-6xl pt-6"
    >
      <a
        class="group text-sky-200 transition duration-300"
        :class="{ 'text-xl': isSmall }"
        ><slot></slot>
        <span
          class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-2 bg-sky-200"
        ></span>
      </a>
    </div>
    <!-- <div class="border-b-[20px] border-white w-full"></div> -->
  </div>
</template>

<script setup lang="ts">
defineProps<{
  styles: string;
  isSmall: any;
}>();
</script>

<style lang="scss" scoped></style>
