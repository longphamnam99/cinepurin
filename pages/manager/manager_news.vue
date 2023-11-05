<template>
    <div>   
        <div>
            <label for="">Tiêu đề:</label>
            <input v-model="manager.title"/>
        </div>
   </div>
   <div>   
        <div>
            <label for="">Nội Dung:</label>
            <input v-model="manager.content"/>
        </div>
   </div>
   <div>   
        <div>
            <label for="">Ngày Phát Hành:</label>
            <input v-model="manager.publish_date"/>
        </div>
        <b-button @click="clickAdd" variant="danger">Button</b-button>
   </div>
</template>

<script>
export default{
    props:{
        itemEdit:{
            type:Object,
            default:null,
        }
    },
    watch:{
        itemEdit(){
            if(this.itemEdit){
                this.manager = Object.assign({},this.itemEdit)
            }else{
                this.manager={}
            }
        }
    },
    methods:{
        clickAdd(){
            this.$emit("save",this.manager)
            this.manager={
                id:Math.floor(Math.random()*10000),
                title:"",
                content:"",
                publish_date:"",
            }
        }
    },
    data(){
        return{
            manager:{
                id:Math.floor(Math.random()*10000),
                title:"",
                content:"",
                publish_date:"",
            }
        }
    }
}
</script>

<style>

</style>