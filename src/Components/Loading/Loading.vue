<template>
  <div class="loading_component" v-if="loadingState">
    <img class="loading_spinner" src="../../assets/loading-spinner.gif" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "loading",
  data: () => ({}),
  computed: {
    ...mapState({ loadingState: (state) => state.loadingState }),
  },
};
</script>

<style>
.loading_component {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: rgba(12, 12, 12, 0.5);
}
.loading_spinner {
  position: absolute;
  left: calc(50% - 100px);
  bottom: calc(50% - 50px);
}
</style>
