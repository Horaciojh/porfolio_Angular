import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  sociales: any;
  constructor(private datos:DatosService) { }

  ngOnInit(): void {
    this.datos.getDates().subscribe(data => {
      this.sociales=data.social
    })
  }

}

