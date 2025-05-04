<template>
    <div class="h-screen flex justify-center bg-white" style="padding-top: 200px;">
      <div class="w-full max-w-md p-6">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-black">Sign Up</h2>
          <div class="mt-2 text-gray-600">
            Already have an account?
            <NuxtLink to="/login" class="text-black font-bold underline hover:text-gray-700">Log In</NuxtLink>
          </div>
        </div>
        <div class="mt-2 space-y-6">
          <div>
            <label for="email" class="block text-sm font-bold text-gray-700">Email:</label>
            <input id="email" type="email" v-model="email" placeholder="you@example.com" class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-gray-400"/>
          </div>
  
          <div>
            <div class="flex justify-between">
              <label for="password" class="block text-sm font-bold text-gray-700">Password:</label>
            </div>
            <input id="password" type="password" v-model="password" placeholder="Your password" class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-gray-400"/>
          </div>
          <button
            class="w-full py-2 px-4 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
            @click="signup">
            Sign Up
          </button>
        </div>
      </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const signup = async () => {
  try {
    const res = await $fetch('/api/signup', {
      method: 'POST',
      body: { email: email.value, password: password.value }
    })

    alert(res.message)
  } catch (err) {
    console.error(err)
    alert('Signup failed.')
  }
}
</script>