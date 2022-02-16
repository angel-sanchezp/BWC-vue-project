<template f>
  <section class="move-list">
    <ul
      class="
        contact-list-ul
        clean-list
        flex
        column
        align-center
        just
        space-between
      "
    >
      <li class="move-list-li flex " v-for="move in moves" :key="move.toId">
        <MovePreview :move="move" />
      </li>
    </ul>
  </section>
</template>

<script>
import MovePreview from "./MovePreview.vue";
export default {
  props: {
    moves: Array,
  },
  created() {
    console.log("moves", this.moves);
  },
  components: {
    MovePreview,
  },
};
</script>
<!-- v-if="shownActions" -->
<!-- @mouseover="shownActions = !shownActions" -->
<style>
</style>