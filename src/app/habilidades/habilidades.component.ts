import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidad_Sof : any;
  manejoPersonal : any;

  constructor(private datos:DatosService) { }

  ngOnInit(): void {
    this.datos.getDates().subscribe(data => {
      this.habilidad_Sof=data.software
    })
    
    this.datos.getDates().subscribe(data => {
      this.manejoPersonal=data.rrhh
    })

  }

}
