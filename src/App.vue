<template>
  <v-app>
    <v-main>
      <loading></loading>
      <v-snackbar v-model="message.show" :color="message.color" :timeout="5000">
        {{ message.text }}
      </v-snackbar>

      <navigation-drawer :drawer="drawer"></navigation-drawer>
      <v-container>
        <div id="app">
          <router-view />
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    Loading: () => ({
      component: import("./Components/Loading/Loading.vue"),
    }),
    NavigationDrawer: () => ({
      component: import("./Components/NavigationDrawer/NavigationDrawer.vue"),
    }),
  },
  data: () => ({
    drawer: false,
  }),
  computed: {
    ...mapState({
      message: (state) => state.message,
      session: (state) => state.session,
    }),
  },
  methods: {},
};
</script>

<style>
::-webkit-scrollbar {
  display: none; /* Hide scrollbars */
}
a {
  text-decoration: none;
}
</style>
