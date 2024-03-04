<script setup>
import Counter from "@/components/Counter.vue";
import {ref, watch} from "vue";

const updateHandler = (value) => alert(value);

const count = ref(0);

watch(count, (value) => {
  console.log(value, 'change');
})
</script>

<template>
  <Counter v-model="count">
    <template #label="{divider}">
      Бананы {{divider}}
    </template>
  </Counter>
</template>

<style scoped>

</style>
