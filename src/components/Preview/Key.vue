<script setup lang="ts">
type Props = {
  position: [number, number, number];
  rotation: [number, number, number];
  color?:string
};

defineProps<Props>();
</script>

<template>
  <TresMesh :position="position" :rotation="rotation">
    <TresBoxGeometry :args="[14, 1, 14]" />
    <TresMeshStandardMaterial :color="color??'#010101'" />
  </TresMesh>
</template>
