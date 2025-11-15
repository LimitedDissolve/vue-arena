<script setup lang="ts" />

<template>
  <div class="not-found-container">
    <h1>404 - Страница не найдена</h1>
    <p>К сожалению, страница, которую вы ищете, не существует.</p>
    <router-link to="/">
      Перейти на главную
    </router-link>
  </div>
</template>

<style scoped>
.not-found-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
}
</style>
