<template>
  <TaskList title="All Tasks" :tasks="tasks" @showDetails="showTaskDetails" />
</template>

<script setup>
import { computed } from 'vue';
import { useItemStore } from '@/stores/ItemStore';
import TaskList from '@/components/TaskList.vue';

const itemStore = useItemStore();
const tasks = computed(() => itemStore.items);

const emit = defineEmits(['showDetails']);

const showTaskDetails = (task) => {
  emit('showDetails', task);
};
</script>