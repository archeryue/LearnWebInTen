<template>
    <div class="todo-footer" v-show="totalCount">
        <span>done: {{ doneCount }}</span>
        <span>/total: {{ totalCount }}</span>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    items: Array
});
const totalCount = computed(() => {
    return props.items.length;
});

const doneCount = computed(() => {
    return props.items.reduce((pre, item) => pre + (item.done ? 1 : 0), 0);
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