<template>
  <v-card outlined class="form-login mx-auto py-5" max-width="481">
    <v-card-title>
      <v-row align="center" class="mx-0"> Entrar: </v-row>
    </v-card-title>
    <v-card-text class="my-4">
      <v-row align="center" class="mx-0">
        <v-text-field
          label="E-mail"
          v-model="email"
          outlined
          dense
        ></v-text-field>
      </v-row>
      <v-row align="center" class="mx-0">
        <v-text-field
          label="Senha"
          v-model="password"
          outlined
          dense
        ></v-text-field>
      </v-row>
    </v-card-text>
    <v-card-actions class="py-0 d-flex justify-end">
      <v-card-text class="py-0">
        <router-link to="/register"
          >Não tem uma conta? Cadastre-se
        </router-link>
      </v-card-text>
      <v-btn color="green" text @click="login"> Enviar </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import AuthController from "@/services/AuthController.js";
import { mapMutations } from "vuex";
export default {
  name: "formregister",
  data: () => ({
    email: "visacastelani@gmail.com",
    password: "@Vini110297",
  }),
  computed: {
    form: function () {
      return {
        email: this.email,
        password: this.password,
      };
    },
  },
  methods: {
    ...mapMutations(["updateUser"]),
    login: async function () {
      const params = this.form;
      await AuthController.login(params)
        .then((res) => {
          const { user, token } = res;
          this.updateUser({ user, token });
        })
        .catch((err) => err);
    },
  },
};
</script>

<style>
.form-login {
  position: relative;
  opacity: 0.9;
}
.form-login:before {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background: url("../../../assets/jogging.png");
  background-position: center 35%;
  z-index: -1;
}
</style>
