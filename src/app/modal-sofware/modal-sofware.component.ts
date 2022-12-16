import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-modal-sofware',
  templateUrl: './modal-sofware.component.html',
  styleUrls: ['./modal-sofware.component.css']
})
export class ModalSofwareComponent implements OnInit {

  constructor(private HabilidadSoft:FormBuilder) {}

  contactForm=this.HabilidadSoft.group({
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
