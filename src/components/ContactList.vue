<template>
  <section class="contact-list">
    <ul class=" contact-list-ul clean-list flex column align-center just space-between">
      <li class="contact-list-li flex" v-for="contact in contacts" :key="contact._id" >
        <ContactPreview :contact="contact" />
        <div class="actions">
          <RouterLink   class="btn-link clean-link" :to="`/pay/${contact._id}`"><img src="../assets/imgs/icon/pay-icon.png" alt=""></RouterLink>
          <RouterLink   class="btn-link clean-link" :to="`/contact/${contact._id}`"><img src="../assets/imgs/icon/details-icon.png" alt=""></RouterLink>
          <button  @click="remove(contact._id)"><img src="../assets/imgs/icon/delete-icon.png" alt=""></button>
          
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import ContactPreview from "./ContactPreview.vue";
export default {
  props: {
    contacts: Array,
  },
  components: {
    ContactPreview,
  },
  data(){
      return{
              shownActions: false,
      }
  },
  methods: {
    remove(id) {
      this.$emit("remove", id);
    },
  },
};
</script>
<!-- v-if="shownActions" -->
<!-- @mouseover="shownActions = !shownActions" -->
<style>
</style>