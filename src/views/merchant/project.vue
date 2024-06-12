<script setup>
import { useRoute } from 'vue-router'
import { ref, reactive } from 'vue';
const route = useRoute()
const data = reactive([
// status: 0 审核中，1 审核通过，2 审核失败 
  {
    id: 0,
    merchantName: '上海迪士尼',
    address: '上海市浦东新区川沙镇黄赵路310号',
    jianjie: '上海迪士尼乐园占地1.16平方公里，主题园区分为米奇大街、奇想花园、探险岛、宝藏湾、明日世界、梦幻世界、迪士尼·皮克斯玩具总动员。拥有迪士尼城堡、漫威英雄总部、巴斯光年星际营救等游乐项目',
    status: '1' 
  },
  {
    id: 1,
    merchantName: '上海共青森林公园',
    address: '上海市杨浦区军工路2000号',
    jianjie: '上海共青国家森林公园是以森林为主要景观的特色公园，共种植200余种树木，总数达30多万株。公园分为南北两园，北园占地1631亩称为共青森林公园，南园占地239.6亩称为万竹园。南北园风格各异，北园着重森林景色，有丘陵湖泊草地，南园则小桥流水一派南国风光。除观景之外，游人也可在园内骑马，烧烤和垂钓。',
    status: '1' 
  },
  {
    id: 2,
    merchantName: '上海动物园',
    address: '上海市长宁区虹桥路2381号',
    jianjie: '上海动物园占地面积743000平方米，饲养展出动物的馆舍面积有47237平方米。自建园以来，已累计接待近1亿6000万游客，是集娱乐休闲、动物知识普及、科学技术研究及野生动物保护的四大职能兼具的综合性公园。',
    status: '0' 
  },
  {
    id: 3,
    merchantName: '上海市欢乐谷',
    address: '上海市松江区佘山镇林湖路888号',
    jianjie: '上海欢乐谷全园占地面积65万平方米，拥有100多项体验项目，上海欢乐谷全园共有七大主题区：阳光港、欢乐时光、上海滩、香格里拉、欢乐海洋、金矿镇、飓风湾',
    status: '2' 
  },
])
const merchantProject = reactive([
  {
    parentId: 0,
    project: [
      {
        projectId: '1001',
        projectName: '迪士尼游艇',
        amount: 100,
        bili: 5,
        yongjin: 5,
      },
      {
        projectId: '1002',
        projectName: '迪士尼摩天轮',
        amount: 100,
        bili: 20,
        yongjin: 20,
      },
      {
        projectId: '1003',
        projectName: '天地双雄',
        amount: 50,
        bili: 10,
        yongjin: 5,
      },
      {
        projectId: '1004',
        projectName: '恐龙乐园',
        amount: 100,
        bili: 10,
        yongjin: 10,
      },
    ]
  },
  {
    parentId: 1,
    project: [
      {
        projectId: '2001',
        projectName: '小鲤鱼历险记',
        amount: 100,
        bili: 5,
        yongjin: 5,
      },
      {
        projectId: '2002',
        projectName: '4D空间',
        amount: 100,
        bili: 20,
        yongjin: 20,
      },
      {
        projectId: '2003',
        projectName: '摩天轮',
        amount: 50,
        bili: 10,
        yongjin: 5,
      },
    ]
  },
])
const id = route.query.id
const merchant = ref({
  name: data[id].merchantName,
  address: data[id].address,
  jianjie: data[id].jianjie
})
const merchantPorject = ref(merchantProject[id].project)
</script>
<template>
<div class="header">
  <div class="header-name">
    <div class="userinfo">
      <div class="name">
        <span>{{merchant.name}}</span>
      </div>
    </div>
  </div>
  <div class="adress">
    <van-text-ellipsis rows="2" :content="merchant.jianjie" expand-text="展开" collapse-text="收起" position="end" />
  </div>
  <div class="adress jianjie">地址：{{ merchant.address }}</div>
</div>
<div class="project">
  <div class="label">全部项目</div>
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
<style lang="scss" scoped>
.header {
  background-color: #fff;
  width: 100%;
  padding: 20px 20px 12px;
  line-height: 1;
  .header-name {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  .userinfo {
    .name {
      font-size: 18px;
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
</style>