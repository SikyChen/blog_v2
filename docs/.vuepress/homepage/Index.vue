<template>
  <!-- 首页 -->
  <div id="left">
    <!-- <img :src="bannerImageUrl"> -->
    <img class="banner" src="./assets/banner.jpeg">
    <div class="logo">
      <div class="welcometo">WELCOME TO</div>
      <div class="logo-name">老白客栈</div>
    </div>
  </div>
  <div id="right">
    <div class="menu">
      <div
        v-for="item in menuList"
        :class="`menu-item ${acitveItemId === item.id && 'menu-item-active'}`"
        @click="handleChangeMenuItem(item.id)"
      >{{item.name}}</div>
    </div>

    <ul v-show="acitveItemId === 'POST'" class="list">
      <li class="list-item" key="1">
        <div class="time">2021年06月20日</div>
        <div class="title" @click="goArticle('12')">如何发布一个NPM包</div>
        <div class="describe">{{'当我们自己写了一个通用的 JavaScript 模块，想要分享出去给别人使用，一般都会把它作为 npm 包发布到官方仓库中，需要使用的时候再通过 npm install xxx 来安装即可。\n那么如何发布一个 npm 包呢？'}}</div>
        <!-- <div class="more-btn"><router-link to="/article/12">more</router-link></div> -->
      </li>
      <li class="list-item" key="2">
        <div class="time">2021-01-02</div>
        <div class="title" @click="goArticle('34')">Roof Party</div>
        <div class="describe">Etsy squid occupy pop-up. Polaroid everyday carry, kogi chillwave tacos raclette heirloom etsy next level cred locavore. Blog street art DIY, pug crucifix asymmetrical chicharrones. Small batch af single-origin.</div>
        <!-- <div class="more-btn"><router-link to="/article/34">more</router-link></div> -->
      </li>
    </ul>

    <div v-show="acitveItemId === 'ABOUT_ME'" class="about_me">
      <div class="avatar_name">
        <div><img class="avatar_image" src="./assets/avatar_1.jpg"></div>
        <div class="info">
          <div class="name">白玉汤</div>
          <div class="describe">老白客栈前台跑堂儿</div>
          <div class="gitee">
            <a href="https://gitee.com/hundredkilo" target="_blank">
              <!-- <img src="./assets/logo-black.svg"> -->
              <img src="./assets/gitee.jpg">
            </a>
          </div>
        </div>
      </div>
      <div class="achievement">
        <div>村口乒乓球联赛小学生组冠军</div>
        <div>中羽二级羽毛球选手</div>
        <div>连续72天叠被子记录保持者</div>
        <div>台铃电动车主</div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

// 左侧banner
// let bannerImageUrl = ref('https://cn.bing.com/th?id=OHR.Neowise_ZH-CN1308687945_1920x1080.jpg&rf=LaDigue_1920x1080.jpg')
let bannerImageUrl = ref('')

// --------------------------
// 顶部菜单
let menuList = ref([
  { name: 'POST', id: 'POST' },
  { name: 'ABOUT ME', id: 'ABOUT_ME' },
])
let acitveItemId = ref('POST')
const handleChangeMenuItem = id => {
  acitveItemId.value = id
}

// 切换到文章页面
const router = useRouter();
const goArticle = id => {
  router.push('/article/' + id)
}
</script>

<style scoped lang="less">
@menu-height: 50px;
#left {
  position: relative;
  height: 100%;
  width: 50%;
  overflow: hidden;
  float: left;
  text-align: center;
  transition: 0.5s;

  .banner {
    max-height: 100vh;
    min-width: 100%;
  }

  .logo {
    position: absolute;
    top: 50vh;
    // left: 2vh;
    width: 100%;
    line-height: 58px;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    transform: translate(0, -80%);
  }
  .logo-name {
    font-size: 52px;
  }
}
@media (max-width: 960px) {
  #left {
    width: 0;
  }
}

#right {
  height: 100%;
  width: 50%;
  float: right;
  display: flex;
  flex-direction: column;
  transition: 0.5s;

  .menu {
    height: @menu-height;
    background-color: #f6f6f6;
    display: flex;
    justify-content: space-evenly;
    
    .menu-item {
      padding: 0 16px;
      height: 100%;
      line-height: @menu-height;
      cursor: pointer;
      box-sizing: border-box;
      transition: 0.3s;
      border-bottom: 2px solid #7b383100;

      &:hover {
        background-color: #eee;
      }
    }
    .menu-item-active {
      border-bottom: 2px solid #7b3931;
    }
  }

  .list {
    flex: 1;

    .list-item {
      box-sizing: border-box;
      height: 50%;
      padding: 14% 12%;
      line-height: 30px;
      overflow: hidden;
      min-height: 300px;

      &:nth-of-type(1) {
        background-color: rgb(246, 246, 246);
      }

      .time {
        font-size: 18px;
        font-weight: bold;
      }
      .title {
        line-height: 48px;
        font-size: 28px;
        font-weight: bold;
        color: #7b3931;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
      .describe {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        white-space: pre-wrap;
      }
      .more-btn {
        
      }
    }
  }

  .about_me {
    flex: 1;
    // padding: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;


    .avatar_name {
      // height: 100px;
      // min-width: 400px;
      text-align: center;
      display: flex;
      flex-direction: column;

      .avatar_image {
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }

      .info {
        // margin: 0 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        .name {
          // line-height: 100px;
          // text-align: right;
          font-size: 24px;
          color: #333;
        }
        .describe {
          // text-align: right;
          line-height: 30px;
          font-size: 14px;
          color: #999;
        }
        .gitee {
          // text-align: right;
          display: flex;
          height: 30px;
          flex-direction: column-reverse;

          img {
            height: 20px;
            border-radius: 50%;
            filter: grayscale(1);
            opacity: 0.3;
            transition: 0.2s;
            &:hover {
              filter: grayscale(0);
              opacity: 1;
            }
          }
        }
      }
    }

    .achievement {
      margin: 40px 0;
      line-height: 30px;
      text-align: center;
      color: #666;
    }
  }
}
@media (max-width: 960px) {
  #right {
    width: 100%;
  }
}

@media screen and (min-height: 800px) {
  #right .describe {
    -webkit-line-clamp: 4 !important;
  }
}
@media screen and (min-height: 900px) {
  #right .describe {
    -webkit-line-clamp: 5 !important;
  }
}
</style>
