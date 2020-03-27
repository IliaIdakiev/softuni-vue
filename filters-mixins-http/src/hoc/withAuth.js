const data = {
  user: null
};

export default function (Compoment) {
  return {
    data() {
      return data;
    },
    methods: {
      login(email, password) {
        setTimeout(() => {
          console.log(email, password);
          this.user = { name: 'Ivan' };
        }, 3000);
      },
      logout() {
        setTimeout(() => {
          this.user = null;
        }, 3000);
      }
    },
    render(createElement) {
      const { user, login, logout } = this;
      return createElement(Compoment, { props: { user, login, logout, ...this.$attrs } });
    }
  };
}