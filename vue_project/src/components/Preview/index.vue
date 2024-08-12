<script setup lang="ts">
import { TresCanvas } from "@tresjs/core";

import type { Output } from "@common/types/output";
import { OrbitControls } from "@tresjs/cientos";
import Col from "./Col.vue";

type Props = {
  output: Output;
};

defineProps<Props>();
</script>

<template>
  <TresCanvas window-size clear-color="#ffffff">
    <OrbitControls />
    <AxesHelper :size="100" />
    <Col :col="output.left.subIndex" />
    <Col :col="output.left.index" />
    <Col :col="output.left.middle" />
    <Col :col="output.left.ring" />
    <Col :col="output.left.little" />
    <Col :col="output.left.subLittle" />
    <TresDirectionalLight :position="[0, 2, 4]" :intensity="1.2" cast-shadow />
  </TresCanvas>
</template>
