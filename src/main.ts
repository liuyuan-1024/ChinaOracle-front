import { createApp } from 'vue'
import pinia from '@/stores'
import router from '@/router'
import App from './App.vue'

// 引入全局样式
import './styles/global.scss'
//引入全局组件 SymbolIcon
import SymbolIcon from '@/components/SymbolIcon.vue'

const app = createApp(App)

app.use(router).use(pinia)
app.component('SymbolIcon', SymbolIcon)
app.mount('#app')
