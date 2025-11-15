<script setup lang="ts">
import { AppRoutePaths } from '~/shared/constants/routes'

const games = [
  { name: 'Tetris', sysname: 'tetris' },
]
</script>

<template>
  <section class="root-wrapper">
    <h1>Welcome to Vue Arena!</h1>
    <p>Choose a game to play:</p>
    <ul>
      <li v-for="game in games" :key="game.sysname">
        <router-link :to="AppRoutePaths.Game(game.sysname)">
          {{ game.name }}
        </router-link>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.root-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 1rem 0;
}

a {
  font-size: 2rem;
}

a:hover {
  text-decoration: underline;
}
</style>
