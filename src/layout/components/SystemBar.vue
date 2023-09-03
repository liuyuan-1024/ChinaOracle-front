<!-- 系统状态栏 -->

<script lang='ts'>
    export default {
        name: 'SystemBar'
    };
</script>

<script lang='ts' setup>
    import { SystemBarStore } from '@/stores';
</script>

<template>
    <div id='system-bar'>{{ SystemBarStore().systemBarTitle }}</div>
</template>

<style lang='scss' scoped>
    #system-bar {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
    }
</style>
