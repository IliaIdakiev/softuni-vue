<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      test2: 'Test2',
      user: null
    };
  },
  computed: {
    textLength() {
      return this.text.length;
    }
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
  }
}
</script>
