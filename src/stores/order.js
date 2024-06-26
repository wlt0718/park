import { defineStore } from "pinia";
export const userOrderListStore = defineStore('orderList', {
    state: () => {
        return {
            list: [
                {
                    id: '10001',
                    status: '0',
                    projectName: '游艇',
                    projectjiage: 40,
                    projectNum: 3,
                    bili: 10,
                    yongjin: 4,
                    allAmount: 120,
                    person: '杨无敌',
                    orderTime: '2024-04-30 11:50:50',
                    merchantName: '上海迪士尼',
                    guideOrder: '1003202406060001',
                    jiesuan: 12,
                    jiesuanStatus: '0',
                    ddh: '2024043011505915602132165',
                },
                {
                    id: '10002',
                    status: '0',
                    projectName: '迪士尼摩天轮',
                    projectjiage: 100,
                    projectNum: 2,
                    bili: 10,
                    yongjin: 10,
                    allAmount: 200,
                    person: '杨无敌',
                    orderTime: '2024-04-30 11:50:50',
                    merchantName: '上海迪士尼',
                    guideOrder: '1003202406060001',
                    jiesuan: 20,
                    jiesuanStatus: '0',
                    ddh: '2024043011505915602132166'
                },
                {
                    id: '10003',
                    status: '1',
                    projectName: '游艇',
                    projectjiage: 40,
                    projectNum: 10,
                    bili: 10,
                    yongjin: 4,
                    allAmount: 400,
                    person: '杜拉拉',
                    orderTime: '2024-04-30 11:50:50',
                    merchantName: '上海迪士尼',
                    guideOrder: '1003202406060002',
                    jiesuan: 40,
                    jiesuanStatus: '0',
                    successTime: '2024-04-30 16:50:50',
                    ddh: '2024043011505915602132168'
                },
                {
                    id: '10004',
                    status: '1',
                    projectName: '迪士尼摩天轮',
                    projectjiage: 100,
                    projectNum: 5,
                    bili: 10,
                    yongjin: 10,
                    allAmount: 500,
                    person: '杜拉拉',
                    orderTime: '2024-04-30 11:50:50',
                    merchantName: '上海迪士尼',
                    guideOrder: '1003202406060002',
                    jiesuan: 50,
                    jiesuanStatus: '1',
                    successTime: '2024-04-30 17:50:50',
                    ddh: '2024043011505915602132169'
                },
                
            ]
        }
    },
    actions: {
        Set_list_status(id){
            const index = this.list.findIndex(el => {
                return el.id === id
            })
            this.list[index].status = '1'
        }
    }
    
})
