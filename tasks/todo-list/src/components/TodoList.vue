<template>
    <div class="todo-main">
        <ListItem v-for="item in props.items" :key="item.id" :item="item" :toggleTodo="toggleItem" :removeTodo="removeItem" />
    </div>
</template>

<script setup>
/* this page is generated by copilot */
import ListItem from './ListItem.vue';

const props = defineProps(["items", "toggleTodo", "removeTodo"]);

function toggleItem(id) {
    props.toggleTodo(id);
}

function removeItem(id) {
    props.removeTodo(id);
};

</script>

<style scoped>
.todo-main {
    margin-left: 0px;
    padding: 1px;
}
</style>
