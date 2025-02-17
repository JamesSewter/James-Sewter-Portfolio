const app = Vue.createApp({
    data() {
      return {
        premium: true,
      };
    },
    methods: {
        /* example */
      updateCart(id) {
        this.cart.push(id);
      }
    },
  });