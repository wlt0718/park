<script setup>
import { userInfoStore } from '../../stores/user.js'
import { useRouter } from 'vue-router'
const infoStore = userInfoStore()
const router = useRouter()

const reviseMyInfo = () => {
    router.push({
        name: 'guideRevise'
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
</script>
<template>
<div class="header">
    <div class="userinfo">
        <div class="name">
            <span>{{ infoStore.name }}</span>
            <span class="label">导游</span>
        </div>
        <div class="team"><span>所属导游团：</span><span>{{ infoStore.team }}</span></div>
    </div>
    <div class="change">
        <span @click="reviseMyInfo">修改信息</span>
    </div>
</div>
<div class="nav-list">
    <div class="nav-item" @click="toEnterStore">
        <van-icon name="wap-home-o" class="left-icon" />
        <span>名下商家</span>
        <van-icon name="arrow" class="right-icon" />
    </div>
    <div class="nav-item" @click="toPlayList">
        <van-icon name="wap-nav" class="left-icon" />
        <span>游玩列表</span>
        <van-icon name="arrow" class="right-icon" />
    </div>
    <div class="nav-item" @click="toBalance">
        <van-icon name="balance-o" class="left-icon" />
        <span>结算列表</span>
        <van-icon name="arrow" class="right-icon" />
    </div>
</div>
</template>
<style lang="scss" scoped>
.header {
    background-color: #fff;
    width: 100%;
    padding: 24px 20px;
    padding-right: 12px;
    line-height: 1;
    display: flex;
    justify-content: space-between;
    .userinfo {
        .name {
            font-size: 20px;
            margin-bottom: 14px;
            display: flex;
            align-items: center;
            .label {
                margin-left: 15px;
                padding: 4px 10px 3px;
                border-radius: 3px;
                background-color: #881391;
                font-size: 12px;
                color: #fff;
            }
        }
        .team {
            font-size: 12px;
            color: #666666;
            & :first-child {
                margin-right: 6px;
            }
        }
    }
    .change {
        color: #5075ff;
        font-size: 14px;
    }
}
.nav-list {
    width: 100%;
    margin-top: 18px;
    padding: 0 12px;
    background-color: #fff;
}
.nav-item {
    height: 50px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f5f6f7;
    &:last-child {
        border-color: transparent;
    }
    .left-icon {
        font-size: 24px;
        color: #5075FF;
    }
    span {
        margin-left: 15px;
        flex-grow: 1;
        font-size: 16px;
        color: #333333;
    }
    .right-icon {
        font-size: 20px;
        color: #666666;
    }
}
</style>