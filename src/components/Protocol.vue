<template>
  <section
      class="w-full py-24 flex flex-col items-center justify-center text-center transition-colors duration-500"
      :class="isDark ? 'bg-black text-white' : 'bg-white text-black'"
  >
    <img :src="isDark ? '/protocol-black.png' : '/protocol-white.png'" alt="The Protocol" class="max-h-80 rounded-full mb-24">

    <h2 class="text-3xl md:text-5xl font-light tracking-wide mb-8">
      The Protocol
    </h2>

    <p class="max-w-2xl text-lg md:text-xl leading-relaxed mb-16"
       :class="isDark ? 'text-gray-400' : 'text-gray-600'">
      Every request is a compact, sovereign declaration:<br><br>
      Action, Key, Value, Limits and Time — sent in a single breath.
    </p>

    <!-- Insert Request -->
    <div class="max-w-5xl w-full mb-24">
      <h3 class="text-2xl font-light mb-6">INSERT</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <ProtocolBox title="Type" size="1 byte" />
        <ProtocolBox title="Quota" size="N bytes" />
        <ProtocolBox title="TTL Type" size="1 byte" />
        <ProtocolBox title="TTL" size="N bytes" />
        <ProtocolBox title="Key Size (M)" size="1 byte" />
        <ProtocolBox title="Key" size="Key M bytes" />
      </div>
    </div>

    <!-- Set Request -->
    <div class="max-w-5xl w-full mb-24">
      <h3 class="text-2xl font-light mb-6">SET</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        <ProtocolBox title="Type" size="1 byte" />
        <ProtocolBox title="TTL Type" size="1 byte" />
        <ProtocolBox title="TTL" size="N bytes" />
        <ProtocolBox title="Key Size (M)" size="1 byte" />
        <ProtocolBox title="Value Size (O)" size="N bytes" />
        <ProtocolBox title="Key" size="Key M bytes" />
        <ProtocolBox title="Value" size="Key O bytes" />
      </div>
    </div>

    <!-- Query, Get and Purge Request -->
    <div class="max-w-5xl w-full mb-24">
      <h3 class="text-2xl font-light mb-6">QUERY, GET & PURGE</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <ProtocolBox title="Type" size="1 byte" />
        <ProtocolBox title="Key Size (M)" size="1 byte" />
        <ProtocolBox title="Key" size="Key M bytes" />
      </div>
    </div>

    <!-- Update Request -->
    <div class="max-w-5xl w-full mb-24">
      <h3 class="text-2xl font-light mb-6">UPDATE</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <ProtocolBox title="Type" size="1 byte" />
        <ProtocolBox title="Attribute" size="1 byte" />
        <ProtocolBox title="Change Type" size="1 byte" />
        <ProtocolBox title="Value" size="N bytes" />
        <ProtocolBox title="Key Size (M)" size="1 byte" />
        <ProtocolBox title="Key" size="Key M bytes" />
      </div>
    </div>

    <!-- Response -->
    <div class="max-w-5xl w-full">
      <h3 class="text-2xl font-light">QUERY</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-24 mt-8">
        <ProtocolBox title="Status" size="1 byte" />
        <ProtocolBox title="Quota" size="N bytes" />
        <ProtocolBox title="TTL Type" size="1 byte" />
        <ProtocolBox title="TTL" size="N bytes" />
      </div>

      <h3 class="text-2xl font-light mb-6">SET</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <ProtocolBox title="Status" size="1 byte" />
        <ProtocolBox title="TTL Type" size="1 byte" />
        <ProtocolBox title="TTL" size="N bytes" />
        <ProtocolBox title="Value Size (M)" size="N bytes" />
        <ProtocolBox title="Value" size="M bytes" />
      </div>

      <p class="mt-30 text-sm uppercase tracking-widest"
         :class="isDark ? 'text-gray-500' : 'text-gray-500'">
        INSERT, UPDATE, PURGE and failed operations will return only 1 byte.
      </p>
    </div>

  </section>
</template>

<script setup lang="ts">
import { useDark } from '@vueuse/core'
import ProtocolBox from "./ProtocolBox.vue";

const isDark = useDark()
</script>

<style scoped>
/* Nada más. La geometría de los datos es suficiente. */
</style>