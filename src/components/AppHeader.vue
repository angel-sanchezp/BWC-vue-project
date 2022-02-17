 <template>
  <section class="app-header flex justify-center space-between">
    <h1  class="logo" @click="goHome">BCW🪙</h1>
    <nav className="main-nav ">
      <RouterLink class="clean-link linknav-margin-r" activeClassName="my-active" exact to="/" >Home</RouterLink>| 
      <RouterLink class="clean-link linknav-margin-r" exact to="/moves">Moves</RouterLink>|
     <RouterLink class="clean-link linknav-margin-r" exact to="/about">About</RouterLink>|
      <RouterLink class="clean-link" exact to="/graphs">Graphs</RouterLink>
    </nav>
  </section>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

