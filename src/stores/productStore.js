import { defineStore } from "pinia";
import products from '@/data/products.json'
export const useProductStore = defineStore('product', {
    state: () => ({
        products
    }),
    actions: {
        addProduct(product) {
            this.products.push(product);
        },
    },
 });