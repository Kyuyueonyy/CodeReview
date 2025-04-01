<script setup>
defineEmits(['ClearAll'])
</script>

<template>
  <div class>
    <section class="container">
      <header class="header">
        <h1>오늘의 할 일</h1>
        <button class="clear-all" @click="$emit('clearAll')">
          <i class="fa-solid fa-eraser"></i>
        </button>
      </header>
      <ul class="items"></ul>
    </section>
  </div>
</template>

<style scoped>
.header {
  padding: 1rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 10px;
  text-align: center;
  color: white;
  background: rgba(237, 193, 211);
  background: linear-gradient(
    166deg,
    rgba(237, 193, 211, 1) 0%,
    rgba(219, 192, 216, 1) 35%,
    rgba(127, 188, 242, 1) 100%
  );
  border-radius: 20px 20px 0 0;
}
.clear-all {
  color: white;
  position: absolute;
  right: 10px;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  align-items: center;
  gap: 5px; /* 아이콘과 텍스트 간격 */
  background-color: transparent;
}

.clear-all:hover {
  /* transform: translateY(-15px) scale(1.1); */
  color: tomato;
}
</style>
