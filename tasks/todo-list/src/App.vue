<template>
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

<script setup>
import TodoHeader from './components/TodoHeader.vue';
import TodoFooter from './components/TodoFooter.vue';
import TodoList from './components/TodoList.vue';

import { ref } from 'vue';

const items = ref([
  { id: 0, text: 'coding: vue project todo-list', done: true },
  { id: 1, text: 'reading: walden', done: false },
  { id: 2, text: 'working: prepare jd', done: false }
]);
const defaultId = ref(3);

function addItem(item) {
  item.id = defaultId.value++;
  items.value.push(item);
}

function toggleItem(id) {
  items.value.forEach((item) => {
    if(item.id === id) item.done = !item.done;
  })
}

function removeItem(id) {
  items.value = items.value.filter(item => item.id !== id);
}
</script>

<style scoped>
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
