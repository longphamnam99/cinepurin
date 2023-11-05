<template>
    <div>
        <h1>Quan ly tin tuc</h1>
        <manager_news :itemEdit = news @save="clickSave" />
        <label class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tiêu Đề</th>
                    <th>Nội Dung</th>
                    <th>Ngày Phát Hành</th>
                    <th>ID_Chính Sách</th>
                    <th>Chức Năng</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in list" :key="item.id">
                    <th>{{ item.id }}</th>
                    <th>{{ item.title }}</th>
                    <th>{{ item.content }}</th>
                    <th>{{ item.publish_date }}</th>
                    <th>{{ item.policy_id }}</th>
                    <th>
                        <button @click="clickEdit(item)">
                            Edit
                        </button>
                        <button @click="clickDelete(item)">
                            Delete
                        </button>
                    </th>
                </tr>
            </tbody>
        </label>
    </div>
</template>

<script>
import manager_news from "./manager_news"
export default{
    conpoments:{
        manager_news    
    },
    methods:{
        clickSave(itemSave){
           let index = this.list.findIndex((c)=>c.id===itemSave.id)
           if(index>= 0){
            this.list.splite(index,1,itemSave)
           }else{
            let max = 0;
            let newID = 0;
            for(let i=0;i<this.list.length;i++){
                if(this.list[i].id>max){
                    max=this.list[i].id
                }               
            }
           }
           return;
           }
        ,
        clickDelete(itemDelete){
            for(let i=0;i<this.list.length;i++){
                if(itemDelete.id=== this.list[i].id){
                    this.list.splite(i,1)
                }
            }
        }
        ,
        clickEdit(itemEdit){
            console.log(itemEdit)
            this.news = itemEdit
        }
    },

    data(){
        return{
            news:{},
            list:[
                {
                    id:1,
                    title:"cô dâu 8 tuổi",
                    content:"abc xyz alo alo ở đây có nè",
                    publish_date:'01.02.2023',
                    policy_id:'1'
                },
                {
                    id:2,
                    title:"cô dâu 9 tuổi",
                    content:"abc xyz alo alo ở đây có nè",
                    publish_date:'01.02.2023',
                    policy_id:'1'
                },
                {
                    id:3,
                    title:"cô dâu 10 tuổi",
                    content:"abc xyz alo alo ở đây có nè",
                    publish_date:'01.02.2023',
                    policy_id:'1'
                },
            ]
        }
    }
}
</script>

<style>
</style>