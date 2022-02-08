<template>
  <div>
    <v-app-bar color="blue" dense>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        v-if="session.user.name"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item>
          <v-list-item-title>
            Bem vindo, {{ session.user.name }}!
          </v-list-item-title>
        </v-list-item>

        <v-list-item-group>
          <v-list-item @click="handleLogout">
            <v-list-item-icon>
              <v-icon v-text="'mdi-flag'"></v-icon>
            </v-list-item-icon>
            <v-list-item-title>Logout </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "navigationdrawer",

  data: () => ({
    drawer: false,
  }),
  computed: {
    ...mapState({
      session: (state) => state.session,
    }),
    boolean: {
      get() {
        return this.drawer;
      },
      set(bool) {
        return bool;
      },
    },
  },
  methods: {
    ...mapMutations(["updateUser"]),
    handleLogout: function () {
      this.updateUser({ user: false, token: "" });
    },
  },
};
</script>
