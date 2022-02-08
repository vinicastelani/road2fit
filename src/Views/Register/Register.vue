<template>
  <div class="my-auto">
    <form-register></form-register>
  </div>
</template>

<script>
export default {
  name: "register",
  components: {
    FormRegister: () => ({
      component: import("./components/Form.vue"),
    }),
  },
};
</script>

<style></style>
