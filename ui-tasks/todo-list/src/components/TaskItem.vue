<template>
    <div class="w-full h-24 bg-red-500">
        <slot></slot>
    </div>
</template>

<script setup>
import { useItemStore } from '@/stores/ItemStore';
const task = useItemStore()

function deleteTask(id) {
    task.deleteItem(id)
}

function completeTask(id) {
    task.toggleItem(id)
}

function scheduleTask(id) {
    task.scheduleItem(id)
}
</script>