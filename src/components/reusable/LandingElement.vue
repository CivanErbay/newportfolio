<template>
  <div class="cursor-pointer">
    <div
      class="font-code-latin text-indigo-200 text-6xl md:text-8xl lg:text-9xl my-12"
    >
      <h3 :class="marginLeft"><slot></slot></h3>
    </div>
    <div class="border-b-[20px] border-indigo-200 w-full"></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  marginLeft: string;
}>();
</script>

<style lang="scss" scoped></style>
