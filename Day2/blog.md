# Day 2: Basically Understanding of Vue.js

## Where to start?
 - the official site(vuejs.org) is pretty good for me.

## What is Vue.js?
 - Looks like it's a javascript framework to enhance HTML and make it much easier to interact with javascript.
 - Two core features of Vue.js: Declarative Rendering and Reactivity.
    - Declarative Rendering: we can declaratively describe HTML output base on javascript state.
    - Reactivity: vue will reactively update the DOMs when the javascript state changes.
 - They call vue.js "the progressive framework". Honestly speaking, I don't get it.
    - It seems Vue can be incrementally adoptable. Like, Vue can be used in different ways:
        - Enhancing static HTML without a build step (using Vue from CDN?)
        - Embedding as Web Components on any page (sounds like the same thing as the first one)
        - SPA: Single-Page Application (sounds like the REAL Vue style)
        - What follows is all about full-stack development bullshit
    - For me, there are only 2 ways of use: Embedding as Web Components & SPA.
 - SFC: Single-File Component(all those *.vue files) consists of JS logic, HTML template and CSS.
    - SFC can be compile into original HTML + JS + CSS by @vue/compiler-sfc.
 ```
    <script setup>
    import { ref } from 'vue'
    const count = ref(0)
    </script>

    <template>
        <button @click="count++">Count is: {{ count }}</button>
    </template>

    <style scoped>
    button {
        font-weight: bold;
    }
    </style>
 ```
 - Of course, I will build the website the SPA way. so, Let's do it with SFCs.

 ## Supplement
 - I made a mistake. A compiled SFC is just a JavaScript module. Cool.
    - So, the framework will generated DOMs and Styles by throught JS. 
 - SFC should be small and simple enough. It contains the content of what was supposed to be 3 files.
 - API styles: Vue components can be write in 2 styles: Options API and Composition API (wired names).
    - Options API: nature JS code, define logic by data, methods and mounted. all these are connected by this pointer.
    - Composition API: syntax sugar, by add the setup attribute in Script tag. It seems to make everything easier.
    - Well, Options API is better for understanding how the framework works. Composition API is easier to write and read. Which one will I pick? We will see.
