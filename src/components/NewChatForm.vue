<template>
	<form>
    <textarea
				placeholder="Type a message and hit enter to send..."
				v-model="message"
				@keydown.enter.prevent="handleSubmit"
		></textarea>
		<div class="error">{{ error }}</div>
	</form>
</template>

<script setup>
	import { ref } from 'vue'
	import getUser from '@/core/GetUser'
	import { timestamp } from '@/firebase/config'
	import useCollection from '@/core/collection/UseCollection'

	const message = ref('')
	const { user } = getUser()
	const { addDoc, error } = useCollection('messages')

	const handleSubmit = async () => {
		const chat = {
			name: user.value.displayName,
			message: message.value,
			createdAt: timestamp()
		}
		await addDoc(chat)
		if (error.value) {
			return
		}

		message.value = ''
	}

</script>

<style scoped>
	form {
		margin: 10px;
	}

	textarea {
		width: 100%;
		max-width: 100%;
		margin-bottom: 6px;
		padding: 10px;
		box-sizing: border-box;
		border: 0;
		border-radius: 20px;
		font-family: inherit;
		outline: none;
		resize: vertical;
		min-height: 50px;
	}

</style>