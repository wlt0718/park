<script setup>
import { ref, reactive, computed, watch } from 'vue';
import { userPlayListStore } from '../../stores/playlist.js'
import { useRouter } from 'vue-router';
const router = useRouter()
const playListStore = userPlayListStore()
const dataProject = reactive([
    {
        id: 0,
        merchantName: '上海欢乐谷',
        project: [
          {
            id: '100001',
            name: '上海欢乐谷游艇',
            amounts: 60,
            proportion: 5,
          },
          {
            id: '100002',
            name: '上海欢乐谷摩天轮',
            amounts: 60,
            proportion: 10
          },
          {
            id: '100003',
            name: '上海欢乐谷恐龙乐园',
            amounts: 40,
            proportion: 5
          },
          {
            id: '100004',
            name: '上海欢乐谷天地双雄',
            amounts: 40,
            proportion: 5
          },
        ]
    },
    {
        merchantName: '上海方特世界',
        id: 5,
        project: [{
            id: '200001',
            name: '上海市方特世界游艇',
            amounts: 60,
            proportion: 5
          },
          {
            id: '200002',
            name: '上海市方特世界摩天轮',
            amounts: 60,
            proportion: 10
          },
          {
            id: '200003',
            name: '上海市方特世界恐龙乐园',
            amounts: 40,
            proportion: 5.5
          },
          {
            id: '200004',
            name: '上海市方特世界天地双雄',
            amounts: 40,
            proportion: 5
          },]
    },
    {
        merchantName: '上海环球港',
        id: 6,
        project: [{
            id: '300001',
            name: '上海市环球港游艇',
            amounts: 60,
            proportion: 5
          },
          {
            id: '300002',
            name: '上海市环球港摩天轮',
            amounts: 60,
            proportion: 10
          },
          {
            id: '300003',
            name: '上海市环球港恐龙乐园',
            amounts: 40,
            proportion: 5
          },
          {
            id: '300004',
            name: '上海市环球港天地双雄',
            amounts: 40,
            proportion: 5
          },]
    }
])
const checkMerchant = ref(-1)
const checkProject = ref('100000')
const checkDate = ref('date')
const merchantList = computed(() =>{
  const list = [
    { text: '所有商家', value: -1 }
  ]
  dataProject.forEach(el =>{
    const data = { text: el.merchantName, value: el.id }
    list.push(data)
  })
  return list
})
// 所有项目
const projectList = ref([
  { text: '所有项目', value: '100000' }
])
watch(checkMerchant, (newValue, oldValue) =>{
  checkProject.value = '100000'
  const list = [
    { text: '所有项目', value: '100000' }
  ]
  const check = merchantList.value.find(el =>{
    return el.value === newValue
  })
  if(newValue !== -1) {
    const data = dataProject.find(el => {
      return el.id === check.value
    })
    data.project.forEach(el =>{
      const pushData = { text: el.name, value: el.id }
      list.push(pushData)
    })
  }
  projectList.value = list
})
/* 选择日期区间 */
const canlendarShow = ref(false)
const customDate = ref('')
function onConfirm(value){
  canlendarShow.value = false
  const state = value[0].getMonth() + 1 + '月'+value[0].getDate() + '日' 
  const end = value[1].getMonth() + 1 + '月'+value[1].getDate() + '日' 
  customDate.value = state + '-' + end
}
const dateList = ref([
  { text: '今日', value: 'date' },
  { text: '本周', value: 'week' },
  { text: '本月', value: 'month' },
  { text: `自定义时间${customDate.value}`, value: 'custom' },
])
const dateChange = (value) =>{
  console.log(value)
  if(value === 'custom'){
    canlendarShow.value = true
  }
}
const dataList = computed(() => {
  console.log(checkMerchant.value)
  if(checkMerchant.value == -1){
    return playListStore.data
  } else {
    const findel = merchantList.value.find(el => {
      return el.value === checkMerchant.value
    })
    const a = playListStore.data.filter(el => {
      return el.name === findel.text
    })
    console.log(a)
    return a
  }
 
})
const merchantChange = (value) =>{

}
const projectChange = (value) =>{

}
function toInfo(){
  router.push({
    name: 'listInfo'
  })
}
</script>
<template>
<van-dropdown-menu>
  <van-dropdown-item v-model="checkMerchant" :options="merchantList" @change="merchantChange"/>
  <van-dropdown-item v-model="checkDate" :options="dateList" @change="dateChange" />
</van-dropdown-menu>
<!-- 日期区间 -->
<van-calendar v-model:show="canlendarShow" type="range" @confirm="onConfirm" 
  allow-same-day position="top"
  />
<div class="playlist">
  <div class="list-item" v-for="item in dataList" :key="item.id" @click="toInfo">
    <div class="item-left">
      <div class="item-left-i">
        <span class="card-left">商家：</span>
        <span class="card-right">{{ item.name }}</span>
      </div>
      <div class="item-left-i">
        <span class="card-left">项目：</span>
        <span class="card-right">{{ item.project }}</span>
      </div>
      <div class="item-left-i">
        <span class="card-left">项目费用：</span>
        <span class="card-right">{{ item.amount }} 元/人</span>
      </div>
      <div class="item-left-i">
        <span class="card-left">佣金比例：</span>
        <span class="card-right">{{ item.proportion }} %</span>
      </div>
      <div class="item-left-i time">
        <span class="card-left">带客编号：</span>
        <span class="card-right"> {{  item.dkid }}</span>
      </div>
      <div class="item-left-i">
        <span class="card-left">游玩人次：</span>
        <span class="card-right">{{ item.num }} 次</span>
      </div>
      <div class="item-left-i">
        <span class="card-left">结算金额：</span>
        <span class="card-right weight">{{ item.income }} 元</span>
      </div>
      <div class="item-left-i time">
        <span class="card-left">时间：</span>
        <span class="card-right">{{ item.time }}</span>
      </div>
    </div>
    <div class="item-right">
      <div class="status" v-if="item.status === 1" style="color: #67c23a">审核通过</div>
      <div class="status" v-if="item.status === 0" style="color: #E6A23C">未审核</div>
      <div class="status" v-if="item.status === 2" style="color: #f56c6c">审核失败</div>
    </div>
  </div>
</div>
</template>
<style lang="scss" scoped>
.playlist {
  margin: 12px;
}
.list-item {
  padding: 12px;
  padding-bottom: 0;
  background-color: #fff;
  margin-bottom: 12px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 6px;
  box-shadow: 0 0 4px 1px rgba(0,0,0,0.1);
  color: #666666;
  .item-right {
    flex-shrink: 0;
    text-align: center;
  }
  .status {
    border-radius: 6px;
  }
  .failtext {
    margin-top: 10px;
  }
  .item-left {
    width: 0;
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
  }
  .item-left-i {
    width: 50%;
    margin-bottom: 8px;
  }
  .item-left-i.time{
    width: 100%;
  }
  .card-right.weight {
    font-weight: 600;
  }
}
</style>