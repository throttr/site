<template>
  <section
      class="w-full py-60 flex flex-col items-center justify-center text-center transition-colors duration-500"
      :class="isDark ? 'bg-black text-white' : 'bg-white text-black'"
  >
    <img :src="isDark ? '/how-works-black.png' : '/how-works-white.png'" alt="The Protocol"
         class="max-h-80 rounded-full mb-24">

    <h2 class="text-3xl md:text-5xl font-light tracking-wide mb-24">
      It's a free choice
    </h2>

    <h2 class="text-3xl md:text-5xl font-light tracking-wide mb-24">
      <i class="devicon-docker-plain" style="font-size: 4rem;"></i> Run the server
    </h2>

    <div class="max-w-4xl w-full px-4 text-left">

    <div class="overflow-auto p-10 rounded-2xl mb-10" style="background-color: rgb(243, 243, 243);">
      <pre style="font-family:monospace;color: rgb(68, 68, 68); background-color: rgb(243, 243, 243); font-weight: 400; ">docker run -e THREADS=4 -p 9000:9000 ghcr.io/throttr/throttr:2.0.1-release</pre>
    </div>
    </div>

    <p class="mt-0 mb-20 text-sm uppercase tracking-widest"
       :class="isDark ? 'text-gray-500' : 'text-gray-500'">
      It's power compressed in 1.5mb.
    </p>


    <h2 class="text-3xl md:text-5xl font-light text-left tracking-wide mb-24">
      Use SDK's
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
        <i :class="implementations[index].icon" style="font-size: 2rem;"></i><br>

        {{ implementations[index].name }}
      </button>
    </div>

    <!-- Code Block -->
    <div class="max-w-4xl w-full px-4 text-left">

      <div v-if="implementations[selected].name === 'TypeScript'" class="overflow-auto p-8 rounded-4xl"
           style="background-color: rgb(243, 243, 243);">

        <pre style="font-family:monospace;color: rgb(68, 68, 68); background-color: rgb(243, 243, 243); font-weight: 400; "><span style="color: rgb(68, 68, 68); font-weight: 700;">import</span> {
  <span style="color: rgb(136, 0, 0); font-weight: 700;">Service</span>,
  <span style="color: rgb(136, 0, 0); font-weight: 700;">RequestType</span>,
  <span style="color: rgb(136, 0, 0); font-weight: 700;">TTLType</span>,
  <span style="color: rgb(136, 0, 0); font-weight: 700;">AttributeType</span>,
  <span style="color: rgb(136, 0, 0); font-weight: 700;">ChangeType</span>
} <span style="color: rgb(68, 68, 68); font-weight: 700;">from</span> <span style="color: rgb(136, 0, 0); font-weight: 400;">"@throttr/sdk"</span>;

<span style="color: rgb(68, 68, 68); font-weight: 700;">const</span> service = <span style="color: rgb(68, 68, 68); font-weight: 700;">new</span> <span style="color: rgb(136, 0, 0); font-weight: 700;">Service</span>({
    <span style="color: rgb(68, 68, 68); font-weight: 400;">host</span>: <span style="color: rgb(136, 0, 0); font-weight: 400;">"127.0.0.1"</span>,
    <span style="color: rgb(68, 68, 68); font-weight: 400;">port</span>: <span style="color: rgb(136, 0, 0); font-weight: 400;">9000</span>,
    <span style="color: rgb(68, 68, 68); font-weight: 400;">max_connections</span>: <span style="color: rgb(136, 0, 0); font-weight: 400;">4</span>, <span style="color: rgb(105, 112, 112); font-weight: 400;">// Optional: configure concurrent connections</span>
});

<span style="color: rgb(105, 112, 112); font-weight: 400;">// Define a consumer (example: IP + port, UUID, or custom identifier)</span>
<span style="color: rgb(68, 68, 68); font-weight: 700;">const</span> consumerId = <span style="color: rgb(136, 0, 0); font-weight: 400;">"127.0.0.1:1234"</span>;

