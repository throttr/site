<script setup lang="ts">
import { useDark } from '@vueuse/core'

const isDark = useDark()
</script>

<template>
  <section
      class="min-h-screen flex flex-col items-center justify-center transition-colors duration-500"
      :class="isDark ? 'bg-black text-white' : 'bg-white text-black'"
  >
    <img
        src="/logo.png"
        alt="Throttr Logo"
        class="h-80 mb-8 transition-all duration-500"
    />
    <h2 class="tracking-wide mb-24 bg-gradient-to-br from-orange-700 to-orange-900 bg-clip-text text-7xl md:text-9xl font-extrabold text-transparent">
      Throttr
    </h2>
    <p class="mt-4 text-2xl font-light tracking-wide leading-16" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
      Master the memory.
      The limit is set by your machine.
    </p>
  </section>
</template>

<style scoped>
</style>
