import { defineStore } from 'pinia';

export const useItemStore = defineStore('todo', {
    state: () => ({
        items: [
            { id: 0, text: 'coding: vue project todo-list', done: true },
            { id: 1, text: 'reading: walden', done: false },
            { id: 2, text: 'working: prepare jd', done: false }
        ],
        defaultId: 3,
    }),
    actions: {
        addItem(item) {
            item.id = this.defaultId++;
            this.items.push(item);
        },
        toggleItem(id) {
            this.items.forEach((item) => {
                if (item.id === id) item.done = !item.done;
            });
        },
        removeItem(id) {
            this.items = this.items.filter(item => item.id !== id);
        }
    }
});