<template>
  <nav v-if="user">
    <div>
      <p>Hey there {{ user.displayName.toUpperCase() }}</p>
      <p class="email">Currently logged in as {{ user.email }}</p>
    </div>
    <button @click="handleClick">logout</button>
  </nav>
</template>

<script setup>
import useLogout from '@/core/authentication/UseLogout'
import getUser from '@/core/GetUser'
import { useRouter } from 'vue-router'

const { error, logout } = useLogout()
const { user } = getUser()
const router = useRouter()

const handleClick = async () => {
  await logout()
  if (error.value) {
    console.log(error.value)
  }
}
</script>

<style scoped>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}

nav p.email {
  font-size: 14px;
  color: #999;
}
</style>