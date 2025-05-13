<template>
  <section
      class="w-full py-24 flex flex-col items-center justify-center text-center transition-colors duration-500"
      :class="isDark ? 'bg-black text-white' : 'bg-white text-black'"
  >
    <img :src="isDark ? '/protocol-black.png' : '/protocol-white.png'" alt="The Protocol" class="max-h-80 rounded-full mb-24">

    <h2 class="text-3xl md:text-5xl font-light tracking-wide mb-8">
      The Protocol
    </h2>

    <p class="max-w-2xl text-lg md:text-xl leading-relaxed mb-16 font-light tracking-wide leading-12"
       :class="isDark ? 'text-gray-400' : 'text-gray-600'">
      Every request is a compact, sovereign declaration:<br><br>
      Action, Key, Value, Limits and Time — sent in a single breath.
    </p>

    <a href="https://docs.throttr.cl/about-protocol.html" target="_blank" class="rounded px-7 py-4 mb-20" :class="isDark ? 'bg-white' : 'bg-gray-800 text-white'"><span class="text-xs">Read more</span> <br> <span class="text-xl">About the Protocol</span></a>

  </section>
</template>

<script setup lang="ts">
import { useDark } from '@vueuse/core'

const isDark = useDark()
</script>

<style scoped>
/* Nada más. La geometría de los datos es suficiente. */
</style>