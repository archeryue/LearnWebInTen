<template>
    <div class="todo-header">
        <h2>today's todo-list</h2>
        <input type="text" placeholder="input your task, press enter to confirm." v-model="todoText" @keyup.enter="addItem" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useItemStore } from '@/stores/ItemStore';

const todo = useItemStore();

const todoText = ref('');

function addItem() {
    if(!todoText.value.trim()) return alert("input should not be empty.");
    const item = {text:todoText.value, done:false};
    todo.addItem(item);
    todoText.value = '';
}
</script>

<style scoped>
.todo-header input {
    width: 563px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #cccccc;
    border-radius: 5px;
    padding: 3px 6px;
}

.todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.8);
}
</style>