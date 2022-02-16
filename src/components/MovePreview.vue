<template>
  <section class="move-preview flex">
    <div v-if="move" class="flex align-center">
      <p class="p-preview">To: {{ move.to }}</p>
      <p class="p-preview">Date: {{ move.at }} </p>
      <p class="p-preview">Amount: {{ move.amount }}🪙 coins </p>
    </div>
    <div v-else>Loading...</div>
  </section>
</template>

<script>
export default {
  props: {
    move: Object,
  },
};
</script>

<style>
</style>