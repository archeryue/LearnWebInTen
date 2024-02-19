# UI framework which works well with Vue.js

## CSS framework: Tailwind CSS
 - CSS: try to manage complex style configs all around HTML tags.
    - Manage in one place: style sheet
    - Improve reusability: dom selector
 - Tailwind CSS: try to solve the problem of writing complex CSS files.
    - Simplify CSS syntax: define some Classes to express complex CSS statements.
    - Write in HTML tags directly, because Classes are simple enough.
    - What about reusability?
        - you can define new Class to combine resuable Classes.
        - Component itself is resuable in Vue.js.
    - Webpack or other packers can convert these Classes into CSS files.

## UI framework: Element Plus
 - UI Component: Encapsulate the HTML tags and relative styles into an Element Component.
 - Element+: UI Components written as Vue Templates. Cool! It's fxxking easy to use.
 - Vite can compile this UI Components and convert them into JS module(virtual DOM tree).
 - I'm gonna rewrite my Todo-List with element+.
