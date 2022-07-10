import { InjectionKey } from "vue";

// provide key , this is used to support typings for the provide property in the vue component
export const key = Symbol() as InjectionKey<ProvideType> 