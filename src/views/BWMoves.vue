<template>
  <section class="moves-page">
      <h2>Your Last Moves:</h2>
    <MoveList :moves="user.moves" />
  </section>
</template>

<script>
import MoveList from "../components/MoveList.vue";
export default {
  components: {
    MoveList,
  },

  computed: {
    user() {
        return this.$store.getters.user;
    //   const user = this.$store.getters.user;
    //   console.log("user in moves", user);
    },
  },
};
</script>

<style>
</style>