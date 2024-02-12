<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>
  <div id="root">
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
import { createApp, ref } from 'vue';

const app = createApp({});
app
  .component('TodoHeader', TodoHeader)
  .component('TodoList', TodoList)
  .component('TodoFooter', TodoFooter);

const items = ref([
  {id: 1, text:'coding: vue project todo-list', done:true},
  {id: 2, text:'reading: walden', done:false},
  {id: 3, text:'working: prepare jd', done:false},
]);
const defaultId = ref(4);

function addItem(item) {
}

function toggleItem(id) {

}

function removeItem(id) {

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
</style>