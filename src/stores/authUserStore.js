import { defineStore } from "pinia";

export const useAuthUserStore = defineStore("authuser", {
  state: () => {
    return {
      username: "Alice",
    };
  },
});
