import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal-rrhh',
  templateUrl: './modal-rrhh.component.html',
  styleUrls: ['./modal-rrhh.component.css']
})
export class ModalRrhhComponent implements OnInit {

  constructor(private Habilidadrrhh:FormBuilder) {}

  contactForm=this.Habilidadrrhh.group({
    Nombre: ['',Validators.required],//para pasar mas de 1 validacion se pasa por array
    Porcentaje: ['' ,Validators.required],
  })

  ngOnInit(): void {}

  validarDatos(name:string):boolean{
    const inf = this.contactForm.get(name);
    return inf!.invalid && inf!.touched;
    
  }

  onEnviar(event: Event){
    event.preventDefault;
  
    if (this.contactForm.valid){
      alert("todo salio bien enviar formulario")
    }else{
      this.contactForm.markAllAsTouched()
      alert("Hay errores el formulario no se envio");
    }
  }

}
