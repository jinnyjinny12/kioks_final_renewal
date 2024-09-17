<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <h1>수정 테스트입니다! </h1>
  <RouterView/>
</template>

<style scoped>
header{
  display: flex;
  flex-direction: column;
  align-items: center;
}
a{
  margin-left: 10px;
  font-size: 20px;
}
</style>
