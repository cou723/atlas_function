<script setup lang="ts">
import type { Col } from "../../../../common/types/output";
import Key from "./Key.vue";

type Props = {
  col: Col;
};

defineProps<Props>();
</script>

<template>
  <Key
    :position="col.homeRowVector.pos.add(col.perRow.numRow.pos).toVector3().toArray()"
    :rotation="col.homeRowVector.dir.add(col.perRow.numRow.dir).toVector3().toArray()"
  />
  <Key
    :position="col.homeRowVector.pos.add(col.perRow.upper.pos).toVector3().toArray()"
    :rotation="col.homeRowVector.dir.add(col.perRow.upper.dir).toVector3().toArray()"
  />
  <Key
    :position="col.homeRowVector.pos.add(col.perRow.home.pos).toVector3().toArray()"
    :rotation="col.homeRowVector.dir.add(col.perRow.home.dir).toVector3().toArray()"
    color="#090909"
  />
  <Key
    :position="col.homeRowVector.pos.add(col.perRow.bottom.pos).toVector3().toArray()"
    :rotation="col.homeRowVector.dir.add(col.perRow.bottom.dir).toVector3().toArray()"
  />
</template>
