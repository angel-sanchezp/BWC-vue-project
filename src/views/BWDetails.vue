<template>
  <section v-if="contact" class="contact-details flex column align-center space-around">
      <h3>Contact Details</h3>
      <div class="img-container">
      <img src="../assets/imgs/1.png" alt="">
      </div>
      <div class="contact-details-container">
      <p>Name:{{contact.name}}</p>
      <p>Phone:{{contact.phone}}</p>
      <p>Email:{{contact.email}}</p>
      </div>

      <div class="links">
      <RouterLink class="clean-link" to="/bitwall">↜Back</RouterLink>
      <RouterLink class="clean-link" :to="`/contact/edit/${contact._id}`">
      <img src="../assets/imgs/icon/edit-icon.png" alt=""></RouterLink>
      </div>
  </section>
</template>

<script>
import contactService from "../services/contactService.service";
export default {

    data(){
        return{
            contact:null,
        };
    },
    async created(){
        const {id}=this.$route.params
        this.contact= await contactService.getById(id)  
    },

}
</script>

<style>

</style>