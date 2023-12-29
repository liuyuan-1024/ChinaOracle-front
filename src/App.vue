<script lang="ts" setup>
import Layout from '@/layout/Layout.vue'
import Login from '@/views/login/Login.vue'

// 判断用户是否已登录
function isLogin(): boolean {
  // 未实现，现在默认用户已登录
  // todo 前端存储用户登录信息，以确认用户是否已登录
  return true
}
</script>

<template>
  <Login v-if="!isLogin()" />
  <Layout v-else />
</template>
