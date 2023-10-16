import {AliasandInterface} from './lectureOne';
export class IExportHandling{

    typeScriptObj : {[index: string] : number | string } = {};

     Output(){
         let getObject : any = document.getElementById("output");
         const lecture=new AliasandInterface();
         lecture.Run(getObject);
     }
}

let Iexport=new IExportHandling();
Iexport.Output();