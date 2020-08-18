<template>
  <div class="login-container">
    <h1>login</h1>
    <nuxt-link to="/">home</nuxt-link>
  </div>
</template>

<script>
export default {
  layout: "customize",
  name: "Login",
  components: {},
  // SEO优化
  head() {
    return {
      title: "药兜网-登录",
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content: "很多登录登录登录登录登录登录登录登录登录登录登录登录登录登录登录登录登录登录",
        },
        {
          hid: "description",
          name: "description",
          content: "很多登录登录登录登录登录登录登录登录登录登录登录登录登录登录登录登录登录登录",
        },
      ],
    };
  },
  data() {
    return {};
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.login-container {
  text-align: center;
  line-height: 100px;
}
</style>
