import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Personne} from "../Model/Personne";
import {Adresse} from "./Adresse";

@Injectable({
  providedIn:"root"
})
export class AcceuilService {

  public person:Personne=new Personne();
  public personne:Personne[]=[];
  public is_charger:boolean=false;
  public isLogin:boolean;
  constructor(public httpclient:HttpClient){}

  getAllPersonne(page:number,size:number){

    return this.httpclient.get<Personne[]>(Adresse.host+"/personnes?page="+page+"&size="+size);
  }

  getByPersonne(mc:string,page:number,size:number){

    return this.httpclient.get<Personne[]>(Adresse.host+"/personne/"+mc+"?page="+page+"&size="+size);
  }
  connection(nom:string,password:string){
    return this.httpclient.get<Personne>(Adresse.host+'/connection/'+nom+'/'+password);
  }

}
