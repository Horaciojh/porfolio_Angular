import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-datos-personal',
  templateUrl: './datos-personal.component.html',
  styleUrls: ['./datos-personal.component.css']
})
export class DatosPersonalComponent implements OnInit {

  personal : any;
  constructor(private datos:DatosService) { }

  ngOnInit(): void {
    this.datos.getDates().subscribe(data => { 
      this.personal = data.datosPersonales
    })
  }
  
  mostrar:boolean=true;
  // mostrarNoMostrar()
  // {
  //   this.mostrar=!this.mostrar;
  // }


}
