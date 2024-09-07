<template>
  <div @click.stop class="absolute right-0 top-0 h-full w-80 bg-white shadow-lg p-6 transform transition-transform duration-300"
       :class="{ 'translate-x-0': isOpen, 'translate-x-full': !isOpen }">
    <button @click="$emit('close')" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
        ✕
    </button>
    <h2 class="text-2xl font-bold mb-4">Task Details</h2>
    <div v-if="task">
      <p><strong>Text:</strong> {{ task.text }}</p>
      <p><strong>Status:</strong> {{ task.done ? 'Completed' : 'Pending' }}</p>
      <p><strong>Today:</strong> {{ task.today ? 'Yes' : 'No' }}</p>
      <p><strong>Important:</strong> {{ task.important ? 'Yes' : 'No' }}</p>
    </div>
    <button @click="deleteTask" class="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
      Delete Task
    </button>
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