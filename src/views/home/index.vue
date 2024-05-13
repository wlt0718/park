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
const toPlayList = () =>{
    router.push({
        name: 'playList'
    })
}
const toBalance = () => {
    router.push({
        name: 'balance'
    })
}
const hisbalance = () =>{
    showDialog({
        title: '提示',
        message: '暂未开放。'
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
            <div class="add-text">新增游玩</div>
       </div>
       <div class="main-item">
            <div class="main-right-item" @click="toBalance">
                <van-icon name="bars" class="right-img" />
                <span class="add-text">结算列表</span>
            </div>
            <div class="main-right-item" @click="toEnterStore">
                <van-icon name="wap-home" class="right-img" />
                <span class="add-text">名下商家</span>
            </div>
       </div>
    </div>
    <nav class="func">
        <div class="nav-item" @click="toPlayList">
            <van-icon name="wap-nav" />
            <div class="nav-text">游玩列表</div>
        </div>

        <div class="nav-item" @click="hisbalance">
            <van-icon name="weapp-nav" />
            <div class="nav-text">历史结算</div>
        </div>
    </nav>
</div>
</template>
<style lang="scss" scoped>
.home {
    width: 100%;
    height: 100%;
    overflow: auto;
    background: linear-gradient(180deg, 
    #94d1fa 0%, #94d1fa 100%);
}
.amounts {
    margin: 12px;
    height: 120px;
    background: #3a5bca;
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
    background-color: rgba(255, 255, 255, 0.6);
    display: flex;
    align-items: center;

}
.main-item {
    width: 50%;
    text-align: center;
    border-right: 1px solid #5075FF;
    &:last-child {
        border-right: none;
    }
    .add-img {
        font-size: 70px;
        margin: 0 auto;
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
    border-bottom: 1px solid #5075FF;
    &:last-child {
        border-bottom: none;
    }
    .right-img {
        font-size: 40px;
        padding-right: 12px;
        display: block;
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
.func {
    margin: 20px 12px 0;
    padding: 14px 0;
    border-radius: 12px;
    background-color: rgba(255, 255, 255, 0.6);
    display: flex;
    justify-content: space-around;
    .nav-item {
        text-align: center;
        .nav-text {
            font-size: 14px;
            line-height: 14px;
            color: #666666;
            margin-top: 8px;
        }
    }
}
</style>