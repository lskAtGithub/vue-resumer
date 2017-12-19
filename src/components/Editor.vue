<template>
    <div id="editor">
        <nav>
            <ol>
                <li v-for="i in [0,1,2,3,4,5]"
                    v-bind:class="{active: currentTab === i}"
                    v-on:click="currentTab = i">
                    <svg class="icon">
                        <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
                    </svg>                    
                </li>


            </ol>
        </nav>
        <ol class="panes">
            <li v-bind:class="{active: currentTab === 0}">
                <h2>个人信息</h2>
                <el-form>
                    <el-form-item label="姓名">
                        <el-input v-model="profile.name"></el-input>
                    </el-form-item>
                    <el-form-item label="所在城市">
                        <el-input v-model="profile.city"></el-input>
                    </el-form-item>
                    <el-form-item label="年龄">
                        <el-input v-model="profile.age"></el-input>
                    </el-form-item>
                </el-form>
            </li>
            <li v-bind:class="{active: currentTab === 1}">
                <h2>教育经历</h2>
            </li>
            <li v-bind:class="{active: currentTab === 2}">
                <h2>获奖情况</h2>
            </li>
            <li v-bind:class="{active: currentTab === 3}">
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
            </li>
            <li v-bind:class="{active: currentTab === 4}">
                <h2>项目经历</h2>
            </li>
            <li v-bind:class="{active: currentTab === 5}">
                <h2>联系方式</h2>
            </li>
        </ol>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                currentTab: 0,
                icons: ['shenfenzheng','book1','jiangbei1','gongzuoxinxi','xiangmu1','phone1'],
                profile:{
                    name:'',
                    city:'',
                    age:''
                },
                work: [
                    {company:'',content:''}
                ]
            }
        },
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

<style lang="scss">
    #editor{
        min-height: 200px;
        display: flex;

        > nav{
            background: #000;
            width: 80px;

            > ol > li{
                padding: 16px 0;
                text-align: center;

                > .icon {
                    width: 24px;
                    height: 24px;
                    fill: white;
                }

                &.active{
                    background: white;
                    > .icon{
                        fill: black;
                    }
                }
            }
        }

        > .panes {
            flex: 1;

            .container{
                position: relative;
                margin-bottom: 10px;

                .el-icon-circle-close{
                    position: absolute;
                    right: 5px;
                    top: 5px;
                }
            }

            > li{
                display: none;
                padding: 32px;
                height: 100%;
                overflow: auto;

                &.active{
                    display: block;
                }

                > h2{
                    margin-bottom: 20px;
                }
            }
        }
    }
</style>