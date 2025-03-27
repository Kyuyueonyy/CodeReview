06_단일파일컴포넌트/test-vue-app/src/App.vue
<script setup>
import CheckboxItem from './components/CheckBoxItem.vue';
import { ref } from 'vue';

const idols = ref([
  { id: 1, name: 'BTS', checked: true },
  { id: 2, name: 'Black Pink', checked: false },
  { id: 3, name: 'EXO', checked: false },
  { id: 4, name: 'ITZY', checked: false },
]);
</script>

<template>
  <h1>App 컴포넌트</h1>
  <hr />
  <!-- 부모가 자식한테  데이터를 넘겨주는 문법 -->
  <CheckboxItem
    v-for="idol in idols"
    :key="idols.id"
    :name="idol.name"
    :checked="idol.checked"
  />
</template>

<style scoped></style>
