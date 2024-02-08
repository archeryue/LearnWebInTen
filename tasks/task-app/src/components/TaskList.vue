<template>
    <div>
        <h2>{{ props.listTitle }}</h2>

        <ul>
            <li v-for="task in tasks" :key="task.id">
                {{ task.name }} - {{ task.completed ? 'done' : 'todo' }}
                <button @click="toggleTaskStatus(task)">done</button>
                <button @click="removeTask(task)">remove</button>
            </li>
        </ul>

        <div>
            <input v-model="newTask" @keyup.enter="addTask" placeholder="add a new task">
            <button @click="addTask">add</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['listTitle']);
const newTask = ref('');
const tasks = ref([]);

function toggleTaskStatus(task) {
    task.completed = !task.completed;
}

function removeTask(task) {
    const index = tasks.value.indexOf(task);
    if (index > -1) {
        tasks.value.splice(index, 1);
    }
}

function addTask() {
    if (newTask.value.trim() === '') return;
    tasks.value.push({ id: tasks.value.length + 1, name: newTask.value, completed: false });
    newTask.value = '';
}
</script>