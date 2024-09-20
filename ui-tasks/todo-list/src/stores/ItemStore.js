import { defineStore } from 'pinia';
import { onMounted } from 'vue';

const API_BASE_URL = 'http://localhost:3000/api';
const TODOS_ENDPOINT = `${API_BASE_URL}/todos/`;

export const useItemStore = defineStore('task', {
    state: () => ({
        items: [],
    }),
    actions: {
        async fetchItems() {
            try {
                const response = await fetch(TODOS_ENDPOINT, {
                    method: 'GET',
                    credentials: 'include', // Add this line
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                });
                const data = await response.json();
                this.items = data;
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        },
        async addItem(item) {
            try {
                const response = await fetch(TODOS_ENDPOINT, {
                    method: 'POST',
                    credentials: 'include', // Add this line
                    headers: { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    body: JSON.stringify(item),
                });
                const newItem = await response.json();
                this.items.push(newItem);
            } catch (error) {
                console.error('Error adding item:', error);
            }
        },
        async toggleItem(id) {
            const item = this.items.find(item => item.id === id);
            if (item) {
                item.done = !item.done;
                await this.updateItem(item);
            }
        },
        async removeItem(id) {
            await this.deleteItem(id);
        },
        async scheduleItem(id) {
            const item = this.items.find(item => item.id === id);
            if (item) {
                item.today = !item.today;
                await this.updateItem(item);
            }
        },
        async markImportant(id) {
            const item = this.items.find(item => item.id === id);
            if (item) {
                item.important = !item.important;
                await this.updateItem(item);
            }
        },
        async updateItem(item) {
            try {
                const response = await fetch(`${TODOS_ENDPOINT}${item.id}`, {
                    method: 'PUT',
                    credentials: 'include', // Add this line
                    headers: { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    body: JSON.stringify(item),
                });
                const updatedItem = await response.json();
                const index = this.items.findIndex(i => i.id === updatedItem.id);
                if (index !== -1) {
                    this.items[index] = updatedItem;
                }
            } catch (error) {
                console.error('Error updating item:', error);
            }
        },
        async deleteItem(id) {
            try {
                await fetch(`${TODOS_ENDPOINT}${id}`, {
                    method: 'DELETE',
                    credentials: 'include', // Add this line
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                });
                this.items = this.items.filter(item => item.id !== id);
            } catch (error) {
                console.error('Error deleting item:', error);
            }
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
        initializeStore() {
            onMounted(() => {
                this.fetchItems();
            });
        },
    }
});