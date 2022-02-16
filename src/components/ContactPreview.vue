<template>
  <section class="contact-preview flex">
    <div class="flex align-center">
      <img src="@/assets/imgs/1.png" alt="" />
      <p class="name-preview">{{ contact.name }}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    contact: Object,
  },
};
</script>

<style>
</style>