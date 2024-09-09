<template>
    <div class="flex items-center justify-between p-4 border-b">
        <div class="flex items-center flex-1">
            <input type="checkbox" :checked="task.done" @change="toggleTask" class="mr-3">
            <span @click="showDetails" class="cursor-pointer flex-1" :class="{ 'line-through text-gray-400': task.done }">{{ task.text }}</span>
        </div>
        <button @click="toggleImportant" class="text-2xl text-yellow-500 hover:text-yellow-600">
            <span v-if="task.important">★</span>
            <span v-else>☆</span>
        </button>
    </div>
</template>

<script setup>
import { useItemStore } from '@/stores/ItemStore';

const props = defineProps(['task']);
const emit = defineEmits(['showDetails']);

const itemStore = useItemStore();

function toggleTask() {
    itemStore.toggleItem(props.task.id);
}

function toggleImportant() {
    itemStore.markImportant(props.task.id);
}

function showDetails() {
    emit('showDetails', props.task);
}
</script>