export {};

declare global {

    type selectOptionType = {
        value:string,
        label:string,
    }

    type pageType = 'start' | 'form' | 'summary' | 'error';

    type packageType = 'Standard' | 'Safe' | 'Supa Safe';
    
    interface IInformation{
        name:string,
        age:number,
        country:string,
        package:packageType | '',
    }

    interface ProvideType{
        info:IInformation,
        updateInfo:(info:IInformation)=>void,
    }
}