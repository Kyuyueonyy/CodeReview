<script setup>
import { ref } from 'vue'

const items = ref([])

const editItem = (index) => {
  const newText = prompt('새로운 할 일을 입력하세요', items.value[index].text)
  if (newText) items.value[index].text = newText
}

const toggleItem = (index) => {
  items.value[index].done = !items.value[index].done
}

const deleteItem = (index) => {
  items.value.splice(index, 1)
}

defineExpose({ items })
</script>

<template>
  <ul class="items">
    <li v-for="(item, index) in items" :key="index" class="item" :class="{ item_done: item.done }">
      <span class="item-text" @dbclick="editItem(index)">{{ item.text }}</span>
      <i class="fa-solid fa-check" @click="toggleItem(index)"></i>
      <i class="fa-solid fa-trash-can" @click="deleteItem(index)"></i>
    </li>
  </ul>
</template>

<style scoped>
/* ul */
.items {
  padding: 1rem;
  height: 500px;
  overflow-y: auto;
}
/* li */
.item {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid lightgray;
  cursor: pointer;
  transition: 0.3s;
}
.item:hover {
  background-color: #eae9ee;
}
/* li 체크 클릭됐을 때 */
.item.item_done span {
  opacity: 0.1;
  text-decoration: line-through;
}
.item span {
  flex: 1;
  text-align: left;
}

/*  아이콘 */
.fa-check,
.fa-trash-can {
  font-size: 16px;
  transition: 0.3s;
}
.fa-check:hover {
  color: dodgerblue;
}
.fa-trash-can:hover {
  color: red;
  transform: scale(1.1);
}
</style>
