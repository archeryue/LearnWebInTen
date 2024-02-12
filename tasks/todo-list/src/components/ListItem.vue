<template>
    <li>
        <label>
            <input type="checkbox" :checked="props.item.done" @change="toggleItem(props.item.id)" />
            <span>{{ props.item.text }}</span>
        </label>
    </li>
    <button class="btn btn-danger" @click="removeItem(props.item.id)">Remove</button>
</template>

<script setup>
    const props = defineProps({
        item: {
            type: Object,
            required: true
        },
        toggleTodo: Function,
        removeTodo: Function
    });

    function toggleItem(id) {
        props.toggleTodo(id);
    }

    function removeItem(id) {
        if (confirm('Are you sure you want to delete this item?')) {
            props.removeTodo(id);
        }
    };
</script>

<style scoped>
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #dddddd;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        display: none;
        margin-top: 3px;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }

    li:hover {
        background-color: lightskyblue;
    }

    li:hover button {
        display: block;
    }
</style>