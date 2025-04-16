<template>
  <app-header></app-header>
  <router-view />
</template>

<script setup>
import AppHeader from '@/components/header/AppHeader.vue'
</script>

<style lang="scss" scoped>
@use '@/assets/css/main';
</style>
