<template>
  <div
      class="flex flex-col items-center justify-center border rounded-lg p-4 min-w-[120px] h-[60px] transition-colors duration-500"
      :class="isDark ? 'border-gray-600 bg-gray-800' : 'border-gray-300 bg-gray-100'"
  >
    <div class="font-semibold uppercase text-xs mb-2">{{ props.title }}</div>
    <div class="text-xs" :class="isDark ? 'text-gray-100' : 'text-gray-500'">{{ props.size }}</div>
  </div>
</template>

<script setup lang="ts">
import { useDark } from '@vueuse/core'

const props = defineProps<{
  title: string
  size: string
}>()

const isDark = useDark()
</script>

<style scoped>
/* No extra styles. Geometry speaks. */
</style>