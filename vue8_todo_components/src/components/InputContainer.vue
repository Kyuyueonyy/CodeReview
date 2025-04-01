<script>
export default {
  name: 'InputContainer',
  data() {
    return {
      newTodo: '',
    }
  },
  emits: ['add-todo'],
  methods: {
    addTodo() {
      const text = this.newTodo
      if (!text) return
      this.$emit('add-todo', text)
      this.newTodo = ''

      // this.saveTodos()
    },
  },
}
</script>

<template>
  <!-- 입력폼 -->
  <div class="input-container">
    <input
      type="text"
      placeholder="할일을 입력하세요"
      v-model.trim="newTodo"
      @Keyup.enter="addTodo"
    />
    <button @click="addTodo">추가</button>
    <i class="fa fa-trash" @click.stop="removeTodo(todo.id)"></i>
  </div>
</template>

<style scoped>
.input-container {
  /* border: 1px solid yellowgreen; */
  max-width: 500px;
  width: calc(100% - var(--space-l));
  margin: auto;
  position: relative;
  top: -30px;
  display: flex;
  gap: var(--space-s);
}

.input-container input {
  border: none;
  padding: var(--space-m);
  background-color: var(--gray400);
  color: var(--gray100);
  outline: none;
  border-radius: var(--space-s);
  cursor: pointer;
  /* 나머지 여백 다 가져가라 - flex:1
  - Flexbox 컨테이너에서 자식 요소가 남은 공간을 차지하도록 설정하는 속성 */
  flex: 1;
}

/* 마우스 클릭해서 focus 되면~  */
.input-container input:focus {
  background-color: var(--gray300);
}

.input-container button {
  background-color: var(--blue-dark);
  padding: var(--space-m) calc(var(--space-m) * 2);
}

.input-container button::after {
  content: '+';
  border: 1px solid var(--gray100);
  border-radius: 50px;
  width: 14px;
  height: 14px;
  display: inline-block;
  /* 나 스스로 움직일게! position:relative */
  position: relative;
  left: 3px;
}
</style>
