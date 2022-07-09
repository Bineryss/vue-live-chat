<template>
	<div class="chat-window">
		<div v-if="error">{{ error }}</div>
		<div v-if="documents" class="messages" ref="messages">
			<div v-for="doc in formattedDocuments" :key="doc.id" class="single">
				<span class="name">{{ doc.name }}</span>
				<span class="created-at">{{ doc.createdAt }} ago</span>
				<span class="message">{{ doc.message }}</span>
			</div>
		</div>
	</div>
</template>

<script setup>
	import getCollection from '@/core/collection/GetCollection'
	import { formatDistanceToNow } from 'date-fns'
	import { computed, onUpdated, ref } from 'vue'

	const { error, documents } = getCollection('messages')

	const formattedDocuments = computed(() => {
		if (documents.value) {
			return documents.value.map(doc => {
				let time = formatDistanceToNow(doc.createdAt.toDate())
				return { ...doc, createdAt: time }
			})
		}
	})

	const messages = ref(null)

	onUpdated(() => {
		messages.value.scrollTop = messages.value.scrollHeight
	})
</script>

<style scoped>
	.chat-window {
		padding: 30px 20px;
		border-bottom: 1px solid #eee;
	}

	.single {
		margin: 18px 0;
	}

	.created-at {
		color: #999999;
		font-size: 12px;
		margin-bottom: 4px;
	}

	.name {
		font-weight: bold;
		margin-right: 6px;
	}

	.messages {
		max-height: 400px;
		overflow: auto;
	}

	.message {
		display: block;
	}

	/* Track */
	::-webkit-scrollbar-track {
		border-radius: 20px;
	}
</style>