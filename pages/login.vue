<template>
  <div class="login-container">
    <h1>login</h1>
    <nuxt-link to="/">
      home
    </nuxt-link>
  </div>
</template>

<script>
import { fetchList } from '~/api/home';
export default {
  layout: 'customize',
  name: 'Login',
  components: {},
  async asyncData(context) {
    let [res2] = await Promise.all([
      // 获取数据
      // context.$axios
      //   .post('/mall/activity', {
      //     pageIndex: 1,
      //     pageSize: 20,
      //     type: 'PROMO'
      //   })
      //   .then((res) => {
      //     console.log('这是nuxt--axios');
      //     return res;
      //   }),
      // 获取数据
      fetchList({
        pageIndex: 1,
        pageSize: 20,
        type: 'PROMO'
      }).then((res) => {
        console.log('这是axios');
        return res;
      })
    ]);
    return {
      friendList: res2.data
    };
  },
  data() {
    return {};
  },
  // SEO优化
  watch: {},
  created() {},
  mounted() {},
  methods: {},
  head() {
    return {
      title: '药兜网-登录',
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            '很多登录登录登录登录登录登录登录登录登录登录登录登录登录登录登录登录登录登录'
        },
        {
          hid: 'description',
          name: 'description',
          content:
            '很多登录登录登录登录登录登录登录登录登录登录登录登录登录登录登录登录登录登录'
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.login-container {
  text-align: center;
  line-height: 100px;
}
</style>
