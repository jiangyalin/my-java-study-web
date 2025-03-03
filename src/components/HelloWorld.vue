<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <p>{{ config }}</p>
    <p>{{ skin.skinConfig.primaryColor }}</p>
    <p>{{ skin.skinConfig.darkTheme }}</p>
  </div>
</template>

<script setup lang="ts">
import config from '@/config'
import { useSkin } from 'br-dionysus'

const skin = useSkin()

defineProps<{
  msg: string
}>()
</script>

<style scoped>
</style>
