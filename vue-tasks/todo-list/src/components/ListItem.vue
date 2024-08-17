<template>
    <el-card shadow="hover">
        <div class="item">
            <label>
                <input type="checkbox" :checked="props.item.done" @change="toggleItem(props.item.id)" />
                <span>{{ props.item.text }}</span>
            </label>
            <el-button type="danger" round size="small" @click="removeItem(props.item.id)">Remove</el-button>
        </div>
    </el-card>
</template>

<script setup>
import { useItemStore } from '@/stores/ItemStore';

const todo = useItemStore();

const props = defineProps({
    item: {
        type: Object,
        required: true
    },
});

function toggleItem(id) {
    todo.toggleItem(id);
}

function removeItem(id) {
    if (confirm('Are you sure you want to delete this item?')) {
        todo.removeItem(id);
    }
};
</script>

<style scoped>

.item {
    display: flex;
    justify-content: space-between;
}
</style>