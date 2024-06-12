<script setup>
import { userInfoStore } from '../../stores/user.js'
import { showDialog, showConfirmDialog  } from 'vant';
import { useRouter } from 'vue-router'
const router = useRouter()
const infoStore = userInfoStore()
const userType = infoStore.userType

const toAddPlay = () => {
    router.push({
        name: 'addplay'
    })
}
const toEnterStore = () => {
    router.push({
        name: 'enterStore'
    })
}
const toBalance = () => {
    router.push({
        name: 'balance'
    })
}
</script>
<template>
<div class="home">
    <div class="amounts">
        <div class="item">
            <div class="amounts-label">今日收入</div>
            <div class="amounts-num"><span>￥</span>1,000.00</div>
        </div>
        <div class="item">
            <div class="amounts-label">未结算金额</div>
            <div class="amounts-num"><span>￥</span>500.00</div>
        </div>
    </div>
    <div class="main">
       <div class="main-item" @click="toAddPlay">
            <van-icon name="records" class="add-img" />
            <div class="add-text">带客游玩</div>
       </div>
       <div class="main-item">
            <div class="main-right-item" @click="toBalance">
                <img src="../../assets/svg/jiesuan.svg" alt=""  class="right-img" />
                <span class="add-text">结算列表</span>
            </div>
            <div class="main-right-item" @click="toEnterStore">
                <img src="../../assets/svg/shop.svg" alt=""  class="right-img" />
                <span class="add-text">商家列表</span>
            </div>
       </div>
    </div>
</div>
</template>
<style lang="scss" scoped>
.home {
    width: 100%;
    height: 100%;
    overflow: auto;
    background: rgba($color: #276ace, $alpha: 0.1);
}
.amounts {
    margin: 12px;
    height: 120px;
    background: linear-gradient(-90deg, #29bdd9, #276ace);
    // background: linear-gradient(135deg, #c850c0, #4158d0);
    display: flex;
    align-items: center;
    color: #ffffff;
    border-radius: 12px;
    .item {
        width: 50%;
        text-align: center;
        font-size: 18px;
        .amounts-label {
            line-height: 22px;
        }
        .amounts-num {
            margin-top: 10px;
            font-size: 28px;
            line-height: 28px;
            span {
                font-size: 20px;
                line-height: 20px;
                vertical-align: top;
            }
        }
    }
}
.main {
    margin: 20px 12px 0;
    height: 160px;
    padding: 10px;
    border-radius: 12px;
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    align-items: center;

}
.main-item {
    width: 50%;
    text-align: center;
    border-right: 1px solid #b1c2ff;
    &:last-child {
        border-right: none;
    }
    .add-img {
        display: block;
        margin: 0 auto;
        font-size: 60px;
    }
    .add-text {
        margin-top: 15px;
        font-size: 24px;
        line-height: 1;
        color: #666666;
    }
}
.main-right-item {
    padding: 13px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #b1c2ff;
    &:last-child {
        border-bottom: none;
    }
    .right-img {
        width: 40px;
        height: 40px;
        display: block;
        font-size: 40px;
        padding-right: 12px;
    }
    .add-text {
        font-size: 20px;
        margin-top: 0;
    }
}
.van-icon {
    font-size: 30px;
    color: #5075FF;
}
</style>