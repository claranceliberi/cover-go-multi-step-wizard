import { Directive, onUnmounted } from 'vue';


function event<T>(name:string,data:T){
    return new CustomEvent(name, {detail: data, bubbles: true})
}

export const vStep:Directive<HTMLButtonElement,pageType> = {
    created(el, binding,vnode) {
        el.addEventListener('click',
        // B
        () => {
            const element = binding.instance?.$el;
            element.dispatchEvent(event('step', binding.value))
        })
    },
    unmounted(el) {
        // unregister the event  on block B
        // HINT:
        // el.removeEventListener('click',listenerToRemove )
    }
}