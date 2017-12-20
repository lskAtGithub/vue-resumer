<template>
    <div>
        <h2>教育经历</h2>
        <el-form>
            <div class="container" v-for="(item,index) in study">
                <el-form-item label="学校">
                    <el-input v-model="item.school"></el-input>
                </el-form-item>
                <el-form-item label="毕业时间">
                    <el-input v-model="item.duration"></el-input>
                </el-form-item>
                <el-form-item label="学位">
                    <el-input v-model="item.degree"></el-input>
                </el-form-item>
                <i class="el-icon-circle-close" v-on:click="removeItem(index)"></i>
                <hr>                      
            </div>
            <el-button type="primary" v-on:click="addItem()">添加经历</el-button>
        </el-form>
    </div>
</template>
<script>
    export default {
        props: ['study'],
        methods:{
            addItem(){
                this.study.push({
                    school:'', duration:'', degree:''
                })
            },
            removeItem(index){
                this.study.splice(index,1)
            }
        }
    }
</script>