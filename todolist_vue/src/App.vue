<script setup>
import { ref } from 'vue'
import TodoHeader from './components/Todo_header.vue'
import TodoList from './components/Todo_list.vue'
import TodoFooter from './components/Todo_footer.vue'

const todoList = ref(null)

// 새로운 할 일 추가
const addTodo = (text) => {
  if (!text.trim()) return // 빈 입력 방지
  todoList.value.items.push({ text, done: false })
}

// 전체 삭제 기능
const clearAll = () => {
  todoList.value.items = []
}
</script>

<template>
  <section class="container">
    <TodoHeader @clearAll="clearAll" />
    <TodoList ref="todoList" />
    <TodoFooter @addTodo="addTodo" />
  </section>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
li {
  list-style: none;
}

body {
  background-color: #ced3df;
}
/* section */
.container {
  width: 80%;
  max-width: 400px;
  margin: 50px auto;
  background-color: #f1f0f7;
  box-shadow: 9px 11px 5px 0px rgba(125, 124, 125, 1);
  border-radius: 20px;
}
</style>
