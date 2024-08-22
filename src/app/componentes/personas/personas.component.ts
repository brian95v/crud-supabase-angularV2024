import { Component } from '@angular/core';
import { PersonasService } from 'src/app/services/personas.service';//Servicio de conexión
import { Persona } from 'src/app/data-models/personas.interface';
import { FormBuilder } from '@angular/forms';//Manejar el formulario reactivo

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
  //Testea si el formulario en visible o no
  verFormulario:boolean = false;
  //Arreglo del tipo Persona(creado en la insterfaz). Guarda los datos devueltos por la API
  listaPersonas: Persona[] | undefined;
  
  /* En el constructor del componente se instancian el ServicioPersonas y el FormoBuilder 
  para el manejo de formularios rectivos
   */
  constructor(private servicioPersonas: PersonasService, private fb: FormBuilder){}

  formPersonas = this.fb.group({
    dni: [''],
    email: [''],
    nombre_apellido: [''],
    fecha_nacimiento: ['']
  })

  //Evento que se ejecuta al iniciar el componente
  ngOnInit(): void {
    this.servicioPersonas.getAll().subscribe(data => this.listaPersonas = data);

    setTimeout(()=> (console.log(this.listaPersonas)), 3000);


  }
  //Método del botón
  btnAgregarPersona(): void {
    this.verFormulario = true;
  }

  btnCancelar(): void {
    this.verFormulario = false;
  }
}
