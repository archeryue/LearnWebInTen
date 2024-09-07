import { defineStore } from 'pinia';

export const useItemStore = defineStore('task', {
    state: () => ({
        items: [
            { id: 0, text: 'coding: vue project todo-list', 
                done: true, today: true, important: true },
            { id: 1, text: 'reading: walden', 
                done: false, today: true, important: false },
            { id: 2, text: 'working: prepare jd', 
                done: false, today: false, important: false },
        ],
        defaultId: 3,
    }),
    actions: {
        addItem(item) {
            item.id = this.defaultId++
            this.items.push(item)
        },
        toggleItem(id) {
            this.items.forEach((item) => {
                if (item.id === id) item.done = !item.done
            })
        },
        removeItem(id) {
            this.items = this.items.filter(item => item.id !== id)
        },
        scheduleItem(id) {
            this.items.forEach((item) => {
                if (item.id === id) item.today = !item.today
            })
        },
        markImportant(id) {
            this.items.forEach((item) => {
                if (item.id === id) item.important = !item.important
            })
        },
        filterItems(condition) {
            return this.items.filter(condition)
        },
        todayItems() {
            return this.filterItems(item => item.today)
        },
        importantItems() {
            return this.filterItems(item => item.important)
        },
        doneItems() {
            return this.filterItems(item => item.done)
        },
    }
});