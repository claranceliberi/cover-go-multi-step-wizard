export {};

declare global {

    type selectOptionType = {
        value:string,
        label:string,
    }

    type pageType = 'start' | 'form' | 'summary' | 'error';
    

}