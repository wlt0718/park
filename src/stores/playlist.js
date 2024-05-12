import { defineStore } from "pinia";
export const userPlayListStore = defineStore('userPlayListStore', {
    state: () => {
        return {
            data: [
                {
                    id: 1,
                    name: '上海欢乐谷',
                    project: '欢乐谷游艇',
                    num: 20,
                    amount: 60,
                    proportion: 5,
                    income: 60,
                    time: '2024年04月29日 11:30:30',
                    status: 0,
                    failText: ''
                },
                {
                    id: 2,
                    name: '上海欢乐谷',
                    project: '欢乐谷游艇',
                    num: 10,
                    amount: 60,
                    proportion: 5,
                    income: 30,
                    time: '2024年04月29日 11:30:30',
                    status: 1,
                    failText: ''
                },
                {
                    id: 3,
                    name: '上海欢乐谷',
                    project: '欢乐谷游艇',
                    num: 40,
                    amount: 60,
                    proportion: 5,
                    income: 120,
                    time: '2024年04月29日 11:30:30',
                    status: 2,
                    failText: ''
                },
                {
                    id: 4,
                    name: '上海欢乐谷',
                    project: '欢乐谷游艇',
                    num: 40,
                    amount: 60,
                    proportion: 5,
                    income: 120,
                    time: '2024年04月29日 11:30:30',
                    status: 0,
                    failText: ''
                },

            ],
        }
    },
    actions: {
        Set_data_add(value){
            this.data.push(value)
        }
    }
    
})
