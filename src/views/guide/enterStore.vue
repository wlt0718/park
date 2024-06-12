<script setup>
import { ref, reactive } from "vue";
import { showDialog, showConfirmDialog  } from 'vant';
import { userMerchantStore } from '../../stores/merchant.js'
import { useRouter } from 'vue-router'
const router = useRouter()
const userMerchant = userMerchantStore()
const data = userMerchant.list
function lookMerchant(item){
    router.push({
        path: '/merchant/project',
        query: {
            id: item.id
        }
    })
}
function enterNewMerchant(){
    router.push({
        path: '/merchant/enter'
    })
}
/* 删除商家 */
function remove(item){
    if(item.status === '0'){
        showConfirmDialog({
            title: '提示',
            message: '商家还在审核中，是否删除？'
        }).then(() =>{
            userMerchant.Set_list_remove(item.id)
        }).catch(() =>{})
    } else {
        showConfirmDialog({
            title: '提示',
            message: '该商家为无效商家，您不能参与其名下项目推广，是否删除？'
        }).then(() =>{
            userMerchant.Set_list_remove(item.id)
        }).catch(() =>{})
    }
}
</script>
<template>
<div class="store">
    <div class="store-item" v-for="item in data" :key="item.id">
        <div class="item-left">
            <div class="name">{{ item.merchantName }}</div>
            <div class="address">{{ item.address }}</div>
        </div>
        <div class="store-status">
            <span style="color: #67c23a" v-if="item.status === '1'">有效商家</span>
            <span style="color: #f56c6c" v-if="item.status === '2'">无效商家</span>
            <span style="color: #ED6A0C" v-if="item.status === '0'">商家确认中</span>
        </div>
        <div class="item-right">   
            <div v-if="item.status === '1'" class="look" @click="lookMerchant(item)">查看</div>
            <van-icon name="delete-o" class="store-icon" v-else @click="remove(item)"/>
        </div>
    </div>
</div>
<div class="footer-box"></div>
<div class="footer">
  <div class="footer-btn">
    <van-button color="#5075ff" @click="enterNewMerchant" round block>入驻新商家</van-button>
  </div>
</div>
</template>
<style lang="scss" scoped>
.store {
    padding-top: 12px;
    padding-bottom: 70px;
    overflow: auto;
}
.store-item {
    margin: 0 12px 12px;
    padding: 12px;
    background-color: #ffffff;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 1;
    .item-left {
        flex-grow: 1;
    }
    .item-right {
        width: 50px;
        text-align: right;
        .look {
            display: inline-block;
            padding: 5px 7px;
            border-radius: 6px;
            font-size: 12px;
            color: #fff;
            background-color: var(--default-color);
        }
    }
    .name {
        font-size: 16px;
        color: #666666;
    }
    .address {
        margin-top: 8px;
        font-size: 12px;
        color: #999999;
    }
    .store-status {
        font-size: 12px;
        width: 70px;
    }
    .store-icon {
        font-size: 20px;
    }
}
.footer {
    width: 100%;
    height: 70px;
    padding: 10px 12px 18px;
    background-color: #ffffff;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    .btn {
        display: block;
        width: 100%;
        height: 44px;
        background-color: var(--default-color);
        color: #fff;
        font-size: 18px;
        text-align: center;
        line-height: 100%;
        border-radius: 30px;
    }
}
.from-item {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #dddddd;
  display: flex;
  align-items: center;
  font-size: 14px;
  .from-label {
    flex-shrink: 0;
    width: 80px;
  }
  .from-input {
    flex-grow: 1;
    height: 100%;
    line-height: 1;
  }
}
.popup {
    width: 80%;
    padding: 15px;
    .popuptitle {
        text-align: center;
        padding: 15px 0;
        font-size: 16px;
    }
    .btn {
        display: block;
        width: 200px;
        height: 44px;
        margin: 0 auto;
        margin-top: 20px;
        background-color: var(--default-color);
        color: #fff;
        font-size: 18px;
        text-align: center;
        line-height: 100%;
        border-radius: 30px;
    }
}
.merchantPopup {
    width: 90%;
    padding: 15px;
    .from-item {
        padding: 20px 0;
        height: auto;
        &.project {
            padding-bottom: 0;
        }
    }
    .from-input {
        flex-grow: 1;
        font-size: 14px;
        line-height: 1;
        height: auto;
    }
    .van-tag {
        margin-right: 10px;
        margin-bottom: 20px;
    }
}
.right-icon {  
    font-size: 20px;
    color: #666666;
}
.footer-box {
  height: 70px;
}
.footer {
  width: 100%;
  height: 60px;
  padding: 0 12px;
  background-color: #ffffff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .footer-btn {
    flex-grow: 1;
  }
}
</style>