<template>
    <div>
        <h2>{{ listTitle }}</h2>

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

<script>
    export default {
        props: ['listTitle'],
        data() {
            return {
                newTask: '',
                tasks: []
            };
        },
        methods: {
            toggleTaskStatus(task) {
                task.completed = !task.completed;
            },
            removeTask(task) {
                const index = this.tasks.indexOf(task);
                if (index > -1) {
                    this.tasks.splice(index, 1);
                }
            },
            addTask() {
                if (this.newTask.trim() === '') return;
                this.tasks.push({ id: this.tasks.length + 1, name: this.newTask, completed: false });
                this.newTask = '';
            }
        }
    };
</script>