<span style="color: rgb(105, 112, 112); font-weight: 400;">// Define a resource (example: METHOD + URL, or any identifier)</span>
<span style="color: rgb(68, 68, 68); font-weight: 700;">const</span> resourceId = <span style="color: rgb(136, 0, 0); font-weight: 400;">"GET /api/resource"</span>;

<span style="color: rgb(105, 112, 112); font-weight: 400;">// Connect to Throttr</span>
<span style="color: rgb(68, 68, 68); font-weight: 700;">await</span> service.<span style="color: rgb(136, 0, 0); font-weight: 700;">connect</span>();

<span style="color: rgb(105, 112, 112); font-weight: 400;">// Insert quota for a consumer-resource pair</span>
<span style="color: rgb(68, 68, 68); font-weight: 700;">const</span> insert_response = <span style="color: rgb(68, 68, 68); font-weight: 700;">await</span> service.<span style="color: rgb(136, 0, 0); font-weight: 700;">send</span>({
    <span style="color: rgb(68, 68, 68); font-weight: 400;">type</span>: <span style="color: rgb(136, 0, 0); font-weight: 700;">RequestType</span>.<span style="color: rgb(68, 68, 68); font-weight: 400;">Insert</span>,
    <span style="color: rgb(68, 68, 68); font-weight: 400;">consumer_id</span>: consumerId,
    <span style="color: rgb(68, 68, 68); font-weight: 400;">resource_id</span>: resourceId,
    <span style="color: rgb(68, 68, 68); font-weight: 400;">quota</span>: <span style="color: rgb(136, 0, 0); font-weight: 700;">BigInt</span>(<span style="color: rgb(136, 0, 0); font-weight: 400;">5</span>),
    <span style="color: rgb(68, 68, 68); font-weight: 400;">usage</span>: <span style="color: rgb(136, 0, 0); font-weight: 700;">BigInt</span>(<span style="color: rgb(136, 0, 0); font-weight: 400;">0</span>),
    <span style="color: rgb(68, 68, 68); font-weight: 400;">ttl_type</span>: <span style="color: rgb(136, 0, 0); font-weight: 700;">TTLType</span>.<span style="color: rgb(68, 68, 68); font-weight: 400;">Milliseconds</span>,
    <span style="color: rgb(68, 68, 68); font-weight: 400;">ttl</span>: <span style="color: rgb(136, 0, 0); font-weight: 700;">BigInt</span>(<span style="color: rgb(136, 0, 0); font-weight: 400;">3000</span>), <span style="color: rgb(105, 112, 112); font-weight: 400;">// 3 seconds</span>
});

<span style="color: rgb(171, 86, 86); font-weight: 400;">console</span>.<span style="color: rgb(136, 0, 0); font-weight: 700;">log</span>(<span style="color: rgb(136, 0, 0); font-weight: 400;">"Allowed:"</span>, insert_response.<span style="color: rgb(68, 68, 68); font-weight: 400;">allowed</span>);
<span style="color: rgb(171, 86, 86); font-weight: 400;">console</span>.<span style="color: rgb(136, 0, 0); font-weight: 700;">log</span>(<span style="color: rgb(136, 0, 0); font-weight: 400;">"Remaining:"</span>, insert_response.<span style="color: rgb(68, 68, 68); font-weight: 400;">quota_remaining</span>);
<span style="color: rgb(171, 86, 86); font-weight: 400;">console</span>.<span style="color: rgb(136, 0, 0); font-weight: 700;">log</span>(<span style="color: rgb(136, 0, 0); font-weight: 400;">"TTL:"</span>, insert_response.<span style="color: rgb(68, 68, 68); font-weight: 400;">ttl_remaining</span>);

