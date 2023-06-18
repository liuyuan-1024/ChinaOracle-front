<script lang='ts'>
    export default {
        name: 'NavBar'
    };
</script>

<script lang='ts' setup>
    import Option from '@/components/Option.vue';
</script>

<template>
    <div id='nav-bar'>
        <Option class='hvr-grow' title='主页' to='Home'>
            <SymbolIcon name='zhuye1' />
        </Option>

        <div id='main-bar'>
            <div id='up-bar'>
                <Option class='hvr-grow' title='本地搜索'>
                    <SymbolIcon name='LOCALSEARCH' size='12px' />
                </Option>
                <Option class='hvr-grow' title='火箭'>
                    <SymbolIcon name='huojian' size='13px' />
                </Option>
                <Option class='hvr-grow' title='堆栈'>
                    <SymbolIcon color='#b194a7' name='stack' size='12px' />
                </Option>
                <Option class='hvr-grow' title='保存'>
                    <SymbolIcon color='#b194a7' name='save' size='11px' />
                </Option>
            </div>

            <div id='middle-bar'>
                <Option class='hvr-grow' title='闪电'>
                    <SymbolIcon name='shandian' size='12px' />
                </Option>
                <Option class='hvr-grow' title='过程'>
                    <SymbolIcon name='process' size='12px' />
                </Option>
                <Option class='hvr-grow' title='下载'>
                    <SymbolIcon name='xiazai' size='14px'
                                style='margin: -5px auto' />
                </Option>
                <Option class='hvr-grow' title='链接'>
                    <SymbolIcon name='lianjie' size='12px' />
                </Option>
            </div>
        </div>

        <div id='down-bar'>
            <Option class='hvr-grow' title='趋势'>
                <SymbolIcon name='zhexiantu' />
            </Option>
            <Option class='hvr-grow' title='钻石'>
                <SymbolIcon name='zuanshi' />
            </Option>
        </div>

        <Option class='hvr-grow' title='世界' to='World'>
            <SymbolIcon name='faxian' />
        </Option>
    </div>
</template>

<style lang='scss' scoped>
    #nav-bar {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        float: left;

        #main-bar {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 85%;
            height: 50%;

            #up-bar,
            #middle-bar {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                height: 49%;
                padding: 10% 0;
                border-radius: 15px;
            }

            #up-bar {
                background-color: #432a49;
            }

            #middle-bar {
                background-color: #332855;
            }
        }

        #down-bar {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            height: 18%;
            padding-bottom: 80%;
        }
    }

    /* icon图标的悬浮动画：Grow */
    .hvr-grow {
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: transform;
        transition-property: transform;
    }

    .hvr-grow:hover,
    .hvr-grow:focus,
    .hvr-grow:active {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>
