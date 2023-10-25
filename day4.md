# More Details on Vue.js

## What's more?
 - All kinds of data-bindings
    - Computed Properties: for complex logic which includes reactive data. like a function with cache, it will refresh the caching value when reactive data changes.
    - Class and Style Bindings: v-bind, \<div v-bind:class="{active: ref(data)}"\>, \<div v-bind:style="{color: ref(data)}"\> it will dynamically change the css properties.
    - Conditional Rendering: v-if, \<h1 v-if="awesome"\>Vue is awesome!\</h1\>.
    - List Rendering: v-for, \<li v-for="item in items"\> {{ item.message }} \</li\>.
    - Event Handling: v-on, the usage would be v-on:click="handler" or with the shortcut, @click="handler".
    - Form Input Bindings: v-model, \<input v-model="text"\>
 ```
    <p>Message is: {{ message }}</p>
    <input v-model="message" placeholder="edit me" />
 ```
 - Lifecycle Hooks
