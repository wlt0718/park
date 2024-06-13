<script setup>
import { ref, reactive, computed } from "vue";
import { showDialog, showConfirmDialog } from 'vant';
import { useRouter } from 'vue-router'
const data = reactive([
  {
    id: 0,
    merchantName: '上海迪士尼',
    address: '上海市浦东新区川沙镇黄赵路310号',
    desc: '全国热门游玩地区'
  },
  {
    id: 1,
    merchantName: '上海共青森林公园',
    address: '上海市杨浦区军工路2000号',
    desc: '全国热门游玩地区'
  }
])
const router = useRouter()
function lookMerchant(item){
  router.push({
    path: '/merchant/project',
    query: {
        id: item.id
    }
  })
}
// 二维码
const popupShow = ref(false)
const qrcodeValue = reactive({
  color: { dark: '#000000ff', light: '#ffffff' },
  type: 'image/png',
  value: 'https://wlt0718.github.io/park-visitor/#/merchantorder?type=g',
  width: 300
})
const qrcodeMerchant = reactive({
  merchantName: ''
})
function createQrcode(item){
  console.log(item)
  qrcodeMerchant.merchantName = item.merchantName
  qrcodeValue.value = `https://wlt0718.github.io/park-visitor/#/merchantorder?type=g&merchant=${item.id}`
  popupShow.value = true
}
</script>
<template>
<div class="list">
  <div class="item" v-for="item in data" :key="item.id">
    <img src="" alt="" />
    <div class="body">
      <div class="name">{{ item.merchantName }}</div>
      <div class="desc">{{ item.desc }}</div>
    </div>
    <div class="func">
      <van-button type="primary" size="mini" block color="#5075FF" @click="createQrcode(item)">推广二维码</van-button>
      <van-button type="primary" size="mini" block color="#5075FF" @click="lookMerchant(item)">查看商家信息</van-button>
    </div>
  </div>
</div>
<van-popup v-model:show="popupShow" position="bottom"
  closeable 
    round :style="{height:'95%'}"
>
  <div class="order">
    <div class="body">
      <div class="name">{{ qrcodeMerchant.merchantName }}</div>
      <div class="desc">
        游客扫码下单
      </div>
    </div>
    <div class="couponlist">
      <vue-qrcode :value="qrcodeValue.value" :width="qrcodeValue.width" :type="qrcodeValue.type"
        :color="qrcodeValue.color"
      >
      </vue-qrcode>
    </div>
    <div>
      <div class="time">二维码有效期：<span style="color:#5075FF;font-weight: 600;">29分59秒</span></div>
      <van-button type="primary" size="small" color="#5075FF">重新生成</van-button>
    </div>
  </div>
</van-popup>
</template>
<style lang="scss" scoped>
.list {
  margin: 12px;
}
.item {
  padding: 10px;
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
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
  .func {
    flex-shrink: 0;
    .van-button+.van-button {
      margin-top: 10px;
      margin-left: 0;
    }
  }
}
.order {
  padding-top: 15px;
  margin-top: 80px;
  background-color: #ffffff;
  text-align: center;
  img {
    margin: 0 auto;
    width: 300px;
  }
  .body {
    text-align: center;
    .name {
        font-size: 16px;
        color: #333333;
        font-weight: bold;
        margin-bottom: 10px;
    }
    .desc {
      font-size: 14px;
      color: #999999;
    }
  }
}
.time {
  font-size: 14px;
  color: #333333;
  margin-bottom: 20px;
}
</style>