<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useProductStore } from "@/stores/productStore";
import { useAuthUserStore } from "@/stores/authUserStore"
import { storeToRefs } from "pinia";

// const productStore = useProductStore();

const {username} = storeToRefs(useAuthUserStore())

const { products } = storeToRefs(useProductStore());
</script>

<template>
  <pre>{{ products }}</pre>
  <pre>{{ username }}</pre>
  <!-- <pre>{{ productStore }} </pre> -->
  <!-- <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>

  <RouterView /> -->
</template>
