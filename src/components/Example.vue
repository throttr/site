<template>
  <section
      class="w-full flex flex-col items-center justify-center text-center transition-colors duration-500"
      :class="isDark ? 'bg-black text-white' : 'bg-white text-black'"
  >
    <img :src="isDark ? '/how-works-black.png' : '/how-works-white.png'" alt="The Protocol"
         class="max-h-80 rounded-full mb-24">

    <h2 class="text-3xl md:text-5xl font-light tracking-wide mb-64">
      It's a free choice
    </h2>

    <h2 class="text-3xl md:text-5xl font-light tracking-wide mb-24">
      1. Run the Server
    </h2>

    <div class="w-full text-left">

      <div class="overflow-auto p-10 rounded-2xl mb-10 text-center" style="background-color: rgb(243, 243, 243);">
        <pre class="pre-styled" style="margin-bottom: 20px;">Quotas and TTL upto <strong>255</strong>:</pre>
        <pre class="pre-styled">docker run -p 9000:9000 ghcr.io/throttr/throttr:4.0.14-release-uint8</pre>
        <pre class="pre-styled" style="margin-bottom: 20px; margin-top: 60px;">Quotas and TTL upto <strong>65.535</strong>:</pre>
        <pre class="pre-styled">docker run -p 9000:9000 ghcr.io/throttr/throttr:4.0.14-release-uint16</pre>
        <pre class="pre-styled" style="margin-bottom: 20px; margin-top: 60px;">Quotas and TTL upto <strong>4.294.967.295</strong>:</pre>
        <pre class="pre-styled">docker run -p 9000:9000 ghcr.io/throttr/throttr:4.0.14-release-uint32</pre>
        <pre class="pre-styled" style="margin-bottom: 20px; margin-top: 60px;">Quotas and TTL upto <strong>18.446.744.073.709.551.615</strong>:</pre>
        <pre class="pre-styled">docker run -p 9000:9000 ghcr.io/throttr/throttr:4.0.14-release-uint64</pre>
      </div>
    </div>


    <h2 class="text-3xl md:text-5xl font-light text-left tracking-wide mb-24 mt-32">
      2. Use your language
    </h2>

    <!-- Language Selector -->
    <div class="flex space-x-4 mb-8">
      <a
          v-for="(lang, index) in implementations"
          :key="index"
          @click="selected = index"
          :href="lang.source"
          class="px-8 py-4 rounded-lg border transition-all duration-300"
          :class="(isDark ? 'bg-transparent border-gray-600' : 'bg-transparent border-gray-300')"
      >
        <i :class="lang.icon" style="font-size: 4rem;"></i><br>
      </a>
    </div>


    <p class="mt-20 mb-20 text-sm uppercase tracking-widest"
       :class="isDark ? 'text-gray-500' : 'text-gray-500'">
      Your language isn't on the list? <strong><a href="https://github.com/throttr/throttr/issues/new" target="_blank">Ask for him</a></strong>.
    </p>
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
import {ref} from 'vue'
import {useDark} from '@vueuse/core'

const isDark = useDark()

// @ts-ignore
const selected = ref(0)

const implementations = ref([
  {
    source: 'https://github.com/throttr/typescript',
    icon: 'devicon-typescript-plain',
  },
  {
    source: 'https://github.com/throttr/php',
    icon: 'devicon-php-plain',
  },
  {
    source: 'https://github.com/throttr/java',
    icon: 'devicon-java-plain',
  },
  {
    source: 'https://github.com/throttr/cpp',
    icon: 'devicon-cplusplus-plain',
  }
])
</script>

<style scoped>
/* Nada adicional. Padding ya aplicado inline */
</style>