<script setup>
//composition API 방식 -
//defineProps
//부모 컴포넌트에서 전달받은 프로퍼티를 정의하는 함수

defineProps(['idol']);
</script>
<template>
  <!-- 객체 형태로 -->
  <li><input type="checkbox" :checked="idol.checked" />{{ idol.name }}</li>
</template>

<style scoped></style>
