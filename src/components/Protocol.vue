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
      Every request is a compact, sovereign declaration:<br>
      Consumer, Resource, Limits, Time, Action — sent in a single breath.
    </p>

    <!-- Insert Request -->
    <div class="max-w-5xl w-full mb-24">
      <h3 class="text-2xl font-light mb-6">Insert Request</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <ProtocolBox title="Request Type" size="1 byte" />
        <ProtocolBox title="Quota" size="8 bytes" />
        <ProtocolBox title="Usage" size="8 bytes" />
        <ProtocolBox title="TTL Type" size="1 byte" />
        <ProtocolBox title="TTL" size="8 bytes" />
        <ProtocolBox title="Consumer ID Size" size="1 byte" />
        <ProtocolBox title="Resource ID Size" size="1 byte" />
        <ProtocolBox title="Consumer ID" size="N bytes" />
        <ProtocolBox title="Resource ID" size="M bytes" />
      </div>
    </div>

    <!-- Query and Purge Request -->
    <div class="max-w-5xl w-full mb-24">
      <h3 class="text-2xl font-light mb-6">Query & Purge Request</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <ProtocolBox title="Request Type" size="1 byte" />
        <ProtocolBox title="Consumer ID Size" size="1 byte" />
        <ProtocolBox title="Resource ID Size" size="1 byte" />
        <ProtocolBox title="Consumer ID" size="N bytes" />
        <ProtocolBox title="Resource ID" size="M bytes" />
      </div>
    </div>

    <!-- Update Request -->
    <div class="max-w-5xl w-full mb-24">
      <h3 class="text-2xl font-light mb-6">Update Request</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <ProtocolBox title="Request Type" size="1 byte" />
        <ProtocolBox title="Attribute" size="1 byte" />
        <ProtocolBox title="Change Type" size="1 byte" />
        <ProtocolBox title="Value" size="8 bytes" />
        <ProtocolBox title="Consumer ID Size" size="1 byte" />
        <ProtocolBox title="Resource ID Size" size="1 byte" />
        <ProtocolBox title="Consumer ID" size="N bytes" />
        <ProtocolBox title="Resource ID" size="M bytes" />
      </div>
    </div>

    <!-- Response -->
    <div class="max-w-5xl w-full">
      <h3 class="text-2xl font-light mb-6">Response</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <ProtocolBox title="Can or Success" size="1 byte" />
        <ProtocolBox title="Quota Remaining" size="8 bytes" />
        <ProtocolBox title="TTL Type" size="1 byte" />
        <ProtocolBox title="TTL Remaining" size="8 bytes" />
      </div>
      <p class="mt-6 text-sm uppercase tracking-widest"
         :class="isDark ? 'text-gray-500' : 'text-gray-500'">
        Always 18 bytes for Insert/Query.
        1 byte for Update/Purge.
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