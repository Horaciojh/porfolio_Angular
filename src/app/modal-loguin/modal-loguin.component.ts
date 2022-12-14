import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-loguin',
  templateUrl: './modal-loguin.component.html',
  styleUrls: ['./modal-loguin.component.css']
})
export class ModalLoguinComponent implements OnInit {

 form: FormGroup;

  constructor(private formBuilder: FormBuilder) {    //formsBuilder es un alias puede ser cualquier nombre
    this.form=this.formBuilder.group(
      {
      email:['',[Validators.required, Validators.email]], // datos requeridos y validacion de mail
      password:['',[Validators.required, Validators.minLength(8)]],// datos requerido y definicion de longitud de la pasword
   
      // lo que sigue lo saque del la master class modulo 8 y no se que hace 
    //   deviceInfo:this.formBuilder.group({
    //   deviceId: ["17867868768"],
    //   deviceType: ["DEVICE_TYPE_ANDROID"],    
    //   notificationToken: ["67657575eececc34"]
    // }) 
    
    })
   }

  ngOnInit() {}
//todo lo que esta aca son metodos para el formulario
    //toma el dato del password
    get Password(){
      return this.form.get("password");
    }

    //toma el dato del mail
    get Mail(){
      return this.form.get("email");
    }

    //metodo de validacion de password
    get PasswordValid() {
      return this.Password?.touched && !this.Password?.valid;
    }

   
    //metodo de validacion de mail
    get MailValid() {
      return this.Mail?.touched && !this.Mail?.valid;
    }

  
    onEnviar(event: Event){
      event.preventDefault;

      if (this.form.valid){
        alert("todo salio bien enviar formulario")
      }else{
        this.form.markAllAsTouched()
        alert("Hay errores el formulario no se envio");
      }
    }
   
  }

  

