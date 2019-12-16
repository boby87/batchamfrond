import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Personne} from "../Model/Personne";
import {Adresse} from "./Adresse";

@Injectable({
  providedIn:"root"
})
export class AcceuilService {

  public personne:Personne[]=[];
  constructor(public httpclient:HttpClient){}

  getAllPersonne(page:number,size:number){

    return this.httpclient.get<Personne[]>(Adresse.host+"/personnes?page="+page+"&size="+size);
  }

  getByPersonne(mc:string,page:number,size:number){

    return this.httpclient.get<Personne[]>(Adresse.host+"/personne/"+mc+"?page="+page+"&size="+size);
  }

}
