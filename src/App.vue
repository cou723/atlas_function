<script setup lang="ts">
import Preview from "./components/Preview/index.vue";
import { func } from "./libs/function";
import type { Input } from "./types/input";

const output = func({} as Input);
</script>

<template>
  <Preview :output="output" />
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
