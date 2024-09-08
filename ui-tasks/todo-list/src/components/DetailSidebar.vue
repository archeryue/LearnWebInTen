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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup>
import { useItemStore } from '@/stores/ItemStore';

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