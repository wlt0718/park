<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const checkGuide = ref('1')
const checkDate = ref('all')
const checkStatus = ref(0)
const statusList = [
    { text: '所有结算', value: 0 },
    { text: '未结算', value: 1 },
    { text: '结算成功', value: 2 },
]
const guideList = [
    { text: '所有商家', value: '1' },
    { text: '上海迪士尼', value: '2' },
    { text: '上海共青森林公园', value: '3' },
    { text: '商家三', value: '4' },
]
const dateList = ref([
  { text: '所有时间', value: 'all' },
  { text: '今日', value: 'date' },
  { text: '本周', value: 'week' },
  { text: '本月', value: 'month' },
  { text: `自定义时间`, value: 'custom' },
])
const dateChange = (value) =>{
  if(value === 'custom'){
    canlendarShow.value = true
  }
}
const canlendarShow = ref(false)
const customDate = ref('')
function onConfirm(value){
  canlendarShow.value = false
  const state = value[0].getMonth() + 1 + '月'+value[0].getDate() + '日' 
  const end = value[1].getMonth() + 1 + '月'+value[1].getDate() + '日' 
  customDate.value = state + '-' + end
}
function toinfo(){
    router.push({
        name: 'info'
    })
}
const data = ref([
    {
        id: 0,
        guideName: '上海迪士尼',
        project: '快艇',
        num: 20,
        amount: 60,
        proportion: 5,
        income: 30,
        time: '2024年04月29日 11:30:30',
        status: 0,
        isCheck: false,
    },
    {
        id: 1,
        guideName: '上海迪士尼',
        project: '快艇',
        num: 20,
        amount: 60,
        proportion: 5,
        income: 30,
        time: '2024年04月29日 11:30:30',
        status: 0,
        isCheck: false,
        guideOrder: '1003202406060011',
    },
    {
        id: 2,
        guideName: '上海共青森林公园',
        project: '快艇',
        num: 20,
        amount: 60,
        proportion: 5,
        income: 30,
        time: '2024年04月29日 11:30:30',
        status: 0,
        isCheck: false,
        guideOrder: '1003202406060012',
    },
    {
        id: 3,
        guideName: '上海迪士尼',
        project: '快艇',
        num: 20,
        amount: 60,
        proportion: 5,
        income: 30,
        time: '2024年04月29日 11:30:30',
        status: 1,
        isCheck: false,
        guideOrder: '1003202406060013',
    },
    {
        id: 4,
        guideName: '上海共青森林公园',
        project: '快艇',
        num: 20,
        amount: 60,
        proportion: 5,
        income: 30,
        time: '2024年04月29日 11:30:30',
        status: 1,
        isCheck: false,
        guideOrder: '1003202406060014',
    },
    {
        id: 5,
        guideName: '上海共青森林公园',
        project: '快艇',
        num: 20,
        amount: 60,
        proportion: 5,
        income: 30,
        time: '2024年04月29日 11:30:30',
        status: 1,
        isCheck: false,
        guideOrder: '1003202406060015',
    },
])
</script>
<template>
<van-sticky>
<van-dropdown-menu>
  <van-dropdown-item v-model="checkGuide" :options="guideList" />
  <van-dropdown-item v-model="checkStatus" :options="statusList" />
  <van-dropdown-item v-model="checkDate" :options="dateList" @change="dateChange" />
</van-dropdown-menu>
</van-sticky>
<van-calendar v-model:show="canlendarShow" type="range" @confirm="onConfirm" 
  allow-same-day position="top"
/>
<div class="store">
    <template v-for="item in data" :key="item.id" >
        <div class="store-item">
            <div class="item-left">
                <div class="name">商家：{{ item.guideName }}</div>
                <div>带客游玩批次：{{ item.guideOrder }}</div>
                <div>时间：{{ item.time }}</div>
                <div>结算金额：<span class="red">￥{{ item.amount }}</span></div>
            </div>
            <div class="right">
                <div>
                    <div v-if="item.status === 0" style="color: #E6A23C">未结算</div>
                    <div v-if="item.status === 1" style="color: #67c23a">结算成功</div>
                </div>
                <div class="btn">
                    <van-button color="#5075FF" size="mini" round @click="toinfo" block>查看详情</van-button>
                </div>
            </div>
        </div>
    </template>
</div>
</template>
<style scoped lang="scss">
.store {
    padding-top: 10px;
    padding-bottom: 70px;
}
.store-item {
    margin: 0 12px 12px;
    padding: 12px;
    background-color: #ffffff;
    border-radius: 6px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    line-height: 1;
    border-radius: 7px;
    box-shadow: 0px 0px 4px 0px rgba($color: #000000, $alpha: 0.1);
    .checkbox {
        flex-shrink: 0;
        margin-right: 15px;
    }
    .item-left {
        flex-grow: 1;
        font-size: 13px;
        color: #999999;
        div {
            margin-bottom: 8px;
        }
        div:last-child {
            margin-bottom: 0;
        }
        .name {
            font-size: 15px;
        }
        .red {
            color: #ee0a24;
            font-size: 14px;
        }
    }
    .right {
        width: 60px;
        text-align: right;
        font-size: 13px;
        .btn {
            width: 60px;
            margin-top: 15px;
        }
    }
}
</style>