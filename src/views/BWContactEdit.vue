<template>
  <section class="contact-edit">
    <di>
    <h2>{{ pageTitle }}</h2>
    </di>
    <form
      v-if="contactToEdit"
      @submit.prevent="save"
      class="flex column align-center" >
      <input
       v-model="contactToEdit.name"
        type="text"
         placeholder="Name" />
      <input
        v-model="contactToEdit.phone"
        type="text"
        placeholder="Phone Number"
      />
      <input 
      v-model="contactToEdit.email"
       type="email" 
       placeholder="email" />
      <button>Save</button>
    </form>
  
  </section>
</template>

<script>
import contactService from "../services/contactService.service";
export default {
  data() {
    return {
      contactToEdit: null,
    };
  },
  async created() {
    const { id } = this.$route.params;
    this.contactToEdit = id
      ? await contactService.getById(id)
      : contactService.getEmptyContact();
  },
  methods: {
    async save() {
      await this.$store.dispatch({ type: 'saveContact', contact: this.contactToEdit });
      this.$router.push("/bitwall");
    },
  },
  computed: {
    pageTitle() {
      const { id } = this.$route.params;
      return id ? "Edit Contact" : "Add Contact";
    },
  },
};
</script>

<style>
</style>