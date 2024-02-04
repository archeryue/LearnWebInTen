<template>
    <div>
        <h2>{{ listTitle }}</h2>

        <!-- 显示任务列表 -->
        <ul>
            <li v-for="task in tasks" :key="task.id">
                {{ task.name }} - {{ task.completed ? '已完成' : '未完成' }}
                <button @click="toggleTaskStatus(task)">切换状态</button>
                <button @click="removeTask(task)">删除</button>
            </li>
        </ul>

        <!-- 添加新任务 -->
        <div>
            <input v-model="newTask" @keyup.enter="addTask" placeholder="添加新任务">
            <button @click="addTask">添加</button>
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
