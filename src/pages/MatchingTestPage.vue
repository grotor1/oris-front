<template>
  {{ route.params.id }}

  {{ todoState.getTodo }}
</template>

<script setup>
import { useRoute } from 'vue-router'
import { todoState } from '../states/todo.js'

const route = useRoute();


</script>

<style>

</style>
