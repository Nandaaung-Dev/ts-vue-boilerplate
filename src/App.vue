<script setup>
import { useProductStore } from "@/stores/productStore";
import { useAuthUserStore } from "@/stores/authUserStore"
import { storeToRefs } from "pinia";

const { username } = storeToRefs(useAuthUserStore())

const { products } = storeToRefs(useProductStore());
</script>

<template>
  <pre>{{ products }}</pre>
  <pre>{{ username }}</pre>
</template>
