export {};

declare global {

    interface SelectionType<T = string> {
        value:T,
        label:string,
    }

    type pageType = 'start' | 'form' | 'summary' | 'error';

    type packageType = 'Standard' | 'Safe' | 'Super Safe';
    type currencyType = 'USD' | 'HKD' | 'AUD';
    
    interface IInformation{
        name:string,
        age:number,
        country:string,
        package:packageType,
        premium?:string,
    }

    interface ProvideType{
        info:IInformation,
        updateInfo:(info:IInformation)=>void,
        updatePremium:(premium:string)=>void,
    }
}