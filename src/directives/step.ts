import { Directive, onUnmounted } from 'vue';


function event<T>(name:string,data:T){
    return new CustomEvent<T>(name, {detail: data, bubbles: true})
}

export const vStep:Directive<HTMLButtonElement,pageType> = {
    created(el, binding) {
        el.addEventListener('click',
        // B
        () => {
            const element = binding.instance?.$el;
            const a =
            element.dispatchEvent(event('step', binding.value))
        })
    },
    unmounted(el) {
        // unregister the event  on block B
        // HINT:
        // el.removeEventListener('click',listenerToRemove )
    }
}