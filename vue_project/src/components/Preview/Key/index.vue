<script setup lang="ts">
import type { Vectors } from "@common/types/output";
import Key from "./core.vue";

type Props = {
  rowVectors: Vectors;
  keyVectors: Vectors;
};

defineProps<Props>();
</script>

<template>
  <Key
    :position="rowVectors.pos.add(keyVectors.pos).toVector3().toArray()"
    :rotation="rowVectors.dir.add(keyVectors.dir).toVector3().toArray()"
  />
</template>
