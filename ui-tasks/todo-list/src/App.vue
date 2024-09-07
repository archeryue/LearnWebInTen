<template>
  <div class="flex flex-col h-screen">
    <!-- Header -->
    <header class="bg-blue-600 text-white p-4">
      <h1 class="text-2xl font-bold">My Todo App</h1>
    </header>

    <!-- Main content area with sidebar -->
    <div class="flex flex-1 overflow-hidden">
      <!-- Sidebar -->
      <aside class="w-64 bg-gray-100 p-4 overflow-y-auto">
        <nav>
          <ul class="space-y-2">
            <li><router-link to="/" class="block hover:bg-gray-200 p-2 rounded">Today</router-link></li>
            <li><router-link to="/important" class="block hover:bg-gray-200 p-2 rounded">Important</router-link></li>
            <li><router-link to="/all" class="block hover:bg-gray-200 p-2 rounded">All Tasks</router-link></li>
          </ul>
        </nav>
      </aside>

      <!-- Main content -->
      <main class="flex-1 p-6 overflow-y-auto relative">
        <router-view @showDetails="showTaskDetails"></router-view>
        
        <!-- Task Detail Sidebar -->
        <DetailSidebar 
          :task="selectedTask"
          :isOpen="isDetailSidebarOpen"
          @close="closeTaskDetails"
        />
      </main>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useItemStore } from '@/stores/ItemStore';
import DetailSidebar from '@/components/DetailSidebar.vue';

const itemStore = useItemStore();
const tasks = computed(() => itemStore.items);

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