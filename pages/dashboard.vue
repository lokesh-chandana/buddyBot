<template>
  <div class="min-h-screen bg-white text-black flex flex-col items-center pt-40 px-4">
    <div class="text-center mb-10">
      <h1 class="text-2xl sm:text-3xl font-semibold">Good afternoon, Lokesh.</h1>
      <p class="text-lg sm:text-xl text-gray-600 mt-2">How can I help you today?</p>
    </div>

    <div class="w-full max-w-xl">
      <div class="bg-gray-100 border border-gray-300 rounded-2xl p-4 flex items-center space-x-2 shadow-sm">
        <input
          v-model="message"
          type="text"
          placeholder="What do you want to know?"
          class="flex-1 bg-transparent text-black placeholder-gray-500 focus:outline-none"
        />
        <button
          @click="sendMessage"
          class="bg-black hover:bg-gray-800 text-white p-2 rounded-full transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const message = ref('')

const sendMessage = () => {
  if (message.value.trim()) {
    console.log('Sending message:', message.value)
    // Add your logic here (API call etc.)
    message.value = ''
  }
}
</script>
