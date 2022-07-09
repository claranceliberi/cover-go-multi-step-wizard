export {};

declare global {
    interface IPropsInput {
        type:string,
        value:string,
        placeholder:string,
        modelValue:string | number,
        name:string,
        id:string,
        [key:string]:any,
    }

    type selectOptionType = {
        value:string,
        label:string,
    }

    interface IPropsSelect {
        type:string,
        placeholder:string,
        modelValue:string | number,
        name:string,
        id:string,
        options:selectOptionType[],
        [key:string]:any,
    }
}