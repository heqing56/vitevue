import { defineStore } from "pinia";

// option api
export const useOptionStore = defineStore("user", {
  state: () => {
    return {
      // 所有这些属性都将自动推断其类型
      counter: 4,
    };
  },
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    }
  },
});
