<script>
export default {
  name: 'HeaderLayout',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {}
  },
}
</script>

<template>
  <header class="hd">
    <h1>작심</h1>
  </header>
</template>

<!-- 해당 컴포넌트에 연결된 css는 따로 연결해주는게 좋다
 main.css에 한번에 다 쓰는것보다! -->
<style scoped>
/* 앱제목 header영역 */
.hd {
  /* border: 1px solid yellow; */
  background-color: var(--gray600);
  padding: var(--space-l) 0 calc(var(--space-l) * 1.5);
  text-align: center;
}

.hd h1 {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 2rem;
  font-weight: 500;
  color: var(--blue-dark);
}
</style>