<span style="color: rgb(105, 112, 112); font-weight: 400;">// Update the available quota</span>
<span style="color: rgb(68, 68, 68); font-weight: 700;">await</span> service.<span style="color: rgb(136, 0, 0); font-weight: 700;">send</span>({
    <span style="color: rgb(68, 68, 68); font-weight: 400;">type</span>: <span style="color: rgb(136, 0, 0); font-weight: 700;">RequestType</span>.<span style="color: rgb(68, 68, 68); font-weight: 400;">Update</span>,
    <span style="color: rgb(68, 68, 68); font-weight: 400;">attribute</span>: <span style="color: rgb(136, 0, 0); font-weight: 700;">AttributeType</span>.<span style="color: rgb(68, 68, 68); font-weight: 400;">Quota</span>,
    <span style="color: rgb(68, 68, 68); font-weight: 400;">change</span>: <span style="color: rgb(136, 0, 0); font-weight: 700;">ChangeType</span>.<span style="color: rgb(68, 68, 68); font-weight: 400;">Decrease</span>,
    <span style="color: rgb(68, 68, 68); font-weight: 400;">value</span>: <span style="color: rgb(136, 0, 0); font-weight: 700;">BigInt</span>(<span style="color: rgb(136, 0, 0); font-weight: 400;">1</span>),
    <span style="color: rgb(68, 68, 68); font-weight: 400;">consumer_id</span>: consumerId,
    <span style="color: rgb(68, 68, 68); font-weight: 400;">resource_id</span>: resourceId,
});

<span style="color: rgb(105, 112, 112); font-weight: 400;">// Query the available quota</span>
<span style="color: rgb(68, 68, 68); font-weight: 700;">const</span> query_response = <span style="color: rgb(68, 68, 68); font-weight: 700;">await</span> service.<span style="color: rgb(136, 0, 0); font-weight: 700;">send</span>({
    <span style="color: rgb(68, 68, 68); font-weight: 400;">type</span>: <span style="color: rgb(136, 0, 0); font-weight: 700;">RequestType</span>.<span style="color: rgb(68, 68, 68); font-weight: 400;">Query</span>,
    <span style="color: rgb(68, 68, 68); font-weight: 400;">consumer_id</span>: consumerId,
    <span style="color: rgb(68, 68, 68); font-weight: 400;">resource_id</span>: resourceId,
});

<span style="color: rgb(171, 86, 86); font-weight: 400;">console</span>.<span style="color: rgb(136, 0, 0); font-weight: 700;">log</span>(<span style="color: rgb(136, 0, 0); font-weight: 400;">"Allowed:"</span>, query_response.<span style="color: rgb(68, 68, 68); font-weight: 400;">allowed</span>);
<span style="color: rgb(171, 86, 86); font-weight: 400;">console</span>.<span style="color: rgb(136, 0, 0); font-weight: 700;">log</span>(<span style="color: rgb(136, 0, 0); font-weight: 400;">"Remaining:"</span>, query_response.<span style="color: rgb(68, 68, 68); font-weight: 400;">quota_remaining</span>);
<span style="color: rgb(171, 86, 86); font-weight: 400;">console</span>.<span style="color: rgb(136, 0, 0); font-weight: 700;">log</span>(<span style="color: rgb(136, 0, 0); font-weight: 400;">"TTL:"</span>, query_response.<span style="color: rgb(68, 68, 68); font-weight: 400;">ttl_remaining</span>);

<span style="color: rgb(105, 112, 112); font-weight: 400;">// Optionally, purge the quota</span>
<span style="color: rgb(68, 68, 68); font-weight: 700;">await</span> service.<span style="color: rgb(136, 0, 0); font-weight: 700;">send</span>({
    <span style="color: rgb(68, 68, 68); font-weight: 400;">type</span>: <span style="color: rgb(136, 0, 0); font-weight: 700;">RequestType</span>.<span style="color: rgb(68, 68, 68); font-weight: 400;">Purge</span>,
    <span style="color: rgb(68, 68, 68); font-weight: 400;">consumer_id</span>: consumerId,
    <span style="color: rgb(68, 68, 68); font-weight: 400;">resource_id</span>: resourceId,
});

