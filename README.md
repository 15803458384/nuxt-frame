# ydw-nuxt

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# 打包生产环境
$ npm run prod

# 打包预发布环境
$ npm run release

# 打包测试布环境
$ npm run test

# generate static project
$ npm run generate

```
## seo配置
```javascript
// SEO优化
  head() {
    return {
      title: "标题",
      meta: [
        {
          hid: 'keywords',
          name: "keywords",
          content: "很多个很多个关键词很多个很多个关键词很多个很多个关键词",
        },
        {
          hid: 'description',
          name: "description",
          content: "很多个很多个关键词很多个很多个关键词很多个很多个关键词",
        },
      ],
    };
  },
```
## 请求方式
```javascript
// 引入请求方法
import { fetchList } from "~/api/home";
// 调用  
fetchList({
    pageIndex: 1,
    pageSize: 20,
    type: "入参",
}).then((res) => {
    //返回值
    console.log("这是axios");
})

```
For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
