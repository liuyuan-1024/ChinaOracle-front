<script lang="ts">
export default {
  name: 'Login',
}
</script>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import Option from '@/components/Option.vue'
import { FormInst, FormItemInst, FormItemRule, useMessage, FormRules } from 'naive-ui'

interface ModelType {
  email: string
  password: string
  rPassword: string
}

const modelRef = reactive<ModelType>({
  email: 'ChinaOracle@qq.com',
  password: 'ChinaOracle',
  rPassword: '',
})

const rules: FormRules = {
  email: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value) {
          return new Error('邮箱不能为空！')
        } else if (
          !/^[A-Za-z0-9]+([-._][A-Za-z0-9]+)*@[A-Za-z0-9]+(-[A-Za-z0-9]+)*(\.[A-Za-z]{2,6}|[A-Za-z]{2,4}\.[A-Za-z]{2,3})$/.test(
            value,
          )
        ) {
          return new Error('邮箱格式错误！')
        }
        return true
      },
      trigger: ['input', 'blur'],
    },
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
    },
  ],
  rPassword: [
    {
      required: false,
      message: '请再次输入密码',
      trigger: ['input', 'blur'],
    },
  ],
}

let action = ref('')
</script>

<template>
  <div id="login-wrap">
    <n-form
      ref="formRef"
      :model="modelRef"
      :rules="rules"
      label-placement="left"
      label-width="auto"
      require-mark-placement="right-hanging"
      size="medium"
      :style="{
        maxWidth: '640px',
      }">
      <n-form-item path="email">
        <n-input v-model:value="modelRef.email" placeholder="邮箱" />
      </n-form-item>

      <n-form-item path="password">
        <n-input v-model:value="modelRef.password" type="password" placeholder="密码" />
      </n-form-item>

      <n-form-item>
        <n-space>
          <n-button type="success"> 登录 </n-button>
          <n-button type="warning"> 注册 </n-button>
          <n-button type="error"> 忘记密码 </n-button>
        </n-space>
      </n-form-item>

      <n-form-item>
        <n-space>
          <span> 其他登录方式: </span>
          <div id="other-items">
            <Option title="Github">
              <SymbolIcon name="github" />
            </Option>
            <Option title="微信">
              <SymbolIcon name="weixin" />
            </Option>
          </div>
        </n-space>
      </n-form-item>
    </n-form>
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
  padding: 4% 8%;
}
</style>
