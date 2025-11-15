<script setup lang="ts">
import '~/assets/main.css'
</script>

<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>
