<script setup>
import { useRouter } from 'vue-router'
import { ref, reactive, computed } from 'vue';
import { showDialog, showConfirmDialog } from 'vant'
import { userMerchantStore } from '../../stores/merchant.js'
const userMerchant = userMerchantStore()
const router = useRouter()
const data = reactive([
// status: 0 审核中，1 审核通过，2 审核失败 
  {
    id: 'sjgy',
    merchantName: '上海世纪公园',
    address: '上海市浦东新区锦绣路1001号',
    jianjie: '世纪公园以大面积草坪、森林、湖泊为主体，体现了东西方园林艺术与自然的融洽，划分为7个区域：湖滨区、观景区、疏林草坪区、鸟类保护区、乡土田园区、异国园区以及迷你高尔夫球场区。'
  },
  {
    id: 'xh',
    merchantName: '杭州西湖',
    address: '浙江省杭州市西湖区龙井路1号',
    jianjie: '西湖南、西、北三面环山，东邻城区，南部和钱塘江隔山相邻，湖中白堤、苏堤、杨公堤、赵公堤将湖面分割成若干水面，湖中有三岛，西湖群山以西湖为中心，由近及远可分为四个层次。 [7]西湖流域内年径流量为1400万立方米，蓄水量近1400万立方米。 [9]西湖是一座设备齐全、管理完善的灌溉济运水库，通过河渠和闸门，为杭州市区及周边农田提供了充足的水源。西湖还可以协助调节钱塘江的水位，防止城市内涝。'
  },
  {
    id: 'ytz',
    merchantName: '无锡鼋头渚',
    address: '江苏省无锡市滨湖区鼋渚路1号',
    jianjie: '无锡市鼋头渚景区作为江南地区规模最大的山水园林胜境，拥有充山隐秀、鹿顶迎晖、鼋渚春涛、横云山庄、万浪卷雪、湖山真意、十里芳径、太湖仙岛、江南兰苑、樱花谷、无锡人杰苑及中犊晨雾、广福古寺等较为出名的景点。'
  },
])
const dataProject = reactive([
  {
    merchantName: '上海世纪公园',
    parentId: 'sjgy',
    project: [
      {
        projectId: '1001',
        projectName: '海盗船',
        amount: 100,
        bili: 5,
        yongjin: 5,
      },
      {
        projectId: '1002',
        projectName: '旋转木马',
        amount: 100,
        bili: 20,
        yongjin: 20,
      }
    ]
  },
  {
    merchantName: '杭州西湖',
    parentId: 'xh',
    project: [
      {
        projectId: '2001',
        projectName: '苏堤春晓',
        amount: 100,
        bili: 5,
        yongjin: 5,
      },
      {
        projectId: '2002',
        projectName: '云栖竹径',
        amount: 100,
        bili: 20,
        yongjin: 20,
      },
      {
        projectId: '2003',
        projectName: '灵隐禅踪',
        amount: 50,
        bili: 10,
        yongjin: 5,
      },
    ]
  },
  {
    merchantName: '无锡鼋头渚',
    parentId: 'ytz',
    project: [
      {
        projectId: '3001',
        projectName: '十里芳径',
        amount: 100,
        bili: 5,
        yongjin: 5,
      },
      {
        projectId: '3002',
        projectName: '江南兰苑',
        amount: 100,
        bili: 20,
        yongjin: 20,
      },
      {
        projectId: '3003',
        projectName: '横云山庄',
        amount: 50,
        bili: 10,
        yongjin: 5,
      },
    ]
  },
])
const addMerchantName = ref('')
const showPicker = ref(false)
const columns = [
    { text: '上海世纪公园', value: 'sjgy' },
    { text: '杭州西湖', value: 'xh' },
    { text: '无锡鼋头渚', value: 'ytz' },
]
const onConfirm = (value) => {
    addMerchantName.value = value.selectedOptions[0].text
    showPicker.value = false
}
const merchant = computed(() => {
    if(addMerchantName.value){
      const obj = data.find(el => {
        return el.merchantName === addMerchantName.value
      })
      return obj
    }else {
        return {}
    }
})
const merchantPorject = computed(() => {
    if(addMerchantName.value){
        const data = dataProject.find(el => {
            return el.merchantName === addMerchantName.value
        })
        return data.project
    }else {
        return []
    }
})
// 确认入驻
function enterNewMerchant(){
  if(addMerchantName.value){
    const data = {
      id: userMerchant.list[userMerchant.list.length - 1].id + 1,
      merchantName: merchant.value.merchantName,
      address: merchant.value.address,
      status: '0' 
    }
    userMerchant.Set_list_add(data)
    router.replace({
      path: '/enterstore'
    })
  } else {
    showDialog({
      title: '提示',
      message: '您还没有选择商家',
    })
  }

}
</script>
<template>
<div class="picker">
  <div class="from-item" @click="showPicker = true">
    <label for="name" class="from-label">
      商家
    </label>
    <input id="name" class="from-input" type="text" placeholder="请先选择您要入驻的商家" v-model="addMerchantName" readonly />
    <van-icon name="arrow" class="right-icon" />
  </div>
