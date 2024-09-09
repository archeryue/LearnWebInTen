<template>
  <TaskList title="Important Tasks" :tasks="importantTasks" view="important" @showDetails="showTaskDetails" />
</template>

<script setup>
import { computed } from 'vue';
import { useItemStore } from '@/stores/ItemStore';
import TaskList from '@/components/TaskList.vue';

const itemStore = useItemStore();
const importantTasks = computed(() => itemStore.importantItems());

const emit = defineEmits(['showDetails']);

const showTaskDetails = (task) => {
  emit('showDetails', task);
};
</script>