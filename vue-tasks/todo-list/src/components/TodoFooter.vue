<template>
    <div class="todo-footer" v-show="totalCount">
        <span>done: {{ doneCount }}</span>
        <span>/total: {{ totalCount }}</span>
    </div>
</template>

<script setup>
import { computed } from 'vue';

import { useItemStore } from '@/stores/ItemStore';

const todo = useItemStore();

const totalCount = computed(() => {
    return todo.items.length;
});

const doneCount = computed(() => {
    return todo.items.reduce((pre, item) => pre + (item.done ? 1 : 0), 0);
});
</script>

<style scoped>
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}
</style>