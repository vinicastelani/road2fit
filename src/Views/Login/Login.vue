<template>
  <div class="my-auto">
    <form-login></form-login>
  </div>
</template>

<script>
export default {
  name: "login",
  components: {
    FormLogin: () => ({
      component: import("./components/Form.vue"),
    }),
  },
};
</script>

<style></style>
