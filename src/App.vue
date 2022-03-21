<script setup>
</script>

<template>
  <header>
    <div class="container">
      <h1>Header</h1>
    </div>
  </header>
  <RouterView />
  <footer>
    <div class="container">
      <h1>Footer</h1>
    </div>
  </footer>
</template>

<style lang="scss">
@import "@/assets/css/style.scss";
header {
  h1 {
    color: red;
  }
}
</style>
