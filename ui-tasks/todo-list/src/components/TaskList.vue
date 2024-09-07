<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">{{ title }}</h2>
    <ul>
      <li v-for="task in tasks" :key="task.id" class="mb-2">
        <TaskItem :task="task" @showDetails="showTaskDetails(task)" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps} from 'vue';
import TaskItem from '@/components/TaskItem.vue';

const props = defineProps({
  title: String,
  tasks: Array,
});

const emit = defineEmits(['showDetails']);

const showTaskDetails = (task) => {
  emit('showDetails', task);
};
</script>