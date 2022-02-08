<template>
  <v-row justify="center">
    <v-menu
      ref="menu1"
      v-model="menu1"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
    >
      <template v-slot:activator="{}">
        <v-card
          class="my-4"
          @click="menu1 = !menu1"
          min-width="auto"
          width="300"
        >
          <v-card-title class="d-flex justify-center">
            {{ today }}
          </v-card-title>
          <v-card-text class="d-flex justify-center">
            {{ day }}
          </v-card-text>
        </v-card>
      </template>
      <v-date-picker
        class="my-4"
        v-model="date"
        no-title
        locale="pt-br"
        @input="menu1 = false"
        :max="maxDate"
      ></v-date-picker>
    </v-menu>
  </v-row>
</template>

<script>
export default {
  name: "datepicker",
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu1: false,
  }),
  computed: {
    today: function () {
      let [ano, mes, dia] = this.date.split("-");
      return `${dia}/${mes}/${ano}`;
    },
    day: function () {
      let [ano, mes, dia] = this.date.split("-");
      let day = new Date(ano, mes, dia).toLocaleString("pt-BR", {
        weekday: "long",
      });

      return day.charAt(0).toUpperCase() + day.slice(1);
    },
    maxDate: function () {
      return new Date().toISOString().substr(0, 10);
    },
  },
};
</script>

<style></style>
