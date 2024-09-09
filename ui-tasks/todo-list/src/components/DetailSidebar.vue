<template>
    <div @click.stop class="absolute right-0 top-0 h-full w-80 bg-white shadow-lg p-6 flex flex-col justify-between
         transform transition-transform duration-300"
        :class="{ 'translate-x-0': isOpen, 'translate-x-full': !isOpen }">
        <button @click="$emit('close')" class="absolute top-6 right-4 text-gray-500 hover:text-gray-700">
            ✕
        </button>
        <div v-if="task" class="flex flex-col gap-5 w-full ml-3">
            <h2 class="text-2xl font-bold mb-4 text-left">Task Details</h2>
            <div class="text-left">{{ task.text }}</div>
            <div class="text-left"><strong>Status:</strong> {{ task.done ? 'Completed' : 'Pending' }}</div>
            <div class="text-left"><strong>Today:</strong> {{ task.today ? 'Yes' : 'No' }}</div>
            <div class="text-left"><strong>Important:</strong> {{ task.important ? 'Yes' : 'No' }}</div>
        </div>
        <div class="w-full flex justify-center">
            <button @click="deleteTask" class="mt-6 text-red-500 hover:text-red-600 px-4 py-2 rounded">
                <DeleteIcon />
            </button>
        </div>
    </div>
</template>

<script setup>
import { useItemStore } from '@/stores/ItemStore';
import DeleteIcon from '@/components/icons/DeleteIcon.vue';

const props = defineProps(['task', 'isOpen']);
const emit = defineEmits(['close']);

const itemStore = useItemStore();

function deleteTask() {
  if (props.task) {
    itemStore.removeItem(props.task.id);
    emit('close');
  }
}
</script>