<script setup lang="ts">
import { keySize, keySubColor } from "@common/constant";

type Props = {
  position: [number, number, number];
  rotation: [number, number, number];
  color?: string;
};

defineProps<Props>();
</script>

<template>
  <TresMesh :position="position" :rotation="rotation">
    <TresBoxGeometry :args="[keySize, 1, keySize]" />
    <TresMeshStandardMaterial :color="color ?? keySubColor" />
  </TresMesh>
</template>
