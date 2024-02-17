# Learning while coding Todo-List Project

## Create APP
 - App is also a component, just like other components. It's called the root component.
 - The Root Component(App) should mount on a container(usually a simple div).
 - So, a compiled SPA is a Javascript module, and this JS module will mount on a div, which belonds a simple html page(index.html).

## Data & Functions Passing between Components
 - It will be an easy problem if the data will only be used inside the components.
 - In most cases, data will be used in more than one components. then the data should be maintained in the parent component, and be passed to the children components through "props". But it will raise a new problem: children components can not multify parent's data. so you should pass the relative functions too.
 - It will make the code really complex and difficult to read. So, I think it will be an good idea to have a specific module to managing all the common data and the relative functions for all components. And each component only needs to proxy its own data requests to that module.
 - After reading the document, I think Vuex is the designed for this job. But it was deprecated, they recommend Pinia instead. Leave it for some other day.