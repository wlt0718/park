<script setup>
import { ref, reactive, computed } from "vue";
import { showDialog, showConfirmDialog } from 'vant';
import { useRouter } from 'vue-router'

const router = useRouter()
function toinfo(){
  router.push({
    name: 'playinfo'
  })
}
</script>
<template>
<div class="list">
  <div class="item">
    <img src="" alt="" />
    <div class="body">
      <div class="name">上海迪士尼</div>
      <div class="desc">全国热门游玩地区</div>
    </div>
    <van-button type="primary" size="mini" color="#5075FF" @click="toinfo">选择项目</van-button>
  </div>
  <div class="item">
    <img src="" alt="" />
    <div class="body">
      <div class="name">上海欢乐谷</div>
      <div class="desc">全国热门游玩地区</div>
    </div>
    <van-button type="primary" size="mini" color="#5075FF">选择项目</van-button>
  </div>
  <div class="item">
    <img src="" alt="" />
    <div class="body">
      <div class="name">上海人民公园</div>
      <div class="desc">全国热门游玩地区</div>
    </div>
    <van-button type="primary" size="mini" color="#5075FF">选择项目</van-button>
  </div>
  <div class="item">
    <img src="" alt="" />
    <div class="body">
      <div class="name">上海滴水湖</div>
      <div class="desc">全国热门游玩地区</div>
    </div>
    <van-button type="primary" size="mini" color="#5075FF">选择项目</van-button>
  </div>
  <div class="item">
    <img src="" alt="" />
    <div class="body">
      <div class="name">上海动物园</div>
      <div class="desc">全国热门游玩地区</div>
    </div>
    <van-button type="primary" size="mini" color="#5075FF">选择项目</van-button>
  </div>
</div>
</template>
<style lang="scss" scoped>
.list {
  margin: 12px;
}
.item {
  padding: 12px;
  background-color: #ffffff;
  border-radius: 6px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  img {
    flex-shrink: 0;
    display: block;
    width: 100px;
    height: 70px;
    background-color: #b2c2ff;
    border-radius: 6px;
    margin-right: 15px;
  }
  .van-button {
    flex-shrink: 0;
  }
  .body {
    flex-grow: 1;
    .name {
      font-size: 14px;
      color: #333333;
      margin-bottom: 8px;
    }
    .desc {
      font-size: 12px;
      color: #999999;
    }
  }
}
</style>