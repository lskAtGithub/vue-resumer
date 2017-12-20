<template>
    <div>
        <h2>项目经历</h2>
        <el-form>
            <div class="container" v-for="(item,index) in project">
                <el-form-item label="项目名">
                    <el-input v-model="item.name"></el-input>
                </el-form-item>
                <el-form-item label="项目描述">
                    <el-input v-model="item.degree"></el-input>
                </el-form-item>
                <el-form-item label="项目总结">
                    <el-input v-model="item.summary"></el-input>
                </el-form-item>
                <i class="el-icon-circle-close" v-on:click="removeItem(index)"></i>
                <hr>                      
            </div>
            <el-button type="primary" v-on:click="addItem()">添加项目</el-button>
        </el-form>
    </div>
</template>
<script>
    export default {
        props: ['project'],
        methods:{
            addItem(){
                this.project.push({
                    name:'', degree:'',preview:'',summary:''
                })
            },
            removeItem(index){
                this.project.splice(index,1)
            }
        }
    }
</script>