<span style="color: rgb(105, 112, 112); font-weight: 400;">// Disconnect once done</span>
service.<span style="color: rgb(136, 0, 0); font-weight: 700;">disconnect</span>();</pre>


      </div>

      <div v-else-if="implementations[selected].name === 'PHP'" class="overflow-auto p-8 rounded-4xl"
           style="background-color: rgb(243, 243, 243);">

<pre style="font-family:monospace;color: rgb(68, 68, 68); background-color: rgb(243, 243, 243); font-weight: 400; "><span style="color: rgb(31, 113, 153); font-weight: 400;">&lt;?php</span>

<span style="color: rgb(68, 68, 68); font-weight: 700;">require</span> <span style="color: rgb(136, 0, 0); font-weight: 400;">'vendor/autoload.php'</span>;

<span style="color: rgb(68, 68, 68); font-weight: 700;">use</span> <span style="color: rgb(136, 0, 0); font-weight: 700;">Throttr</span>\<span style="color: rgb(136, 0, 0); font-weight: 700;">SDK</span>\<span style="color: rgb(136, 0, 0); font-weight: 700;">Service</span>;
<span style="color: rgb(68, 68, 68); font-weight: 700;">use</span> <span style="color: rgb(136, 0, 0); font-weight: 700;">Throttr</span>\<span style="color: rgb(136, 0, 0); font-weight: 700;">SDK</span>\<span style="color: rgb(136, 0, 0); font-weight: 700;">Enum</span>\<span style="color: rgb(136, 0, 0); font-weight: 700;">TTLType</span>;

<span style="color: rgb(105, 112, 112); font-weight: 400;">// Configure your instance with 4 connections ...</span>
<span style="color: rgb(171, 86, 86); font-weight: 400;">$service</span> = <span style="color: rgb(68, 68, 68); font-weight: 700;">new</span> <span style="color: rgb(136, 0, 0); font-weight: 700;">Service</span>(<span style="color: rgb(136, 0, 0); font-weight: 400;">'127.0.0.1'</span>, <span style="color: rgb(136, 0, 0); font-weight: 400;">9000</span>, <span style="color: rgb(136, 0, 0); font-weight: 400;">4</span>);

<span style="color: rgb(105, 112, 112); font-weight: 400;">// Define a consumer ... it can be an IP and port or UUID, whatever ...</span>
<span style="color: rgb(171, 86, 86); font-weight: 400;">$consumerId</span> = <span style="color: rgb(136, 0, 0); font-weight: 400;">"127.0.0.1"</span>;

<span style="color: rgb(105, 112, 112); font-weight: 400;">// Define the resource ... it can be a METHOD + URL or UUID, whatever ...</span>
<span style="color: rgb(171, 86, 86); font-weight: 400;">$resourceId</span> = <span style="color: rgb(136, 0, 0); font-weight: 400;">"/api/resource"</span>;

<span style="color: rgb(105, 112, 112); font-weight: 400;">// Connect to Throttr</span>
<span style="color: rgb(171, 86, 86); font-weight: 400;">$service</span>-&gt;<span style="color: rgb(136, 0, 0); font-weight: 700;">connect</span>();

