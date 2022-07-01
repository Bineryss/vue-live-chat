<template>
  <nav>
    <div>
      <p>Hey there... user</p>
      <p class="email">Currently logged in as... email</p>
    </div>
    <button @click="handleClick">logout</button>
  </nav>
</template>

<script setup>
import useLogout from '@/core/UseLogout'

const { error, logout } = useLogout()

const handleClick = async () => {
  await logout()
  if (!error.value) {

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