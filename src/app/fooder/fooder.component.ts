import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-fooder',
  templateUrl: './fooder.component.html',
  styleUrls: ['./fooder.component.css']
})
export class FooderComponent implements OnInit {

  sociales: any;
  constructor(private datos:DatosService) { }

  ngOnInit(): void {

    this.datos.getDates().subscribe(data => {
      this.sociales=data.social
    })
  }

}
