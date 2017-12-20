<template>
    <div>
        <h2>获奖情况</h2>
        <el-form>
            <div class="container" v-for="(item,index) in winning">
                <el-form-item label="获得奖项">
                    <el-input v-model="item.getWin"></el-input>
                </el-form-item>
                <el-form-item label="奖项描述">
                    <el-input v-model="item.describe"></el-input>
                </el-form-item>
                <i class="el-icon-circle-close" v-on:click="removeItem(index)"></i>
                <hr>                      
            </div>
            <el-button type="primary" v-on:click="addItem()">添加荣誉</el-button>
        </el-form>
    </div>
</template>
<script>
    export default {
        props: ['winning'],
        methods:{
            addItem(){
                this.winning.push({
                    getWin:'', describe:''
                })
            },
            removeItem(index){
                this.winning.splice(index,1)
            }
        }
    }
</script>