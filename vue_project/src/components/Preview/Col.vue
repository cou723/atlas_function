<script setup lang="ts">
import type { Col } from "@common/types/output";
import Key from "./Key/index.vue";

type Props = {
  col: Col;
};

defineProps<Props>();
</script>

<template>
  <Key :rowVectors="col.homeRowVector" :keyVectors="col.perRow.numRow" />
  <Key :rowVectors="col.homeRowVector" :keyVectors="col.perRow.upper" />
  <Key :rowVectors="col.homeRowVector" :keyVectors="col.perRow.home" />
  <Key :rowVectors="col.homeRowVector" :keyVectors="col.perRow.bottom" />
</template>
