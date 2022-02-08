<template>
  <div>
    Home
    {{ session }}
    {{ session.user }}
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      session: (state) => state,
    }),
  },
};
</script>

<style></style>
