<template>
    <div class="relative border p-5">
        <!-- Triangle with Rotation -->
        <div :class="[
            'absolute top-1 left-1 mt-2 ml-2 w-0 h-0 border-l-8 border-t-8 border-b-8 border-transparent border-l-black cursor-pointer transition-transform duration-300',
            isVisible ? 'rotate-90' : 'rotate-0'
        ]" @click="toggleContent"></div>

        <!-- Content Division -->
        <div v-if="isVisible" class="mt-4">
            <slot>
                <p>This is the content inside the division. Click the triangle to hide or show this content.</p>
            </slot>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
const isVisible = ref(true);
function toggleContent() {
    isVisible.value = !isVisible.value;
}
</script>