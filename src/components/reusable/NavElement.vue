<template>
  <div class="cursor-pointer">
    <div :class="styles" class="w-fit text-xl md:text-2xl lg:text-4xl">
      <a
        class="group text-sky-200 transition-all duration-1000"
        ><slot></slot>
        <span
          class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 md:h-2 bg-sky-200"
          :class="{
            'max-w-full transition-all duration-500 h-1 md:h-2 bg-sky-200': !isSmall,
          }"
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
