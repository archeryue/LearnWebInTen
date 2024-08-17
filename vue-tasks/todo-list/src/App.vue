<template>
  <div>
    <div class="todo-container">
      <div class="todo-wrap">
        <TodoHeader/>
        <TodoList/>
        <TodoFooter/>
      </div>
    </div>
  </div>
</template>

<script setup>
import TodoHeader from './components/TodoHeader.vue';
import TodoFooter from './components/TodoFooter.vue';
import TodoList from './components/TodoList.vue';
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
