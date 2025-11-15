<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { TetrisView } from '~/components/05.modules/tetris'

// Карта доступных игровых компонентов
const gameComponents: Record<string, any> = {
  tetris: TetrisView,
}

const route = useRoute()
const sysname = computed(() => route.params.sysname as string)

const currentGameComponent = computed(() => {
  return gameComponents[sysname.value] || null
})
</script>

<template>
  <section class="game-wrapper">
    <component :is="currentGameComponent" v-if="currentGameComponent" />
    <div v-else class="not-found">
      <h1>Игра не найдена</h1>
      <p>Игра с системным именем "{{ sysname }}" не существует.</p>
      <router-link to="/">
        Вернуться на главную
      </router-link>
    </div>
  </section>
</template>

<style scoped>
.game-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 2rem;
  background-color: #f2edeb;
}

.not-found {
  text-align: center;
  padding: 2.5rem;
  border-radius: 8px;
  background-color: #f3d9e0;
  border: 1px solid #d2cdcb;
}

.not-found a {
  color: #e16032;
}
</style>
