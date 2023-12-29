<template>
  <svg :style="iconClass" aria-hidden="true" class="icon">
    <use :xlink:href="iconTag"></use>
  </svg>
</template>

<script lang="ts">
export default {
  name: 'SymbolIcon',
}
</script>

<script lang="ts" setup>
import '@/assets/iconfont.js'
import { computed } from '@vue/reactivity'

const props = defineProps<{
  name: string
  size?: string
  color?: string
}>()

const iconTag = computed(() => {
  return `#icon-${props.name}`
})

const iconClass = computed(() => {
  let result: string = ''

  if (props.size) {
    result = result + `font-size: ${props.size};`
  }

  if (props.color) {
    result = result + `color: ${props.color};`
  }

  return result
})
</script>

<style scoped>
.icon {
  width: 2em;
  height: 2em;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
}
</style>
