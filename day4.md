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
    - Normal Vue Component Instance Init Steps: 
        1. set up data observation
        2. compile the template
        3. mount the instance to the DOM
        4. update the DOM when data changes
    - Lifecycle Hooks: add codes at specific stages.
        - onMounted: run after DOM nodes created.
        - other hooks: beforeMount / beforeUpdate / onUpdated / onUnmounted
 - Watchers
```
<script setup>
import { ref, watch } from 'vue'

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')

// watch works directly on a ref
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.indexOf('?') > -1) {
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    }
  }
})
</script>

<template>
  <p>
    Ask a yes/no question:
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p>
</template>
```
 - Component Basics
    - Vue components can be arranged and combined.
```
<script setup>
import ButtonCounter from './ButtonCounter.vue'
</script>

<template>
  <h1>Here is a child component!</h1>
  <ButtonCounter />
</template>
```
