<script lang='ts'>
    export default {
        name: 'TrafficLight'
    };
</script>

<script lang='ts' setup>
    // 关闭窗口
    function close() {
        window.ipcRenderer.send('close-window');
    }

    // 最小化窗口
    function minimize() {
        window.ipcRenderer.send('minimize-window');
    }

    // 最大化/还原窗口
    function maximize() {
        window.ipcRenderer.send('maximize-window');
    }
</script>

<template>
    <div id='traffic-lights'>
        <a class='light red' @click='close'></a>
        <a class='light yellow' @click='minimize'></a>
        <a class='light green' @click='maximize'></a>
    </div>
</template>

<style lang='scss' scoped>
    #traffic-lights {
        display: flex;
        justify-content: space-around;

        .light {
            align-self: center; /* 垂直居中 */
            width: 10px;
            height: 10px;
            border-radius: 50%;
            cursor: pointer;

            &:hover {
                opacity: 0.8;
            }
        }

        .yellow {
            background-color: #ffbf2b;
        }

        .red {
            background-color: #fd6458;
        }

        .green {
            background-color: #24cc3d;
        }
    }
</style>