<span style="color: rgb(105, 112, 112); font-weight: 400;">// Add limit to the registry</span>
<span style="color: rgb(171, 86, 86); font-weight: 400;">$service</span>-&gt;<span style="color: rgb(136, 0, 0); font-weight: 700;">insert</span>(
    <span style="color: rgb(68, 68, 68); font-weight: 400;">consumerId</span>: <span style="color: rgb(171, 86, 86); font-weight: 400;">$consumerId</span>,
    <span style="color: rgb(68, 68, 68); font-weight: 400;">resourceId</span>: <span style="color: rgb(171, 86, 86); font-weight: 400;">$resourceId</span>,
    <span style="color: rgb(68, 68, 68); font-weight: 400;">ttl</span>: <span style="color: rgb(136, 0, 0); font-weight: 400;">3000</span>,
    <span style="color: rgb(68, 68, 68); font-weight: 400;">ttlType</span>: <span style="color: rgb(136, 0, 0); font-weight: 700;">TTLType</span>::<span style="color: rgb(171, 86, 86); font-weight: 400;">MILLISECONDS</span>,
    <span style="color: rgb(68, 68, 68); font-weight: 400;">quota</span>: <span style="color: rgb(136, 0, 0); font-weight: 400;">5</span>,
    <span style="color: rgb(68, 68, 68); font-weight: 400;">usage</span>: <span style="color: rgb(136, 0, 0); font-weight: 400;">0</span>
);

<span style="color: rgb(105, 112, 112); font-weight: 400;">// Do you want to know if that was stored?</span>
<span style="color: rgb(171, 86, 86); font-weight: 400;">$response</span> = <span style="color: rgb(171, 86, 86); font-weight: 400;">$service</span>-&gt;<span style="color: rgb(136, 0, 0); font-weight: 700;">query</span>(
    <span style="color: rgb(68, 68, 68); font-weight: 400;">consumerId</span>: <span style="color: rgb(171, 86, 86); font-weight: 400;">$consumerId</span>,
    <span style="color: rgb(68, 68, 68); font-weight: 400;">resourceId</span>: <span style="color: rgb(171, 86, 86); font-weight: 400;">$resourceId</span>,
);

<span style="color: rgb(136, 0, 0); font-weight: 700;">printf</span>(
    <span style="color: rgb(136, 0, 0); font-weight: 400;">"Allowed: %s, Remaining: %d, TTL: %dms\n"</span>,
    <span style="color: rgb(171, 86, 86); font-weight: 400;">$response</span>-&gt;<span style="color: rgb(136, 0, 0); font-weight: 700;">can</span>() ? <span style="color: rgb(136, 0, 0); font-weight: 400;">'true'</span> : <span style="color: rgb(136, 0, 0); font-weight: 400;">'false'</span>,
    <span style="color: rgb(171, 86, 86); font-weight: 400;">$response</span>-&gt;<span style="color: rgb(136, 0, 0); font-weight: 700;">quotaRemaining</span>() ?? <span style="color: rgb(136, 0, 0); font-weight: 400;">0</span>,
    (<span style="color: rgb(68, 68, 68); font-weight: 700;">int</span>)(<span style="color: rgb(171, 86, 86); font-weight: 400;">$response</span>-&gt;<span style="color: rgb(136, 0, 0); font-weight: 700;">ttlRemainingSeconds</span>() * <span style="color: rgb(136, 0, 0); font-weight: 400;">1000</span>)
);

<span style="color: rgb(105, 112, 112); font-weight: 400;">// Do you want to update the quota?</span>
<span style="color: rgb(171, 86, 86); font-weight: 400;">$service</span>-&gt;<span style="color: rgb(136, 0, 0); font-weight: 700;">update</span>(
    <span style="color: rgb(68, 68, 68); font-weight: 400;">consumerId</span>: <span style="color: rgb(171, 86, 86); font-weight: 400;">$consumerId</span>,
    <span style="color: rgb(68, 68, 68); font-weight: 400;">resourceId</span>: <span style="color: rgb(171, 86, 86); font-weight: 400;">$resourceId</span>,
    <span style="color: rgb(68, 68, 68); font-weight: 400;">attribute</span>: <span style="color: rgb(136, 0, 0); font-weight: 700;">AttributeType</span>::<span style="color: rgb(171, 86, 86); font-weight: 400;">QUOTA</span>,
    <span style="color: rgb(68, 68, 68); font-weight: 400;">change</span>: <span style="color: rgb(136, 0, 0); font-weight: 700;">ChangeType</span>::<span style="color: rgb(171, 86, 86); font-weight: 400;">DECREASE</span>,
    <span style="color: rgb(68, 68, 68); font-weight: 400;">value</span>: <span style="color: rgb(136, 0, 0); font-weight: 400;">1</span>
);

