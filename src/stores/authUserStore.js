import { defineStore } from "pinia";

export const useAuthUserStore = defineStore("authuser", {
  state: () => {
    return {
      username: "Alice",
    };
  },
  getters: {
    length: (state) => state.username.length,
  },
  actions: {
    showAlert: (name) => {
      alert(`Hello ${name}`);
    },
  },
});
