import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';


@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  
  saberes : any; //trabajosos
  constructor(private datos:DatosService) { }

  ngOnInit(): void {
    this.datos.getDates().subscribe(data => {
      this.saberes = data.estudio //trabajosos  
    })
  }

}
