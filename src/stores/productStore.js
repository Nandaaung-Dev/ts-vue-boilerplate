import { defineStore } from "pinia";
import products from "@/data/products.json";
export const useProductStore = defineStore("product", {
  state: () => ({
    products,
  }),
  actions: {
    addProduct(product) {
      const productCopy = { ...product };
      this.products.push(productCopy);
    },
  },
});
