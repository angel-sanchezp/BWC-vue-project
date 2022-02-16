
<template>
  <AppHeader />
  <RouterView />
</template>


<script >
import AppHeader from "./components/AppHeader.vue";
// import { RouterLink, RouterView } from 'vue-router'

export default {
  components: {
    AppHeader,
  },
  async created() {
    await this.$store.dispatch({ type: "loadContacts" });
    await this.$store.dispatch({ type: "loadUser" });
  },

};
</script>