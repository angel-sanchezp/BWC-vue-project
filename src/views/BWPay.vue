<template>
  <section
    v-if="contact"
    class="pay-page flex column align-center space-around"
  >
    <h3>Transfer To:</h3>
    <div class="img-container">
      <img src="../assets/imgs/1.png" alt="" />
    </div>
    <div class="contact-details-container">
      <p>{{ contact.name }}</p>
    </div>

    <form @submit.prevent="transfer" class="flex column align-center">
      <input v-model="amount" type="number" placeholder="amount" />
      <button>Transer</button>
    </form>
  </section>
</template>

<script>
import contactService from "../services/contactService.service";
export default {
  data() {
    return {
      contact: null,
      amount: null,
      transferToSave: null,
    };
  },
  async created() {
    const { id } = this.$route.params;
    this.contact = await contactService.getById(id);
  },
  methods: {
    async transfer() {
      await this.$store.dispatch({
        type: "saveTransfer",
        transfer: this.transferDetails,
      });
      this.$router.push("/bitwall");
    },
  },
  computed: {
    transferDetails() {
       return {
        toId: this.contact._id,
        to: this.contact.name,
        at: Date.now(),
        amount: this.amount,
      };
    },
    user() {
      return this.$store.getters.user;
    },
  },
};
</script>

<style>
</style>