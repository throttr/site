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
        :src="isDark ? '/logo-white.png' : '/logo-black.png'"
        alt="Throttr Logo"
        class="h-auto mb-8 transition-all duration-500"
    />
    <p class="mt-4 text-2xl font-light tracking-wide leading-16" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
      Master the memory.
      The limit is set by your machine.
    </p>
  </section>
</template>

<style scoped>
</style>
