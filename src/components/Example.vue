<template>
  <section
      class="w-full py-60 flex flex-col items-center justify-center text-center transition-colors duration-500"
      :class="isDark ? 'bg-black text-white' : 'bg-white text-black'"
  >
    <img :src="isDark ? '/how-works-black.png' : '/how-works-white.png'" alt="The Protocol" class="max-h-80 rounded-full mb-24">

    <h2 class="text-3xl md:text-5xl font-light tracking-wide mb-24">
      It's a free choice
    </h2>

    <!-- Language Selector -->
    <div class="flex space-x-4 mb-8">
      <button
          v-for="lang in languages"
          :key="lang"
          @click="selected = lang"
          class="px-4 py-2 rounded-lg border transition-all duration-300"
          :class="selected === lang
          ? (isDark ? 'bg-gray-700 border-gray-500' : 'bg-gray-200 border-gray-400')
          : (isDark ? 'bg-transparent border-gray-600' : 'bg-transparent border-gray-300')"
      >
        {{ lang }}
      </button>
    </div>

    <!-- Code Block -->
    <div class="max-w-4xl w-full px-4 text-left">
      <div v-if="selected === 'Java'" class="py-8 text-xl text-gray-500">
        Work in Progress. Coming soon.
      </div>

      <div
          v-else
          v-html="highlightedCode"
          class="rounded-lg overflow-x-auto p-2 rounded-2xl shadow border transition-all duration-500"
          :class="[isDark ? 'border-gray-800' : 'border-gray-200']"
      ></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useDark } from '@vueuse/core'
import { highlight } from '../utils/highlight'

const isDark = useDark()

const languages = ['TypeScript', 'PHP', 'Java']
// @ts-ignore
const selected = ref('TypeScript')

const examples = {
  TypeScript: `import {
  Service,
  RequestType,
  TTLType,
  AttributeType,
  ChangeType
} from "@throttr/sdk";

const service = new Service({
    host: "127.0.0.1",
    port: 9000,
    max_connections: 4, // Optional: configure concurrent connections
});

// Define a consumer (example: IP + port, UUID, or custom identifier)
const consumerId = "127.0.0.1:1234";

// Define a resource (example: METHOD + URL, or any identifier)
const resourceId = "GET /api/resource";

// Connect to Throttr
await service.connect();

// Insert quota for a consumer-resource pair
const insert_response = await service.send({
    type: RequestType.Insert,
    consumer_id: consumerId,
    resource_id: resourceId,
    quota: BigInt(5),
    usage: BigInt(0),
    ttl_type: TTLType.Milliseconds,
    ttl: BigInt(3000), // 3 seconds
});

console.log("Allowed:", insert_response.allowed);
console.log("Remaining:", insert_response.quota_remaining);
console.log("TTL:", insert_response.ttl_remaining);

// Update the available quota
await service.send({
    type: RequestType.Update,
    attribute: AttributeType.Quota,
    change: ChangeType.Decrease,
    value: BigInt(1),
    consumer_id: consumerId,
    resource_id: resourceId,
});

// Query the available quota
const query_response = await service.send({
    type: RequestType.Query,
    consumer_id: consumerId,
    resource_id: resourceId,
});

console.log("Allowed:", query_response.allowed);
console.log("Remaining:", query_response.quota_remaining);
console.log("TTL:", query_response.ttl_remaining);

// Optionally, purge the quota
await service.send({
    type: RequestType.Purge,
    consumer_id: consumerId,
    resource_id: resourceId,
});

// Disconnect once done
service.disconnect();`,

  PHP: `<?php

require 'vendor/autoload.php';

use Throttr\\SDK\\Service;
use Throttr\\SDK\\Enum\\TTLType;

// Configure your instance with 4 connections ...
$service = new Service('127.0.0.1', 9000, 4);

// Define a consumer ... it can be an IP and port or UUID, whatever ...
$consumerId = "127.0.0.1";

// Define the resource ... it can be a METHOD + URL or UUID, whatever ...
$resourceId = "/api/resource";

// Connect to Throttr
$service->connect();

// Add limit to the registry
$service->insert(
    consumerId: $consumerId,
    resourceId: $resourceId,
    ttl: 3000,
    ttlType: TTLType::MILLISECONDS,
    quota: 5,
    usage: 0
);

// Do you want to know if that was stored?
$response = $service->query(
    consumerId: $consumerId,
    resourceId: $resourceId,
);

printf(
    "Allowed: %s, Remaining: %d, TTL: %dms\\n",
    $response->can() ? 'true' : 'false',
    $response->quotaRemaining() ?? 0,
    (int)($response->ttlRemainingSeconds() * 1000)
);

// Do you want to update the quota?
$service->update(
    consumerId: $consumerId,
    resourceId: $resourceId,
    attribute: AttributeType::QUOTA,
    change: ChangeType::DECREASE,
    value: 1
);

// Do you want to know the new value?
$response = $service->query(
    consumerId: $consumerId,
    resourceId: $resourceId,
);

printf(
    "Allowed: %s, Remaining: %d, TTL: %dms\\n",
    $response->can() ? 'true' : 'false',
    $response->quotaRemaining() ?? 0,
    (int)($response->ttlRemainingSeconds() * 1000)
);

// Close the connections ...
$service->close();`,

  Java: `// Coming soon`
}

const highlightedCode = ref('')

watchEffect(async () => {
  if (selected.value === 'Java') {
    highlightedCode.value = ''
  } else {
    const theme = isDark.value ? 'github-dark' : 'github-light'
    // @ts-ignore
    highlightedCode.value = await highlight(examples[selected.value], selected.value.toLowerCase(), theme)
  }
})
</script>

<style scoped>
/* Nada adicional. Padding ya aplicado inline */
</style>