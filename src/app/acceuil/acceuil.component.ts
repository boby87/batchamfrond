import { Component, OnInit } from '@angular/core';
import {AcceuilService} from "../Service/AcceuilService";

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  public size:number=100;
  public currentpage:number=0;
  public totalpages:number;
  public page:Array<number>;

  constructor(public acceuilservice:AcceuilService) { }

  ngOnInit() {
    this.getAllPersonne(this.currentpage,this.size);
  }

  getAllPersonne(page:number,size:number){
    this.acceuilservice.is_charger=true;
    this.acceuilservice.getAllPersonne(page, size).subscribe(
      data=>{

        this.totalpages=data["totalPages"];
        this.page=new Array<number>(this.totalpages);
        this.acceuilservice.personne=data["content"];
      },
      ()=>{
        this.acceuilservice.is_charger=false;
      },
      ()=>{
        this.acceuilservice.is_charger=false;
      }
    )
  }

  onRecherche(mc:any){
    this.acceuilservice.is_charger=true;
    this.acceuilservice.getByPersonne(mc.nompersonne,this.currentpage, this.size).subscribe(
      data=>{

        this.totalpages=data["totalPages"];
        this.page=new Array<number>(this.totalpages);
        this.acceuilservice.personne=data["content"];
      },
      ()=>{
        this.acceuilservice.is_charger=false;
      },
    ()=>{
      this.acceuilservice.is_charger=false;
    }
    )
  }

  onpagepersonne(i:number) {
    this.currentpage=i;
    this.getAllPersonne(this.currentpage,this.size);
  }

}
