<script>
import FilterContainer from './components/FilterContainer.vue'
import HeaderLayout from './components/HeaderLayout.vue'
import InputContainer from './components/InputContainer.vue'
import SummaryContainer from './components/SummaryContainer.vue'
import TodoItem from './components/TodoItem.vue'
export default {
  name: 'App',
  data() {
    return {
      todos: [
        {
          id: 1,
          text: '할 일 1',
          completed: false,
          createAt: '2025-03-24',
        },
        {
          id: 2,
          text: '할 일 2',
          completed: true,
          createAt: '2025-03-25',
        },
        {
          id: 3,
          text: '할 일 3',
          completed: false,
          createAt: '2025-03-26',
        },
        {
          id: 4,
          text: '할 일 4',
          completed: false,
          createAt: '2025-03-26',
        },
      ],
      filter: 'all',
    }
  },
  components: {
    HeaderLayout,
    InputContainer,
    FilterContainer,
    TodoItem,
    SummaryContainer,
  },

  methods: {
    addTodo(newtodo) {
      this.todos.push({
        id: Date.now(), //uuid
        text: newtodo,
        completed: false,
        createAt: new Date().toLocaleDateString(),
      })
      // this.saveTodos()
    },
    toggleCompleted(id) {
      const todo = this.todos.find((todo) => todo.id === id)
      todo.completed = !todo.completed
    },
    removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id)
    },
    // localstorage 에 저장
    saveTodos() {
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },
    // localstorage 에서 호출하는 함수
    loadTodos() {
      const todos = localStorage.getItem('todos')
      todos ? (this.todos = JSON.parse(todos)) : []
    },
    clearCompleted() {
      //완료된 항목 삭제 버튼
      //active상태(not completed)인것만 새로운 배열에 재할당
      //completed상태는 삭제되는것 처럼 보이는 효과 + 로컬스토리지에 저장
      this.todos = this.todos.filter((todo) => !todo.completed)
      this.saveTodos
    },
    filterChange(filter) {
      this.filter = filter
    },
  },
  mounted() {
    this.loadTodos()
  },
  computed: {
    filteredTodos() {
      if (this.filter == 'active') {
        return this.todos.filter((todo) => !todo.completed)
      } else if (this.filter == 'completed') {
        return this.todos.filter((todo) => todo.completed)
      } else {
        return this.todos
      }
    },

    activeTodoCount() {
      return this.todos.filter((todo) => !todo.completed).length
    },
    completedTodoCount() {
      return this.todos.filter((todo) => todo.completed).length
    },
  },
}
</script>

<template>
  <div class="app">
    <HeaderLayout title="작심" />
    <InputContainer @add-todo="addTodo" />>
    <FilterContainer @filter-changed="filterChanged" />
    <ul class="todo-list">
      <TodoItem
        v-for="todo in filteredTodos"
        :key="todo.id"
        :todo="todo"
        @toggle-completed="togggleCompleted"
      />
    </ul>
    <SummaryContainer
      @clear-completed="clearCompleted"
      :activeToDoCount="activeTodoCount"
      :completedTodoCount="completedTodoCount"
    />
  </div>
</template>

<style scoped>
.todo-list {
  margin: var(--space-l) auto !important;
}
</style>
