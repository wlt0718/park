<script setup>
import { ref, reactive, computed } from "vue";
import { showDialog, showConfirmDialog } from 'vant';
import { useRouter } from 'vue-router'
const popupShow = ref(false)
const qrcodeValue = reactive({
  color: { dark: '#000000ff', light: '#ffffff' },
  type: 'image/png',
  value: 'https://wlt0718.github.io/park-visitor/#/merchantorder?type=g&merchant=0',
  width: 300
})
</script>
<template>
  <div class="header">
    <img src="../../assets/jpg/dsn.jpg" alt="" />
  </div>
  <div class="main">
    <div class="name">上海迪士尼</div>
    <div class="score">
      <van-icon name="star" />
      <span class="num">4.9</span>
      <span class="month">月玩人次 10000+</span>
    </div>
    <div class="tag">
      <van-tag>米奇</van-tag>
      <van-tag>年轻人</van-tag>
      <van-tag>标签三</van-tag>
    </div>
    <div class="activity">
      <div>活动一：XXXXXXXXXX</div>
      <div>活动二：XXXXXXXXXX</div>
      <div>活动三：XXXXXXXXXX</div>
    </div>
  </div> 
<div class="list">
  <div class="item">
    <img src="" alt="" />
    <div class="body">
      <div class="name">飞跃龙门</div>
      <div class="oldamt">
        <span>项目费用 </span>
        <span>￥30.00 / 位</span>
      </div>
      <div class="tag">
        <van-tag type="danger">推广佣金 5%</van-tag>
      </div>
      <div>
        <span class="newamt">一位收入</span>
        <span class="newamt">￥1.50</span>
      </div>
    </div>
    <div class="btnbox">
        <van-button type="primary" size="mini" color="#5075FF" @click="popupShow= true">生成推广二维码</van-button>
    </div>
  </div>
  <div class="item">
    <img src="" alt="" />
    <div class="body">
      <div class="name">鲤鱼大冒险</div>
      <div class="oldamt">
        <span>项目费用 </span>
        <span>￥30.00 / 位</span>
      </div>
      <div class="tag">
        <van-tag type="danger">推广佣金 5%</van-tag>
      </div>
      <div>
        <span class="newamt">一位收入</span>
        <span class="newamt">￥1.50</span>
      </div>
    </div>
    <div class="btnbox">
        <van-button type="primary" size="mini" color="#5075FF">生成推广二维码</van-button>
    </div>
  </div>
  <div class="item">
    <img src="" alt="" />
    <div class="body">
      <div class="name">勇闯天涯</div>
      <div class="oldamt">
        <span>项目费用 </span>
        <span>￥30.00 / 位</span>
      </div>
      <div class="tag">
        <van-tag type="danger">推广佣金 5%</van-tag>
      </div>
      <div>
        <span class="newamt">一位收入</span>
        <span class="newamt">￥1.50</span>
      </div>
    </div>
    <div class="btnbox">
        <van-button type="primary" size="mini" color="#5075FF">生成推广二维码</van-button>
    </div>
  </div>
  <div class="item">
    <img src="" alt="" />
    <div class="body">
      <div class="name">项目三</div>
      <div class="oldamt">
        <span>项目费用 </span>
        <span>￥30.00 / 位</span>
      </div>
      <div class="tag">
        <van-tag type="danger">推广佣金 5%</van-tag>
      </div>
      <div>
        <span class="newamt">一位收入</span>
        <span class="newamt">￥1.50</span>
      </div>
    </div>
    <div class="btnbox">
        <van-button type="primary" size="mini" color="#5075FF">生成推广二维码</van-button>
    </div>
  </div>
  <div class="item">
    <img src="" alt="" />
    <div class="body">
      <div class="name">项目四</div>
      <div class="oldamt">
        <span>项目费用 </span>
        <span>￥30.00 / 位</span>
      </div>
      <div class="tag">
        <van-tag type="danger">推广佣金 5%</van-tag>
      </div>
      <div>
        <span class="newamt">一位收入</span>
        <span class="newamt">￥1.50</span>
      </div>
    </div>
    <div class="btnbox">
        <van-button type="primary" size="mini" color="#5075FF">生成推广二维码</van-button>
    </div>
  </div>
</div>
<van-popup v-model:show="popupShow" position="bottom"
  closeable 
    round :style="{height:'95%'}"
>
    <div class="order">
      <div class="body">
        <div class="name">飞跃龙门</div>
        <div class="oldamt">
          <span>项目费用 </span>
          <span>￥30.00 / 位</span>
        </div>
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
.header {
    img {
        display: block;
        width: 100%;
        height: 150px;
        opacity: 0.8;
        object-fit: cover;
    }
}
.main {
    margin: -30px 0 0;
    padding: 15px;
    padding-bottom: 10px;
    position: relative;
    background-color: rgba($color: #ffffff, $alpha: 1);
    border-radius: 20px 20px 0 0;
    font-size: 12px;
    .name {
        font-size: 16px;
        color: #333;
        font-weight: 600;
        margin-bottom: 6px;
    }
    .score {
      font-size: 12px;
      color: #ff6034;
      margin-bottom: 6px;
    }
    .van-icon {
      margin-right: 2px;
    }
    .month {
      margin: 0 8px;
      color: #999999;
    }
    .average {
      color: #999999;
    }
    .tag {
      .van-tag {
        margin-right: 8px;
        background-color: #fcd7ce;
        color: #ff5a30;
      }
    }
}
.activity {
  margin-top: 4px;
  div {
    color: #333333;
    line-height: 1.2;
  }
}
.list {
  margin: 12px;
}
.item {
  padding: 12px;
  background-color: #ffffff;
  border-radius: 6px;
  margin-bottom: 10px;
  display: flex;
  align-items: flex-start;
  img {
    flex-shrink: 0;
    display: block;
    width: 100px;
    height: 80px;
    background-color: #b2c2ff;
    border-radius: 6px;
    margin-right: 10px;
  }
  .btnbox {
    height: 80px;
    flex-shrink: 0;
    display: flex;
    align-items: flex-end;
  }
  .body {
    flex-grow: 1;
    .name {
      font-size: 14px;
      margin-bottom: 5px;
      color: #333333;
    }
    .desc {
      font-size: 12px;
      color: #999999;
    }
  }
}
.tag {
  margin: 6px 0;
  .van-tag {
    margin-right: 8px;
    background-color: #fcd7ce;
    color: #ff5a30;
  }
}
.sr {
    color: #999999;
    font-size: 14px;
}
.newamt {
  font-size: 14px;
  font-weight: 600;
  color: #ee0a24;
}
.oldamt {
  font-size: 12px;
  color: #999999;
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
    }
    .oldamt {
        font-size: 14px;
        margin: 10px 0;
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