<script setup>
import { ref, reactive } from "vue";
import { showDialog, showConfirmDialog  } from 'vant';
const data = reactive([
/**
 * status: 0 审核中，1 审核通过，2 审核失败 
 *  
 **/
    {
        id: 0,
        merchantName: '上海欢乐谷',
        address: '上海市松江区林湖路888号',
        status: '1' 
    },
    {
        id: 1,
        merchantName: '上海迪士尼',
        address: '上海市松江区林湖路888号',
        status: '2' 
    },
    {
        id: 2,
        merchantName: '上海共青森林公园',
        address: '上海市松江区林湖路888号',
        status: '0' 
    },
    {
        id: 3,
        merchantName: '上海动物园',
        address: '上海市松江区林湖路888号',
        status: '0' 
    },
    {
        id: 4,
        merchantName: '上海人民公园',
        address: '上海市松江区林湖路888号',
        status: '0' 
    },
    {
        id: 5,
        merchantName: '上海市方特世界',
        address: '上海市松江区林湖路888号',
        status: '1' 
    },
    {
        id: 6,
        merchantName: '上海市环球港',
        address: '上海市松江区林湖路888号',
        status: '1' 
    },
])
const dataProject = reactive([
    {
        parentId: 0,
        id: '100001',
        project: ['欢乐谷游艇', '欢乐谷摩天轮', '欢乐谷恐龙乐园', '欢乐谷天地双雄', '欢乐谷小鲤鱼历险记', '欢乐谷4D空间']
    },
    {
        parentId: 5,
        id: '100001',
        project: ['方特世界游艇', '方特世界摩天轮', '方特世界恐龙乐园', '方特世界天地双雄', '方特世界小鲤鱼历险记', '方特世界4D空间']
    },
    {
        parentId: 6,
        id: '100001',
        project: ['环球港游艇', '环球港摩天轮', '环球港恐龙乐园', '环球港4D空间']
    }
])
// 查看商家
const lookShow = ref(false)
const showData = reactive({
    name: '',
    project: []
})
function look(item){
    const findMerchant = dataProject.find(el =>{
        return el.parentId === item.id
    })
    showData.name = item.merchantName
    showData.project = findMerchant.project
    lookShow.value = true
}
/* 删除商家 */
function remove(item){
    if(item.status === '0'){
        showConfirmDialog({
            title: '提示',
            message: '商家还在审核中，是否删除？'
        }).then(() =>{
            const index = data.findIndex(el => {
                return el.id === item.id
            })
            data.splice(index,1)
        }).catch(() =>{})
    } else {
        showConfirmDialog({
            title: '提示',
            message: '该商家为无效商家，您不能参与其名下项目推广，是否删除？'
        }).then(() =>{
            const index = data.findIndex(el => {
                return el.id === item.id
            })
            data.splice(index,1)
        }).catch(() =>{})
    }
}
const addplayShow = ref(false)
/** 新增商家 */
const addMerchantName = ref('')
function confirmAdd(){
    if(!addMerchantName.value){
        showDialog({
            title: '提示',
            message: '商家名称不能为空'
        })
        return
    } else {
        const id = data[data.length - 1].id + 1
        const newData = {
            id,
            merchantName: addMerchantName.value,
            address: '上海市松江区林湖路888号',
            status: '0' 
        }
        data.push(newData)
        addplayShow.value = false
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
            <div v-if="item.status === '1'" class="look" @click="look(item)">查看</div>
            <van-icon name="delete-o" class="store-icon" v-else @click="remove(item)"/>
        </div>
    </div>
</div>
<div class="footer">
    <button type="button" class="btn" @click="addplayShow = true">入驻新商家</button>
</div>
<van-popup
  v-model:show="addplayShow"
  position="center"
  round
  closeable
  class="popup"
>
    <div class="popuptitle">入驻新商家</div>
    <div class="from-item">
      <label for="name" class="from-label">
        商家名称
      </label>
      <input id="name" class="from-input" type="text" placeholder="请输入商家名称" v-model="addMerchantName" />
    </div>
    <button type="button" class="btn" @click="confirmAdd">确认入驻</button>
</van-popup>
<van-popup
    v-model:show="lookShow"
    position="center"
    round
    closeable
    class="merchantPopup"
>
    <div class="from-item">
        <div class="from-label">
            商家名称
        </div>
        <div class="from-input">{{ showData.name }}</div>
    </div>
    <div class="from-item project">
        <div class="from-label">
            名下项目
        </div>
        <div class="from-project">
            <van-tag type="primary" size="medium" v-for="item in showData.project" :key="item">{{ item }}</van-tag>
        </div>
    </div>
</van-popup>
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
</style>