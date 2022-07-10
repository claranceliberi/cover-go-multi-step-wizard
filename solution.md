# Solution

To make this multistep i used different techniques which my seem absurd at first.
But i'll do my best to make u understand why i used what i used

### Tools Used
*  **Framework** : Vue.js [(Vue 3 - composition api)](https://vuejs.org/) 
with [Vite ⚡](https://vitejs.dev/)
*  **TypeChecking** : Typescript
*  **Testing Unit** : [Vue Test Utils](https://test-utils.vuejs.org/) and 
    [Jest](https://jestjs.io/). I should have used Vitest ⚡ but  it is not yet 
    stable , so I sacrificed Speed to have stable packages
*  **Code Formating** : Eslint and Prittier
*  **Design Pattern** : [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/), To be real this made this simple work complicated 😁, but i developed
    this as if it  is going to be big codebase and as if there are alot of things going to be added to it.
    
    So this helped me to organize the project and might be easy for anyone to 
    add new functionalities
    
### Tools I should have used
* **Vue-router**: I should have used this, but i found that there is no need in the current project, but i made sure that whenever someone want to add it, It'd be 
smooth
* **Pinia/Vuex**: I mean state-managment, I personaly preffer Pinia, but i think 
    was not that  neccessary to add , i simple used `provide/inject` to share 
    data accross components

### Briefing on the solution

Simply this multi-step wizard was made by not using pages, but just only
components and events, if you take look on my project structure the steps are 
in `components/organisms` folder.

This is how multistep works.
1. I made a directive called `v-step` which is attached to a button to indicate 
    where the user will be redirected when he clicks on the button , 
    ```html
    <button v-step='form'>Next<button>
    ```
    This is supposed to redirect user to `form` component
    
2. `v-step` directive, trigger `step` event on parent componet where the button 
    relies.
3. In the main page that where i have all of step components, i listen to `step`
    event to know when user wants to change step
4. Let us say the button was clicked, `v-step` triggered `step` with `form` value as 
    the distination. at this point there is a function that wil check certain things (like data validity) if everything is fine redirect user to the `form` page
5. Boom🪄. We are on other page


### Useful commands
```
1. yarn dev // to start the app
2. yarn test // to test app
```
