<template>
    <div class="container mx-auto p-4">
        <ToggleContent />
        <ToggleContent>
            <h-1 class="text-3xl font-bold underline">
                Hello world!
            </h-1>
            <div class="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div class="w-full h-26 bg-red-500">Item 1</div>
                <div class="w-full h-26 bg-blue-500">Item 2</div>
                <div class="w-full h-26 bg-green-500">Item 3</div>
                <div class="w-full h-26 bg-yellow-500">Item 4</div>
            </div>
        </ToggleContent>
        <ToggleContent>
            <!-- Content Division -->
            <div class="bg-gray-100 p-4 relative" @click="hideAside">
                <div class="max-w-md mx-auto bg-white p-4 rounded shadow">
                    <h1 class="text-xl font-bold mb-4">To-Do List</h1>
                    <ul>
                        <li v-for="(item, index) in todos" :key="index" class="flex items-center space-x-2 mb-2">
                            <input type="checkbox" v-model="item.completed" class="form-checkbox h-5 w-5 text-blue-600"
                                @click.stop>
                            <span @click.stop="showAside(index)"
                                :class="{ 'line-through text-gray-500': item.completed, 'cursor-pointer': true }"
                                class="flex-1">
                                {{ item.text }}
                            </span>
                        </li>
                    </ul>
                </div>

                <!-- Aside Panel -->
                <aside v-if="isAsideVisible" @click.stop
                    class="absolute top-0 right-0 w-64 h-full bg-gray-800 text-white shadow-lg transform transition-transform duration-300"
                    :class="{ 'translate-x-full': !isAsideVisible, 'translate-x-0': isAsideVisible }">
                    <button @click="hideAside" class="absolute top-4 right-4 text-white">Close</button>
                    <div class="p-4">
                        <h2 class="text-xl mb-4">Details</h2>
                        <p>{{ selectedItem?.text }}</p>
                        <p v-if="selectedItem?.completed" class="text-green-500 mt-4">This item is completed.</p>
                    </div>
                </aside>
            </div>
        </ToggleContent>
    </div>
</template>

<script setup>
import { ref } from "vue";
import ToggleContent from "./components/ToggleContent.vue";

const todos = ref([
    { text: 'Buy groceries', completed: false },
    { text: 'Walk the dog', completed: false },
    { text: 'Read a book', completed: false },
]);
const isAsideVisible = ref(false);
const selectedItem = ref(null);

function showAside(index) {
    selectedItem.value = todos.value[index];
    isAsideVisible.value = true;
}
function hideAside() {
    isAsideVisible.value = false;
    selectedItem.value = null;
}
</script>