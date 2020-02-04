<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ul>
      <li> <router-link to="/tasks">Task Page</router-link> </li>
      <li> <router-link to="/cadastro">Cadastro</router-link> </li>
      <li> <router-link to="/user/123">User</router-link> </li>
    </ul>
    <Tasks></Tasks>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
