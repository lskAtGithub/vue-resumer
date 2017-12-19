<template>
    <div id="editor">
        <nav>
            <ol>
                <li v-bind:class="{active: currentTab === 0}" v-on:click="currentTab = 0">
                    <svg class="icon">
                        <use xlink:href="#icon-shenfenzheng"></use>
                    </svg>
                </li>
                <li v-bind:class="{active: currentTab === 1}" v-on:click="currentTab = 1">
                    <svg class="icon">
                        <use xlink:href="#icon-book1"></use>
                    </svg>
                </li>
                <li v-bind:class="{active: currentTab === 2}" v-on:click="currentTab = 2">
                    <svg class="icon">
                        <use xlink:href="#icon-jiangbei1"></use>
                    </svg>
                </li>
                <li v-bind:class="{active: currentTab === 3}" v-on:click="currentTab = 3">
                    <svg class="icon">
                        <use xlink:href="#icon-gongzuoxinxi"></use>
                    </svg>
                </li>
                <li v-bind:class="{active: currentTab === 4}" v-on:click="currentTab = 4">
                    <svg class="icon">
                        <use xlink:href="#icon-xiangmu1"></use>
                    </svg>
                </li>
                <li v-bind:class="{active: currentTab === 5}" v-on:click="currentTab = 5">
                    <svg class="icon">
                        <use xlink:href="#icon-phone1"></use>
                    </svg>
                </li>
            </ol>
        </nav>
        <ol class="panes">

        </ol>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                currentTab: 0
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
    }
</style>