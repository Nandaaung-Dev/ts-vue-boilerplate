<template>
  <div>
    <!-- <input type="text" v-model="user">
    <pre @click="showAlert(user)">{{ user }}-{{ usernameOfLength }}</pre> -->
    <RouterView></RouterView>
  </div>
</template>

<script>
import { useAuthUserStore } from "@/stores/authUserStore"
import { mapWritableState, mapActions, mapState } from "pinia";
import { RouterView } from "vue-router";
export default {
  computed: {
    ...mapWritableState(useAuthUserStore, {
      user: 'username'
    }),
    ...mapState(useAuthUserStore, {
      usernameOfLength: 'length'
    })
  },
  methods: {
    ...mapActions(useAuthUserStore, ["showAlert"])
  }
}
</script>

<style lang="scss" scoped></style>
