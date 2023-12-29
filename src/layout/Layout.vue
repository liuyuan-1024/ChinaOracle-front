<script lang="ts">
export default {
  name: 'Layout',
}
</script>

<script lang="ts" setup>
import TrafficLight from './components/TrafficLight.vue'
import SystemBar from './components/SystemBar.vue'
import Logo from './components/Logo.vue'
import AppBar from './components/AppBar.vue'
import SideBar from './components/SideBar.vue'

import { useRoute } from 'vue-router'
</script>

<template>
  <div id="layout">
    <TrafficLight />
    <SystemBar />
    <Logo />
    <AppBar />
    <SideBar />
    <!-- 主内容展示区 -->
    <div id="main">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" v-if="useRoute().meta.keepAlive" />
        </keep-alive>
        <component :is="Component" v-if="!useRoute().meta.keepAlive" />
      </router-view>
    </div>
  </div>
</template>

<style scoped>
#layout {
  width: 100vw;
  height: 100vh;
  padding: 3px 8px 8px;
  display: grid;
  grid-template-rows: 20px 40px 1fr;
  grid-template-columns: 40px 1fr;
  grid-column-gap: 8px;
}

#main {
  margin-top: 8px;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
