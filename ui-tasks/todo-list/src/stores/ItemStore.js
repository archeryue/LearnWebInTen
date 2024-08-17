import { defineStore } from 'pinia';

export const useItemStore = defineStore('task', {
    state: () => ({
        items: [
            { id: 0, text: 'coding: vue project todo-list', done: true, today: true },
            { id: 1, text: 'reading: walden', done: false, today: true },
            { id: 2, text: 'working: prepare jd', done: false, today: false },
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
        todayItems() {
            return this.items.filter(item => item.today)
        }
    }
});