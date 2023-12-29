<script lang="ts">
export default {
  name: 'AppBar',
}
</script>

<script lang="ts" setup></script>

<template>
  <div id="app-bar">
    <div></div>
    <!-- 搜索框 -->
    <n-input round placeholder="搜索">
      <template #prefix>
        <SymbolIcon size="12" name="searching" />
      </template>
    </n-input>
    <div></div>
    <img src="@/assets/images/avatar.jpg" alt="" class="avatar" />
  </div>
</template>

<style lang="scss" scoped>
#app-bar {
  display: grid;
  grid-template-columns: 4fr 4fr 2fr 40px;
  grid-template-rows: minmax(40px, auto);
  grid-column-gap: 10px;

  .avatar {
    border-radius: 10px;
  }
}

:deep(.n-input__input-el) {
  height: 100%;
}
</style>
