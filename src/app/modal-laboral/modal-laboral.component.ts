import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal-laboral',
  templateUrl: './modal-laboral.component.html',
  styleUrls: ['./modal-laboral.component.css']
})
export class ModalLaboralComponent implements OnInit {

  constructor(private TrabajosRealizados:FormBuilder) {}

  contactForm=this.TrabajosRealizados.group({
    Empresa: ['',Validators.required],//para pasar mas de 1 validacion se pasa por array
    Tarea: ['' ,Validators.required],
    Inicio: ['',Validators.required],
    Fin: [''],
    Descripcion: ['',Validators.required],
    Img: [''],
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
