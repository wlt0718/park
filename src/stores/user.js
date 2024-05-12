import { defineStore } from "pinia";
export const userInfoStore = defineStore('userInfoStore', {
    state: () => {
        return {
            mobile: '',
            userType: '1',
            password: '',
            name: '导游小王',
            team: '靠谱导游团'
        }
    },
    actions: {
        SET_mobile(mobile){
            this.mobile = mobile
        },
        SET_userType(type){
            this.userType = type
        },
        SET_password(password){
            this.password = password
        },
        SET_name(name){
            this.name = name
        },
        SET_team(team){
            this.team = team
        },
    }
    
})
