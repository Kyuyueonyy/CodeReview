<script setup>
import Child4 from './Child4.vue';
import { ref } from 'vue';

const slotName = ref('header');
</script>

<template>
  <!-- 
   scoped slot
   - 자식이 넘겨준 데이터를 이용해서 부모가 콘텐츠를 제공함
   
    -->
  <div style="border: 2px solid blue; padding: 10px">
    <Child4 v-slot:item="{ item }">
      <h3>{{ item.name }}</h3></Child4
    >
  </div>
</template>

<style scoped></style>
