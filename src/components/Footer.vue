<template>
  <footer
      class="w-full py-8 flex flex-col items-center justify-center text-center transition-colors duration-500"
      :class="isDark ? 'bg-black text-gray-500' : 'bg-white text-gray-500'"
  >

    <div class="text-md mt-20 mb-20">
      Find us in our available networks ...
    </div>

    <div class="flex space-x-6 mb-4">
      <a
          href="https://github.com/throttr"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:underline"
      >
        <img :src="isDark ? '/github-mark-white.svg' : '/github-mark.svg'" alt="GitHub" class="h-8 -mt-2 mr-4 inline-block">
        GitHub
      </a>
      <a
          href="https://packagist.org/packages/throttr/sdk"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:underline"
      >
        <img :src="'/Packagist.svg'" alt="Packagist" class="h-8 -mt-2 ml-4 mr-4 inline-block">
        Packagist
      </a>
      <a
          href="https://www.npmjs.com/package/@throttr/sdk"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:underline"
      >
        <img :src="'/npm.svg'" alt="NPM" class="h-5 -mt-1 ml-4 mr-4 inline-block">
        Registry
      </a>
    </div>


    <div class="text-xs mt-20 mb-10">

      <div class="justify-center flex">
        <img src="/8731267.jpeg" class="h-16 rounded-full mb-8" alt="Ian Torres">
      </div>

      Built with sovereignty by <a href="https://www.iantorres.cl" class="font-bold">Ian Torres</a>. <br><br> Released under AGPLv3.
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useDark } from '@vueuse/core'

const isDark = useDark()
</script>

<style scoped>
/* Nada extra. La solemnidad manda. */
</style>