<template>
  <header class="flex justify-between items-center p-4 bg-white">
    <NuxtLink to="/">
      <div class="text-2xl font-bold">
        <span class="text-black">Buddy</span><span class="text-gray-500">Bot</span>
      </div>
    </NuxtLink>
    <div class="flex gap-4">
      <NuxtLink to="/signup" class="text-black font-bold hover:text-gray-700">Sign Up</NuxtLink>
      <NuxtLink to="/login" class="text-black font-bold hover:text-gray-700">Login</NuxtLink>
    </div>
  </header>
</template>
  