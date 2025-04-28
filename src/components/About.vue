<template>
  <section
      class="min-h-screen flex flex-col items-center justify-center transition-colors duration-500"
      :class="isDark ? 'bg-black text-white' : 'bg-white text-black'"
  >
    <img :src="isDark ? '/origin-black.png' : '/origin-white.png'" alt="The Origin" class="max-h-120 rounded-full">
    <h2 class="text-3xl md:text-5xl font-light tracking-wide mb-8 mt-10">
      The Origin of Throttr
    </h2>
    <p class="max-w-2xl text-lg md:text-xl leading-relaxed"
       :class="isDark ? 'text-gray-400' : 'text-gray-600'">
      Throttr was born from deliberate effort.
      It does not chase trends.
      It was forged to sustain the traffic of the world,
      without yielding, without bending,
      without asking for permission.
    </p>
  </section>
</template>

<script setup lang="ts">
import { useDark } from '@vueuse/core'

const isDark = useDark()
</script>

<style scoped>
/* Nada adicional. La dignidad habla sola. */
</style>