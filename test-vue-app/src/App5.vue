06_단일파일컴포넌트/test-vue-app/src/App.vue
<script setup>
import { ref } from 'vue';
import InputName from './components/inputName.vue';

const parentName = ref('');

const nameChangeHandler = (event) => {
  parentName.value = event.childName;
};
</script>

<template>
  <h1>App5 컴포넌트</h1>
  <hr />
  <div>
    <InputName @nameChange="nameChangeHandler" />
    <h3>App Data : {{ parentName }}</h3>
  </div>
</template>

<style scoped></style>
