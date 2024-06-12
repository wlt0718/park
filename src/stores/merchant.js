import { defineStore } from "pinia";
export const userMerchantStore = defineStore('userMerchantStore', {
    state: () => {
        return {
            list: [
                {
                    id: 0,
                    merchantName: '上海迪士尼',
                    address: '上海市浦东新区川沙镇黄赵路310号',
                    status: '1' 
                },
                {
                    id: 1,
                    merchantName: '上海共青森林公园',
                    address: '上海市杨浦区军工路2000号',
                    status: '1' 
                },
                {
                    id: 2,
                    merchantName: '上海动物园',
                    address: '上海市长宁区虹桥路2381号',
                    status: '0' 
                },
                {
                    id: 3,
                    merchantName: '上海市欢乐谷',
                    address: '上海市松江区佘山镇林湖路888号',
                    status: '2' 
                },
            ]
        }
    },
    actions: {
        // 增加商家
        Set_list_add(obj){
            this.list.push(obj)
        },
        // 删除商家
        Set_list_remove(id){
            const index = this.list.findIndex(el => {
                return el.id === id
            })
            this.list.splice(index, 1)
        }
    }
    
})
