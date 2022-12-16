import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal-estudios',
  templateUrl: './modal-estudios.component.html',
  styleUrls: ['./modal-estudios.component.css']
})
export class ModalEstudiosComponent implements OnInit {

  constructor(private EstudiosRealizados:FormBuilder) {}

  contactForm=this.EstudiosRealizados.group({
    Titulo: ['',Validators.required],//para pasar mas de 1 validacion se pasa por array
    Estado: ['' ,Validators.required],
    Descripcion: ['',Validators.required],
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
