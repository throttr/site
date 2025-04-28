<script setup lang="ts">
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Protocol from "./components/Protocol.vue";
import Example from "./components/Example.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Hero />
  <About />
  <Protocol />
  <Example />
  <Footer />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
