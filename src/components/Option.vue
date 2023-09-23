<script lang='ts'>
    export default {
        name: 'Option'
    };
</script>

<script lang='ts' setup>
    import RouterUtils from '@/utils/base/RouterUtils';

    const props = defineProps<{
        title?: string
        // 跳转路由的name或path
        to?: string
    }>();

    function handClick() {
        if (props.to) {
            RouterUtils.push(props.to);
        }
    }
</script>

<template>
    <div id='menu-item' :data-title='props.title'
         @click.prevent='handClick'>
        <slot />
    </div>
</template>

<style lang='scss' scoped>
    #menu-item {
        display: inline;
        position: relative;
        cursor: pointer;

        &[data-title]:hover:after {
            content: attr(data-title);
            position: absolute;
            left: 100%;
            font-size: 12px;
            color: #9994ba;
            background-color: #2e2b43;
            border-radius: 3px;
            width: max-content;
            padding: 3px;
        }
    }
</style>
