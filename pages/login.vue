<template>
    <div class="h-screen flex justify-center bg-white" style="padding-top: 200px;">
      <div class="w-full max-w-md p-6">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-black">Log in</h2>
          <div class="mt-2 text-gray-600">
            Don't have an account?
            <NuxtLink to="/signup" class="text-black font-bold underline hover:text-gray-700">Sign Up</NuxtLink>
          </div>
        </div>
        <div class="mt-2 space-y-6">
          <div>
            <label for="email" class="block text-sm font-bold text-gray-700">Email:</label>
            <input id="email" type="email" placeholder="you@example.com" class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-gray-400"/>
          </div>
  
          <div>
            <div class="flex justify-between">
              <label for="password" class="block text-sm font-bold text-gray-700">Password:</label>
              <NuxtLink to="/" class="text-sm text-gray-600 hover:text-gray-800 hover:underline">Forgot password?</NuxtLink>
            </div>
            <input id="password" type="password" placeholder="Your password" class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-gray-400"/>
          </div>
          <button
            class="w-full py-2 px-4 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Log in
          </button>
        </div>
      </div>
    </div>
</template>
  