<span style="color: rgb(105, 112, 112); font-weight: 400;">// Do you want to know the new value?</span>
<span style="color: rgb(171, 86, 86); font-weight: 400;">$response</span> = <span style="color: rgb(171, 86, 86); font-weight: 400;">$service</span>-&gt;<span style="color: rgb(136, 0, 0); font-weight: 700;">query</span>(
    <span style="color: rgb(68, 68, 68); font-weight: 400;">consumerId</span>: <span style="color: rgb(171, 86, 86); font-weight: 400;">$consumerId</span>,
    <span style="color: rgb(68, 68, 68); font-weight: 400;">resourceId</span>: <span style="color: rgb(171, 86, 86); font-weight: 400;">$resourceId</span>,
);

<span style="color: rgb(136, 0, 0); font-weight: 700;">printf</span>(
    <span style="color: rgb(136, 0, 0); font-weight: 400;">"Allowed: %s, Remaining: %d, TTL: %dms\n"</span>,
    <span style="color: rgb(171, 86, 86); font-weight: 400;">$response</span>-&gt;<span style="color: rgb(136, 0, 0); font-weight: 700;">can</span>() ? <span style="color: rgb(136, 0, 0); font-weight: 400;">'true'</span> : <span style="color: rgb(136, 0, 0); font-weight: 400;">'false'</span>,
    <span style="color: rgb(171, 86, 86); font-weight: 400;">$response</span>-&gt;<span style="color: rgb(136, 0, 0); font-weight: 700;">quotaRemaining</span>() ?? <span style="color: rgb(136, 0, 0); font-weight: 400;">0</span>,
    (<span style="color: rgb(68, 68, 68); font-weight: 700;">int</span>)(<span style="color: rgb(171, 86, 86); font-weight: 400;">$response</span>-&gt;<span style="color: rgb(136, 0, 0); font-weight: 700;">ttlRemainingSeconds</span>() * <span style="color: rgb(136, 0, 0); font-weight: 400;">1000</span>)
);

<span style="color: rgb(105, 112, 112); font-weight: 400;">// Close the connections ...</span>
<span style="color: rgb(171, 86, 86); font-weight: 400;">$service</span>-&gt;<span style="color: rgb(136, 0, 0); font-weight: 700;">close</span>();</pre>

      </div>

      <div v-else-if="implementations[selected].name === 'Java'" class="overflow-auto p-8 rounded-4xl"
           style="background-color: rgb(243, 243, 243);">
<pre style="font-family:monospace;color: rgb(68, 68, 68); background-color: rgb(243, 243, 243); font-weight: 400; "><span style="color: rgb(68, 68, 68); font-weight: 700;">import</span> cl.throttr.Service;
<span style="color: rgb(68, 68, 68); font-weight: 700;">import</span> cl.throttr.InsertRequest;
<span style="color: rgb(68, 68, 68); font-weight: 700;">import</span> cl.throttr.QueryRequest;
<span style="color: rgb(68, 68, 68); font-weight: 700;">import</span> cl.throttr.UpdateRequest;
<span style="color: rgb(68, 68, 68); font-weight: 700;">import</span> cl.throttr.PurgeRequest;
<span style="color: rgb(68, 68, 68); font-weight: 700;">import</span> cl.throttr.TTLType;
<span style="color: rgb(68, 68, 68); font-weight: 700;">import</span> cl.throttr.AttributeType;
<span style="color: rgb(68, 68, 68); font-weight: 700;">import</span> cl.throttr.ChangeType;
<span style="color: rgb(68, 68, 68); font-weight: 700;">import</span> cl.throttr.FullResponse;
<span style="color: rgb(68, 68, 68); font-weight: 700;">import</span> cl.throttr.SimpleResponse;