</div>
<div class="tips">商家介绍</div>
<div class="header">
  <template v-if="addMerchantName">
    <div class="header-name">
      <div class="userinfo">
        <div class="name">
          <span>{{ merchant.merchantName }}</span>
        </div>
      </div>
    </div>
    <div class="adress">
      <van-text-ellipsis rows="2" :content="merchant.jianjie" expand-text="展开" collapse-text="收起" position="end" />
    </div>
    <div class="adress jianjie">地址： {{ merchant.address }} </div>
  </template>
  <template v-else>
    <div class="tishi">请先选择商家，选择后将显示商家介绍~</div>
  </template>
</div>
<div class="tips">商家项目列表</div>
<template v-if="addMerchantName">
  <div class="project">
    <div class="project-list">
      <div class="project-item" v-for="item in merchantPorject" :key="item.projectId">
        <img src="" alt="" />
        <div class="item-main">
          <div>项目名称：{{ item.projectName }}</div>
          <div>项目单价：{{ item.amount }} 元</div>
          <div>佣金比例：{{ item.bili }} %</div>
          <div>佣金：{{ item.yongjin }} 元</div>
        </div>
      </div>
    </div>
  </div>
</template>
<template v-else>
  <div class="tishi two">请先选择商家，选择后将显示商家游玩项目列表~</div>
</template>
<van-popup v-model:show="showPicker" round position="bottom">
  <van-picker
    :columns="columns"
    @cancel="showPicker = false"
    @confirm="onConfirm"
  />
</van-popup>
<div class="footer-box"></div>
<div class="footer">
  <div class="footer-btn">
    <van-button color="#5075ff" @click="enterNewMerchant" round block>确认入驻</van-button>
  </div>
</div>
</template>
<style lang="scss" scoped>
.from-item {
  margin: 12px;
  border-radius: 6px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  padding: 0 12px;
  height: 50px;
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
    color: #333333;
  }
}
.tips {
  font-size: 14px;
  color: #666666;
  margin: 12px;
}
.tishi {
    font-size: 14px;
    color: #999999;
    &.two {
        margin-left: 12px;
    }
}
.header {
  margin: 12px;
  padding: 12px;
  border-radius: 6px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  line-height: 1;
  .header-name {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  .userinfo {
    .name {
      font-size: 16px;
      font-weight: 600;
      color: #333333;
    }
  }
  .adress {
    font-size: 12px;
    color: #666666;
    margin-bottom: 6px;
  }
  .jianjie {
    margin-bottom: 0;
  }
}
.project {
  margin: 12px;
  font-size: 14px;
  color: #666666;
  .label {
    margin-bottom: 12px;
  }
}
.project-item {
  margin-bottom: 12px;
  font-size: 14px;
  color: #666666;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: flex-start;
  img {
    flex-shrink: 0;
    display: block;
    width: 110px;
    height: 80px;
    border-radius: 6px;
    margin-right: 20px;
    background-color: aquamarine;
  }
  .item-main {
    height: 80px;
    padding: 10px 0;
    font-size: 12px;
    color: #666666;
    div {
      margin-bottom: 5px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
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