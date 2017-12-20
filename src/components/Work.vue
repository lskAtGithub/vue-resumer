<template>
    <div>
        <h2>工作经历</h2>
        <el-form>
            <div class="container" v-for="(work,index) in work">
                <el-form-item label="公司名称">
                    <el-input v-model="work.company"></el-input>
                </el-form-item>
                <el-form-item label="工作内容">
                    <el-input v-model="work.content"></el-input>
                </el-form-item>
                <i class="el-icon-circle-close" v-on:click="removeWork(index)"></i>
                <hr>                      
            </div>
            <el-button type="primary" v-on:click="addWork()">添加经历</el-button>
        </el-form>
    </div>
</template>
<script>
    export default {
        props: ['work'],
        methods:{
            addWork(){
                this.work.push({
                    company:'',content:''
                })
            },
            removeWork(index){
                this.work.splice(index,1)
            }
        }
    }
</script>