import { Directive, onUnmounted } from 'vue';

function event<T>(name:string,data:T){
    return new CustomEvent<T>(name, {detail: data, bubbles: true})
}

// directive to listen on the step change (when a user clicks on a step)
// and fires an event to the parent component
// the parent component should listen for this event and update the current step
export const vStep:Directive<HTMLButtonElement,pageType> = {
    created(el, binding) {
        el.addEventListener('click',() => {
            const element = binding.instance?.$el;
            // dispatch event to parent conmponent ( the instance that contains the element that this directive is attached to )
            element.dispatchEvent(event('step', binding.value))
        })
    },
}