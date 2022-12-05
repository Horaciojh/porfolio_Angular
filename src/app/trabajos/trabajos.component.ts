import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {

    trabajos : any;
  constructor(private datos:DatosService) { }

  ngOnInit(): void {
    this.datos.getDates().subscribe(data => {
      this.trabajos = data.trabajo
    })
  }

}
