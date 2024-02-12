<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>
  <div>
    <div class="todo-container">
      <div class="todo-wrap">
        <TodoHeader :default-id="defaultId" :add-todo="addItem"/>
        <TodoList :items="items" :toggle-todo="toggleItem" :remove-todo="removeItem"/>
        <TodoFooter :items="items"/>
      </div>
    </div>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoFooter from './components/TodoFooter.vue';
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  components: { TodoHeader, TodoList, TodoFooter }, 
  data() {
    return {
      items: [
        { id: 0, text: 'coding: vue project todo-list', done: true },
        { id: 1, text: 'reading: walden', done: false },
        { id: 2, text: 'working: prepare jd', done: false }
      ],
      defaultId: 3
    }
  },
  methods: {
    addItem(item) {
      this.items.push(item);
    },
    toggleItem(id) {
      this.items.forEach((item) => {
        if(item.id === id) item.done = !item.done;
      })
    },
    removeItem(id) {
      this.items = this.items.filter(item => item.id !== id);
    }
  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

body {
  background: #ffffff;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
  background: lightcyan;
  border-radius: 3px;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #dddddd;
  border-radius: 5px;
}
</style>