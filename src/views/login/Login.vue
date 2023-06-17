<script lang='ts'>
    export default {
        name: 'Login'
    };
</script>

<script lang='ts' setup>
    import { reactive } from 'vue';

    interface ModelType {
        email: string;
        password: string;
        rPassword: string;
    }

    const modelRef = reactive<ModelType>({
        email: 'ChinaOracle@qq.com',
        password: 'ChinaOracle',
        rPassword: ''
    });
</script>

<template>
    <div id='login-wrap'>

    </div>
</template>

<style scoped>
    #login-wrap {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(45deg, #29263d, #322f4a);
        border-radius: 10px;
        width: 50%;
        height: 50%;
    }
</style>
