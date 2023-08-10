# Day 3: Essentials of Vue.js

## How does Vue.js work?
 - There are two key issues: Reactivity & Rendering Mechanism

### Reactivity
 - What is Reactivity? when some states(JS data) change, other related states(DOM tree) also change automatically.
    - So first we need to monitor changes in JS data.
    - And second we need to apply changes in related states. 
    - How do we know what are the related states and how to change them?
        - So we need to track the related changes when JS data is used.
        - And then we need to trigger the related changes.
    - We have no way to monitor the native JS data. So we need to use data proxies: wrap data in object and monitor get&set methods.
        - Track Effect: track the related changes in get method
        - Trigger Effect: trigger the related changes in set method

### Rendering Mechanism
 - Vitrual DOM: custom data structure in JS which are used to abstract the real DOM.
    - Intermediate abstraction layer: JS data -> VDOM tree -> real DOM tree
 ```
    const vnode = {
        type: 'div',
        props: {
            id: 'hello'
        },
        children: [
            /* other vnodes */
        ]
    }
 ```
 - So how to render the vnode tree?
    - use the browser document API: create & modify the real DOM

### String Everything Together
 1. We use createApp and ref API to define JS data proxy & logic in \<script\>.
 2. We use {{JS data}} in HTML template while tracking the effect(update the VDOM tree) in data proxy's get method.
 3. We trigger the effect(update the VDOM tree) in data proxy's set method.
 4. The framework will monitor the VDOM tree's changes in some way, and update the real DOM tree.
 5. The browser will render the real DOM tree.
