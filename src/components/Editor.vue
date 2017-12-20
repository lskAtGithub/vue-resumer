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
                <Info v-bind:profile="resume.profile" />
            </li>
            <li v-bind:class="{active: currentTab === 1}">
                <Study v-bind:study="resume.study" />
            </li>
            <li v-bind:class="{active: currentTab === 2}">
                <Winning v-bind:winning="resume.winning" />
            </li>
            <li v-bind:class="{active: currentTab === 3}">
                <Work v-bind:work="resume.work" />
            </li>
            <li v-bind:class="{active: currentTab === 4}">
                <Project v-bind:project="resume.project" />
            </li>
            <li v-bind:class="{active: currentTab === 5}">
                <Contact v-bind:contact="resume.contact" />
            </li>
        </ol>
    </div>
</template>

<script>
    import Info from './Info'
    import Work from './Work'
    import Study from './Study'
    import Contact from './Contact'
    import Winning from './Winning'
    import Project from './Project'

    export default {
        components:{ Info,Work,Study,Contact,Winning,Project },
        props: ['resume'],
        data(){
            return {
                currentTab: 0,
                icons: ['shenfenzheng','book1','jiangbei1','gongzuoxinxi','xiangmu1','phone1'],
                
            }
        },
        methods:{

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

                h2{
                    margin-bottom: 20px;
                }
            }
        }
    }
</style>