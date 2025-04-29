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
          v-for="(lang, index) in languages"
          :key="lang"
          @click="selected = index"
          class="px-4 py-2 rounded-lg border transition-all duration-300"
          :class="selected === index
          ? (isDark ? 'bg-gray-700 border-gray-500' : 'bg-gray-200 border-gray-400')
          : (isDark ? 'bg-transparent border-gray-600' : 'bg-transparent border-gray-300')"
      >
        {{ implementations[index].name }}
      </button>
    </div>

    <!-- Code Block -->
    <div class="max-w-4xl w-full px-4 text-left">
      <div
          v-html="highlightedCode"
          class="rounded-lg overflow-x-auto p-2 rounded-2xl shadow border transition-all duration-500 mb-10"
          :class="[isDark ? 'border-gray-800' : 'border-gray-200']"
      ></div>


      <a
          :href="implementations[selected].source"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:underline p-4 mb-10"
      >
        <img :src="isDark ? '/github-mark-white.svg' : '/github-mark.svg'" alt="GitHub" class="h-8 -mt-2 mr-4 inline-block">
        Are you ready? Get the code.
      </a>

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
const selected = ref(0)

const implementations = ref([
  {
    source: 'https://github.com/throttr/typescript',
    name: "TypeScript",
    code: `import {
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
service.disconnect();`
  },
  {
    source: 'https://github.com/throttr/php',
    name: "PHP",
    code: `<?php

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
$service->close();`
  },
  {
    source: 'https://github.com/throttr/java',
    name: "Java",
    code: `import cl.throttr.Service;
import cl.throttr.InsertRequest;
import cl.throttr.QueryRequest;
import cl.throttr.UpdateRequest;
import cl.throttr.PurgeRequest;
import cl.throttr.TTLType;
import cl.throttr.AttributeType;
import cl.throttr.ChangeType;
import cl.throttr.FullResponse;
import cl.throttr.SimpleResponse;

Service service = new Service("127.0.0.1", 9000, 4);  // Max connections = 4

try {
  // Connect to Throttr
  service.connect();

  // Define a consumer and resource
  String consumerId = "127.0.0.1:1234";
  String resourceId = "GET /api/resource";

  // Insert quota
  CompletableFuture<Object> insertFuture = service.send(new InsertRequest(
      5L, 0L, TTLType.Milliseconds, 3000L, consumerId, resourceId));
  FullResponse insertResponse = (FullResponse)insertFuture.get();

  System.out.println("Allowed: " + insertResponse.allowed());
  System.out.println("Remaining: " + insertResponse.quotaRemaining());
  System.out.println("TTL type: " + insertResponse.ttlType());
  System.out.println("TTL remaining: " + insertResponse.ttlRemaining());

  // Update the quota
  CompletableFuture<Object> updateFuture = service.send(new UpdateRequest(
      AttributeType.QUOTA, ChangeType.DECREASE, 1L, consumerId, resourceId));
  SimpleResponse updateResponse = (SimpleResponse)updateFuture.get();
  System.out.println("Quota updated successfully: " + updateResponse.success());

  // Query the quota
  CompletableFuture<Object> queryFuture =
      service.send(new QueryRequest(consumerId, resourceId));
  FullResponse queryResponse = (FullResponse)queryFuture.get();

  System.out.println("Allowed after update: " + queryResponse.allowed());
  System.out.println("Remaining after update: " +
                     queryResponse.quotaRemaining());
  System.out.println("TTL type: " + queryResponse.ttlType());
  System.out.println("TTL after update: " + queryResponse.ttlRemaining());

  // Optionally, purge the quota
  CompletableFuture<Object> purgeFuture =
      service.send(new PurgeRequest(consumerId, resourceId));
  SimpleResponse purgeResponse = (SimpleResponse)purgeFuture.get();
  System.out.println("Purge success: " + purgeResponse.success());

} catch (Exception e) {
  e.printStackTrace();
} finally {
  // Disconnect once done
  service.close();
}`
  }
])

const highlightedCode = ref('')

watchEffect(async () => {
  const theme = isDark.value ? 'github-dark' : 'github-light'
  // @ts-ignore
  highlightedCode.value = await highlight(implementations.value[selected.value].code, implementations.value[selected.value].name.toLowerCase(), theme)
})
</script>

<style scoped>
/* Nada adicional. Padding ya aplicado inline */
</style>