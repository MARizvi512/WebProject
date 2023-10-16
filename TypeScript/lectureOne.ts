export class AliasandInterface{

     

     TypeDefine() : any {
        type a = number;
        type b = string;

        const carModel : a = 2001;
        const carName : b = 'civic';

        return {carModel,carName};

    }
    Run(getObject:any)
    {
        type c = any;
        const _typedefine : c = this.TypeDefine();

        getObject.innerHTML=_typedefine.carModel + " " + _typedefine.carName;

    }
}

//getObject="ss";





