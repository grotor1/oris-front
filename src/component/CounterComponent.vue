<script setup>
import {computed, onBeforeMount, onBeforeUnmount, onMounted, onUpdated, ref, watch} from "vue";

const props = defineProps({
  modelValue: Number,
  initial: {
    type: Number,
    default: 4,
  }, // String, Object, Function
});

const emits = defineEmits(['update:modelValue']);

const count = ref(props.initial);

const double = computed(() => count.value * 2);

watch(count, (value) => {
  emits('update:modelValue', value);
})

watch(() => props.modelValue, (value) => {
  count.value = value;
})
</script>

<template>
  <div class="container">
    <button @click="count += 1">
      +
    </button>

    <span>
      <slot name="label" divider=":"/> {{ count }}
    </span>

    <button @click="count -= 1">
      -
    </button>

    <input v-model="count"
           type="number">

    {{ double }}

    {{ initial }}

    <span v-for="(item, index) in count" :key="index">
      {{item}}
    </span>

    <span v-if="count !== 0">
      Бананчики
    </span>

    <span v-else>
     Нет бананчиков
    </span>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 8px
}
</style>
