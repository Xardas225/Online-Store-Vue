<template>
  <v-container>
    <h3 class="profile__title text-h4">Профиль</h3>
    <v-row>
      <v-col>
        <v-card class="profile__card" max-width="400" min-height="300">
          <v-container>
            <v-row>
              <v-col cols="6">
                <img
                  class="profile__img"
                  :src="require(`../assets/images/squirrel.jpg`)"
                />
              </v-col>
              <v-col cols="6" class="profile__bio">
                {{ name }}
              </v-col>
            </v-row>
            <v-row class="profile__desc">
              <v-col cols="12"> Email: {{ email }} </v-col>
              <v-col cols="12"> Phone: {{ phone }} </v-col>
              <v-col cols="12"> City: {{ city }} </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="profile__card" min-height="300">
          <v-container>
            <v-card-title class="text-h5">История покупок</v-card-title>
            <v-row v-if="!buy.length">
              Покупок нет
            </v-row>
            <v-row v-else>

            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "v-profile",
  components: {},
  data() {
    return {
      name: "Александр",
      email: "alexanderderevkov@yandex.ru",
      phone: "89223149134",
      city: "Волжский",
      buy: []
    };
  },
};
</script>

<style lang="scss" scoped>
.profile__title {
  text-align: left;
}
.profile__card {
  margin-top: 20px;
}
.profile__img {
  height: 100px;
  width: 100px;
  border-radius: 50%;
}
.profile__bio {
  text-align: left;
  font-weight: 600;
  font-size: 20px;
}
.profile__desc {
  text-align: left;
  color: rgb(86, 86, 88);
  font-size: 16px;
}
</style>
