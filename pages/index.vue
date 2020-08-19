<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        ydw-nuxt
      </h1>
      <h1> {{ value }} </h1>
      <h1> {{ result }} </h1>

      <div class="links">
        <el-button type="warning" @click="change">
          点击
        </el-button>
      </div>
      <el-carousel height="150px">
        <el-carousel-item v-for="item in picList" :key="item.id">
          <img :src="item.url" alt="">
        </el-carousel-item>
      </el-carousel>
      <div class="box-bg" />
      <nuxt-link to="/home">
        home
      </nuxt-link>
      <nuxt-link to="/home/store">
        store
      </nuxt-link>
      <nuxt-link to="/login">
        login
      </nuxt-link>
      <img style="width:150px;" src="../assets/img/p2326219915.jpg" alt="">
      <img style="width:150px;" src="../assets/img/p2404647190.jpg" alt="">
      <i class="iconfont icon-tianjiayonghu" style="font-size: 28px;" />
      <i class="iconfont icon-Prompt" style="font-size: 28px;" />
      <i class="iconfont icon-tianjiayonghu" style="font-size: 28px;" />
      <i class="iconfont icon-tianjiayonghu" style="font-size: 28px;" />
      <i class="iconfont icon-biaoxing" style="font-size: 28px;color: hotpink;" />
      <i class="iconfont icon-tianjiayonghu" style="font-size: 28px;" />
      <i class="iconfont icon-tianjiayonghu" style="font-size: 28px;" />
      <i class="iconfont icon-tongzhifill" style="font-size: 28px;color: hotpink;" />
      <i class="iconfont icon-tianjiayonghu" style="font-size: 28px;" />
      <i class="iconfont icon-shizhong" style="font-size: 28px;" />
      <div v-for="item in friendList" :key="item.productId">
        {{ item.productName }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
import { fetchList } from '~/api/home';
export default {
  async asyncData(context) {
    let [res1, res2] = await Promise.all([
      // 获取数据
      context.$axios
        .post('/mall/activity', {
          pageIndex: 1,
          pageSize: 20,
          type: 'PROMO'
        })
        .then((res) => {
          console.log('这是nuxt--axios');
          return res;
        }),
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
      blogList: res1.data,
      blogTotal: res1.total * 1,
      friendList: res2.data
    };
  },
  data() {
    return {
      picList: [
        {
          id: 0,
          url: require('../assets/img/p2326219915.jpg')
        },
        { id: 1, url: require('../assets/img/p2404647190.jpg') },
        {
          id: 2,
          url: require('../assets/img/51022baaa2f66e163903a760b9bf6536.jpg')
        },
        { id: 3, url: require('../assets/img/p1065200694.jpg') }
      ],
      // 列表数据
      blogList: [],
      // 总条数
      blogTotal: 0,
      // 数据
      friendList: [],
      result: 0
    };
  },
  computed: {
    ...mapGetters('user', ['include']),
    ...mapState('user', {
      value: (state) => state.value
    })
  },
  mounted() {
    // this.getList();
  },
  methods: {
    getList() {
      fetchList({
        pageIndex: 1,
        pageSize: 20,
        type: 'PROMO'
      }).then((res) => {
        console.log('这是mounted');
      });
    },
    ...mapActions('user', ['getInfo']),
    ...mapMutations('user', ['SET_VALUE']),
    async change() {
      await this.getInfo('Hello ydw');
      this.result = this.include(2);
      // this.SET_VALUE('Hello ydmm')
      this.$message({
        message: '操作成功',
        type: 'success',
        duration: 1500
      });
    }
  },
  // SEO优化
  head() {
    return {
      title: '药兜网',
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: '很多个很多个关键词很多个很多个关键词很多个很多个关键词'
        },
        {
          hid: 'description',
          name: 'description',
          content: '很多个很多个关键词很多个很多个关键词很多个很多个关键词'
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.el-carousel__item img {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.box-bg {
  height: 300px;
  background: url('../assets/img/p2326219915.jpg');
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
