<script setup>
//composition API 방식 -
//defineProps
//부모 컴포넌트에서 전달받은 프로퍼티를 정의하는 함수

defineProps({
  id: [Number, String], //문자열과 숫자형만 가능
  name: String, //문자열만 가능
  checked: {
    type: Boolean, //Boolean 타입만 가능
    default: false, //checked에 값이 넘어오지 않으면 기본값은 false
    required: false, //필수 조건, true면 무조건 필요한 값
  },
});
</script>

<template>
  <!-- 객체 형태로 받아옴 -->
  <li><input type="checkbox" :checked="idol.checked" />{{ idol.name }}</li>
</template>

<style scoped></style>
