<template>
  <div>
    <date-picker></date-picker>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "home",
  components: {
    DatePicker: () => ({
      component: import("./components/DatePicker.vue"),
    }),
  },
  computed: {
    ...mapState({
      session: (state) => state,
    }),
  },
};
</script>

<style></style>
