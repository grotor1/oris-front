<script setup>
import CounterComponent from "@/component/CounterComponent.vue";
import { ref, watch } from "vue";
import { useRouter } from 'vue-router'

const router = useRouter();

const updateHandler = (value) => alert(value);

const count = ref(0);

watch(count, (value) => {
  console.log(value, 'change');
})

const handleLinkClick = () => {
  router.push('/about');
}
</script>

<template>
  <CounterComponent v-model="count">
    <template #label="{divider}">
      Бананы {{ divider }}
    </template>
  </CounterComponent>

  <span @click="handleLinkClick">
    to About
  </span>
</template>

<style scoped>

</style>
