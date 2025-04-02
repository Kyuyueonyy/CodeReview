<template>
  <div>
    x : <input type="text" v-model.number="x" />
    <br />
    결과 : {{ result }}
  </div>
</template>
<script setup>
import { ref, watch } from 'vue';

const x = ref(0); // 0으로 초기화
const result = ref(0); // 0으로 초기화

watch(x, (current, old) => {
  console.log(`이전 값 : ${old}, 새로운 값: ${current}`);
  result.value = current;
});
</script>
