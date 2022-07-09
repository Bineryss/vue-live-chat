<template>
	<div class="container">
		<Navbar/>
		<ChatWindow/>
		<NewChatForm/>
	</div>
</template>

<script setup>
	import Navbar from '@/components/Navbar'
	import getUser from '@/core/GetUser'
	import { watch } from 'vue'
	import { useRouter } from 'vue-router'
	import NewChatForm from '@/components/NewChatForm'
	import ChatWindow from '@/components/ChatWindow'

	const { user } = getUser()
	const router = useRouter()

	watch(user, () => {
		if (user.value) {
			return
		}

		router.push({ name: 'Welcome' })
	})
</script>

<style scoped>

</style>