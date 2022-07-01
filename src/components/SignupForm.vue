<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="user name" v-model="userName">
    <input type="email" required placeholder="email" v-model="email">
    <input type="password" required placeholder="password" v-model="password">
    <div class="error">{{ error }}</div>
    <button>Sign up</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import useSignup from '@/core/UseSignup'

const { error, signup } = useSignup()
const emit = defineEmits(['signup'])

const userName = ref('')
const email = ref('')
const password = ref('')

const handleSubmit = async () => {
  await signup(email.value, password.value, userName.value)

  if (!error.value) {
    return
  }
  emit('signup')
}

</script>

<style scoped>

</style>