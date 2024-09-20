<template>
  <div class="flex flex-col h-screen">
    <!-- Header -->
    <header class="bg-blue-600 text-white p-2 flex justify-between items-center">
      <h1 class="ml-3 text-xl font-bold font-mono">My Todo App</h1>
      <div class="mr-3">
        <SettingIcon />
      </div>
    </header>

    <!-- Main content area with sidebar -->
    <div class="flex flex-1 overflow-hidden">
      <!-- Sidebar -->
      <aside class="w-64 bg-gray-100 p-4 overflow-y-auto">
        <nav>
          <ul class="space-y-2 font-mono">
            <li><router-link to="/" class="hover:bg-gray-200 p-2 rounded flex items-center gap-2">
                <SunIcon /> My Day
              </router-link>
            </li>
            <li><router-link to="/important" class="hover:bg-gray-200 p-2 rounded flex items-center gap-2">
                <StarIcon /> Important
              </router-link>
            </li>
            <li><router-link to="/all" class="hover:bg-gray-200 p-2 rounded flex items-center gap-2">
                <TaskIcon /> All Tasks
              </router-link>
            </li>
          </ul>
        </nav>
      </aside>

      <!-- Main content -->
      <main class="flex-1 p-6 overflow-y-auto relative font-mono">
        <router-view @showDetails="showTaskDetails"></router-view>
        <!-- Task Detail Sidebar -->
        <DetailSidebar :task="selectedTask" :isOpen="isDetailSidebarOpen" @close="closeTaskDetails" />
      </main>

    </div>
  </div>
</template>

<script setup>
import { useItemStore } from './stores/ItemStore';

const itemStore = useItemStore();
itemStore.initializeStore();

import { ref } from 'vue';
import DetailSidebar from '@/components/DetailSidebar.vue';
import SunIcon from '@/components/icons/SunIcon.vue';
import StarIcon from '@/components/icons/StarIcon.vue';
import TaskIcon from '@/components/icons/TaskIcon.vue';
import SettingIcon from '@/components/icons/SettingIcon.vue';

const selectedTask = ref(null);
const isDetailSidebarOpen = ref(false);

function showTaskDetails(task) {
  selectedTask.value = task;
  isDetailSidebarOpen.value = true;
}

function closeTaskDetails() {
  if (isDetailSidebarOpen.value) {
    isDetailSidebarOpen.value = false;
    selectedTask.value = null;
  }
}
</script>