<span style="color: rgb(136, 0, 0); font-weight: 400;">Service</span> <span style="color: rgb(171, 86, 86); font-weight: 400;">service</span> <span style="color: rgb(171, 86, 86); font-weight: 400;">=</span> <span style="color: rgb(68, 68, 68); font-weight: 700;">new</span> <span style="color: rgb(136, 0, 0); font-weight: 700;">Service</span>(<span style="color: rgb(136, 0, 0); font-weight: 400;">"127.0.0.1"</span>, <span style="color: rgb(136, 0, 0); font-weight: 400;">9000</span>, <span style="color: rgb(136, 0, 0); font-weight: 400;">4</span>);  <span style="color: rgb(105, 112, 112); font-weight: 400;">// Max connections = 4</span>

<span style="color: rgb(68, 68, 68); font-weight: 700;">try</span> {
  <span style="color: rgb(105, 112, 112); font-weight: 400;">// Connect to Throttr</span>
  service.connect();

  <span style="color: rgb(105, 112, 112); font-weight: 400;">// Define a consumer and resource</span>
  <span style="color: rgb(136, 0, 0); font-weight: 400;">String</span> <span style="color: rgb(171, 86, 86); font-weight: 400;">consumerId</span> <span style="color: rgb(171, 86, 86); font-weight: 400;">=</span> <span style="color: rgb(136, 0, 0); font-weight: 400;">"127.0.0.1:1234"</span>;
  <span style="color: rgb(136, 0, 0); font-weight: 400;">String</span> <span style="color: rgb(171, 86, 86); font-weight: 400;">resourceId</span> <span style="color: rgb(171, 86, 86); font-weight: 400;">=</span> <span style="color: rgb(136, 0, 0); font-weight: 400;">"GET /api/resource"</span>;

  <span style="color: rgb(105, 112, 112); font-weight: 400;">// Insert quota</span>
  CompletableFuture&lt;Object&gt; insertFuture = service.send(<span style="color: rgb(68, 68, 68); font-weight: 700;">new</span> <span style="color: rgb(136, 0, 0); font-weight: 700;">InsertRequest</span>(
      <span style="color: rgb(136, 0, 0); font-weight: 400;">5L</span>, <span style="color: rgb(136, 0, 0); font-weight: 400;">0L</span>, TTLType.Milliseconds, <span style="color: rgb(136, 0, 0); font-weight: 400;">3000L</span>, consumerId, resourceId));
  <span style="color: rgb(136, 0, 0); font-weight: 400;">FullResponse</span> <span style="color: rgb(171, 86, 86); font-weight: 400;">insertResponse</span> <span style="color: rgb(171, 86, 86); font-weight: 400;">=</span> (FullResponse)insertFuture.get();

  System.out.println(<span style="color: rgb(136, 0, 0); font-weight: 400;">"Allowed: "</span> + insertResponse.allowed());
  System.out.println(<span style="color: rgb(136, 0, 0); font-weight: 400;">"Remaining: "</span> + insertResponse.quotaRemaining());
  System.out.println(<span style="color: rgb(136, 0, 0); font-weight: 400;">"TTL type: "</span> + insertResponse.ttlType());
  System.out.println(<span style="color: rgb(136, 0, 0); font-weight: 400;">"TTL remaining: "</span> + insertResponse.ttlRemaining());

  <span style="color: rgb(105, 112, 112); font-weight: 400;">// Update the quota</span>
  CompletableFuture&lt;Object&gt; updateFuture = service.send(<span style="color: rgb(68, 68, 68); font-weight: 700;">new</span> <span style="color: rgb(136, 0, 0); font-weight: 700;">UpdateRequest</span>(
      AttributeType.QUOTA, ChangeType.DECREASE, <span style="color: rgb(136, 0, 0); font-weight: 400;">1L</span>, consumerId, resourceId));
  <span style="color: rgb(136, 0, 0); font-weight: 400;">SimpleResponse</span> <span style="color: rgb(171, 86, 86); font-weight: 400;">updateResponse</span> <span style="color: rgb(171, 86, 86); font-weight: 400;">=</span> (SimpleResponse)updateFuture.get();
  System.out.println(<span style="color: rgb(136, 0, 0); font-weight: 400;">"Quota updated successfully: "</span> + updateResponse.success());

  <span style="color: rgb(105, 112, 112); font-weight: 400;">// Query the quota</span>
  CompletableFuture&lt;Object&gt; queryFuture =
      service.send(<span style="color: rgb(68, 68, 68); font-weight: 700;">new</span> <span style="color: rgb(136, 0, 0); font-weight: 700;">QueryRequest</span>(consumerId, resourceId));
  <span style="color: rgb(136, 0, 0); font-weight: 400;">FullResponse</span> <span style="color: rgb(171, 86, 86); font-weight: 400;">queryResponse</span> <span style="color: rgb(171, 86, 86); font-weight: 400;">=</span> (FullResponse)queryFuture.get();

  System.out.println(<span style="color: rgb(136, 0, 0); font-weight: 400;">"Allowed after update: "</span> + queryResponse.allowed());
  System.out.println(<span style="color: rgb(136, 0, 0); font-weight: 400;">"Remaining after update: "</span> +
                     queryResponse.quotaRemaining());
  System.out.println(<span style="color: rgb(136, 0, 0); font-weight: 400;">"TTL type: "</span> + queryResponse.ttlType());
  System.out.println(<span style="color: rgb(136, 0, 0); font-weight: 400;">"TTL after update: "</span> + queryResponse.ttlRemaining());

  <span style="color: rgb(105, 112, 112); font-weight: 400;">// Optionally, purge the quota</span>
  CompletableFuture&lt;Object&gt; purgeFuture =
      service.send(<span style="color: rgb(68, 68, 68); font-weight: 700;">new</span> <span style="color: rgb(136, 0, 0); font-weight: 700;">PurgeRequest</span>(consumerId, resourceId));
  <span style="color: rgb(136, 0, 0); font-weight: 400;">SimpleResponse</span> <span style="color: rgb(171, 86, 86); font-weight: 400;">purgeResponse</span> <span style="color: rgb(171, 86, 86); font-weight: 400;">=</span> (SimpleResponse)purgeFuture.get();
  System.out.println(<span style="color: rgb(136, 0, 0); font-weight: 400;">"Purge success: "</span> + purgeResponse.success());

} <span style="color: rgb(68, 68, 68); font-weight: 700;">catch</span> (Exception e) {
  e.printStackTrace();
} <span style="color: rgb(68, 68, 68); font-weight: 700;">finally</span> {
  <span style="color: rgb(105, 112, 112); font-weight: 400;">// Disconnect once done</span>
  service.close();
}</pre>

      </div>

      <div class="mt-10">
        <a
            :href="implementations[selected].source"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:underline p-4 mb-10"
        >
          <img :src="isDark ? '/github-mark-white.svg' : '/github-mark.svg'" alt="GitHub"
               class="h-8 -mt-2 mr-4 inline-block">
          Are you ready? Get the code.
        </a>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {useDark} from '@vueuse/core'

const isDark = useDark()

const languages = ['TypeScript', 'PHP', 'Java']
// @ts-ignore
const selected = ref(0)

const implementations = ref([
  {
    source: 'https://github.com/throttr/typescript',
    name: "TypeScript",
    code: '',
    icon: 'devicon-typescript-plain',
  },
  {
    source: 'https://github.com/throttr/php',
    name: "PHP",
    code: '',
    icon: 'devicon-php-plain',
  },
  {
    source: 'https://github.com/throttr/java',
    name: "Java",
    code: '',
    icon: 'devicon-java-plain',
  }
])
</script>

<style scoped>
/* Nada adicional. Padding ya aplicado inline */
</style>