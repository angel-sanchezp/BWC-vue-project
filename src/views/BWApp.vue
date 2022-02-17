<template>
  <section class="bitwallet-app">
    <div v-if="user" class="user-details flex align-center column">
      <h3>Welcome {{ user.name }}</h3>
      <h3>💰charged {{ user.coins }} coins</h3>
      <h3>🪙BTC: {{ bitRate }}</h3>
    </div>
    <hr />
    <div class="add-contact">
      <ContactFilter @set-filter="setFilter" />
      <RouterLink class="clean-link" to="/contact/edit">+Add</RouterLink>
      <ContactList :contacts="contactsToShow" @remove="removeContact" />
    </div>
  </section>
</template>

<script>
import ContactList from "../components/ContactList.vue";
import ContactFilter from "@/components/ContactFilter.vue";

import bitcoinService from "../services/bitcoin.Service";

export default {
  components: {
    ContactList,
    ContactFilter,
  },
  data() {
    return {
      bitRate: null,
      filterBy: null,
    };
  },
  async created() {
    console.log('user from store',this.user)
    this.bitRate = await bitcoinService.getRate(this.user.coins);
    console.log(this.bitRate)
  },
  methods: {
    async removeContact(id) {
      try {
        await this.$store.dispatch({ type: "removeContact", id });
      } catch (err) {
        console.log(err);
      }
    },
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    contacts() {
      return this.$store.getters.contacts;
    },
    contactsToShow() {
      if (!this.filterBy) return this.contacts;
      const regex = new RegExp(this.filterBy.name, "i");
      return this.contacts.filter((contact) => regex.test(contact.name));
    },
  },
};
</script>

<style>
</style>