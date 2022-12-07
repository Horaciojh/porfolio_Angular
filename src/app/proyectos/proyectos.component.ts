import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectosRealizados : any;

  constructor(private datos:DatosService) { }

  ngOnInit(): void {
    this.datos.getDates().subscribe(data => {
      this.proyectosRealizados = data.experiencia
    })

  }

}
