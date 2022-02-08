<template>
  <v-card outlined class="form-register mx-auto py-5" max-width="481">
    <v-card-title>
      <v-row align="center" class="mx-0"> Cadastre-se: </v-row>
    </v-card-title>
    <v-card-text class="my-4">
      <v-row align="center" class="mx-0">
        <v-text-field label="Nome" v-model="name" outlined dense></v-text-field>
      </v-row>
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
    <v-card-actions class="d-flex justify-end">
      <v-card-text class="py-0">
        <router-link to="/login"> Já tem uma conta? Faça o login </router-link>
      </v-card-text>
      <v-btn color="green" text @click="createNewUser"> Enviar </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import AuthController from "@/services/AuthController.js";

export default {
  name: "formregister",
  data: () => ({
    name: "",
    email: "",
    password: "",
  }),
  computed: {
    form: function () {
      return {
        name: this.name,
        email: this.email,
        password: this.password,
      };
    },
  },
  methods: {
    createNewUser: async function () {
      const params = this.form;
      await AuthController.createNewUser(params)
        .then((res) => res)
        .catch((err) => err);
    },
  },
};
</script>

<style>
.form-register {
  position: relative;
  opacity: 0.9;
}
.form-register:before {
  content: " ";
  display: block;
  position: absolute;
  left: 0;
  top: 0px;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background: url("../../../assets/meditation.png");
  background-position: center;
  z-index: -1;
}
</style>
