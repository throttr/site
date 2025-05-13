<template>
  <section
      class="w-full flex flex-col items-center justify-center text-center transition-colors duration-500"
      :class="isDark ? 'bg-black text-white' : 'bg-white text-black'"
  >
    <img :src="isDark ? '/how-works-black.png' : '/how-works-white.png'" alt="The Protocol"
         class="max-h-80 rounded-full mb-24">

    <h3 class="text-3xl md:text-3xl font-light tracking-wide leading-16 mb-16">
      By provide you a free, <br> high performance and minimalist <br> in-memory database
    </h3>

    <a href="https://docs.throttr.cl/get-started.html" target="_blank" class="rounded px-7 py-4 mb-60" :class="isDark ? 'bg-white' : 'bg-gray-800 text-white'"><span class="text-xs">Are you ready?</span> <br> <span class="text-3xl">Get Started</span></a>
  </section>
</template>

<style scoped>
.pre-styled {
  font-family: monospace;
  color: rgb(68, 68, 68);
  background-color: rgb(243, 243, 243);
  font-weight: 400;
}
</style>

<script setup lang="ts">
import {useDark} from '@vueuse/core'

const isDark = useDark()
</script>

<style scoped>
/* Nada adicional. Padding ya aplicado inline */
</style>