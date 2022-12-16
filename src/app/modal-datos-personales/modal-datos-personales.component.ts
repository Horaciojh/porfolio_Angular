import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal-datos-personales',
  templateUrl: './modal-datos-personales.component.html',
  styleUrls: ['./modal-datos-personales.component.css']
})
export class ModalDatosPersonalesComponent implements OnInit {
 
  constructor(private DatosPersonales:FormBuilder) { }
  
  contactForm=this.DatosPersonales.group({
    Apellido: ['',Validators.required],//para pasar mas de 1 validacion se pasa por array
    Nombre: ['' ,Validators.required],
    Nacimiento: [''],
    Edad: [''],
    Residencia: [''],
    Nacionalidad: [''],
    Email: ['',[Validators.required, Validators.email]],
    Telefono: ['',[Validators.required, Validators.minLength(8)]],
    Descripcion: ['',[Validators.required, Validators.maxLength(200)]],
  })

  

  ngOnInit(): void {}

    onSubmit(): void {
      console.log('Texto devuelto' + JSON.stringify(this.contactForm.value))
    }
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
