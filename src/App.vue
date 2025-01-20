<template>
  <div>
    <input type="text" v-model="username">
    <pre>{{ username }}</pre>
  </div>
</template>

<script>
import { useAuthUserStore } from "@/stores/authUserStore"
import { mapWritableState } from "pinia";
export default {
  computed: {
    ...mapWritableState(useAuthUserStore, ['username'])
  }
}
</script>

<style lang="scss" scoped></style>
