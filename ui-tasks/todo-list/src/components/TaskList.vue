<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">{{ title }}</h2>
    <!-- Add Task component -->
    <div class="flex items-center mb-4 mt-4 pt-2 text-blue-600">
      <button @click="toggleAddTask" class="ml-3 mr-2"><AddIcon /></button>
      <div v-if="!isAdding" @click="toggleAddTask" class="cursor-pointer">Add a task</div>
      <input
        v-else
        v-model="newTaskContent"
        @keyup.enter="addTask"
        @blur="cancelAdd"
        ref="newTaskInput"
        placeholder="Enter task content"
        class="border rounded border-blue-600 px-2 py-1 w-full"
      />
    </div>
    <!-- Existing task list -->
    <ul>
      <li v-for="task in tasks" :key="task.id" class="mb-2">
        <TaskItem :task="task" @showDetails="showTaskDetails(task)" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps, ref, nextTick } from 'vue';
import TaskItem from '@/components/TaskItem.vue';
import AddIcon from '@/components/icons/AddIcon.vue';
import { useItemStore } from '@/stores/ItemStore';

const props = defineProps({
  title: String,
  tasks: Array,
  view: String, // Add this new prop
});

const emit = defineEmits(['showDetails']);

const showTaskDetails = (task) => {
  emit('showDetails', task);
};

// New task functionality
const isAdding = ref(false);
const newTaskContent = ref('');
const newTaskInput = ref(null);

const toggleAddTask = () => {
  isAdding.value = !isAdding.value;
  if (isAdding.value) {
    nextTick(() => newTaskInput.value.focus());
  }
};
const itemStore = useItemStore();

const addTask = () => {
  console.log(props.view);
  if (newTaskContent.value.trim()) {
    itemStore.addItem({
      text: newTaskContent.value.trim(),
      done: false,
      today: props.view === 'today',
      important: props.view === 'important'
    });
    newTaskContent.value = '';
  }
  isAdding.value = false;
};

const cancelAdd = () => {
  isAdding.value = false;
  newTaskContent.value = '';
};
</script>