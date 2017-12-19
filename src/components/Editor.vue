<template>
    <div id="editor">
        <nav>
            <ol>
                <li class="active">
                    <svg class="icon">
                        <use xlink:href="#icon-shenfenzheng"></use>
                    </svg>
                </li>
                <li>
                    <svg class="icon">
                        <use xlink:href="#icon-work"></use>
                    </svg>
                </li>
                <li>
                    <svg class="icon">
                        <use xlink:href="#icon-project"></use>
                    </svg>
                </li>
                <li>
                    <svg class="icon">
                        <use xlink:href="#icon-book"></use>
                    </svg>
                </li>
                <li>
                    <svg class="icon">
                        <use xlink:href="#icon-jiangbei"></use>
                    </svg>
                </li>
                <li>
                    <svg class="icon">
                        <use xlink:href="#icon-phone"></use>
                    </svg>
                </li>
            </ol>
        </nav>
        <ol class="panes">

        </ol>
    </div>
</template>

<style lang="scss">
    #editor{
        min-height: 200px;
        display: flex;
        > nav{
            background: #000;
            width: 80px;

            > ol > li{
                border: 1px solid red;
                padding: 8px 0;
                text-align: center;

                > .icon {
                    width: 24px;
                    height: 24px;
                    fill: #fff;
                }

                &.active{
                    background: #fff;
                    > .icon{
                        fill: #000;
                    }
                }
            }
        }
    }
</style>