import { Component, OnInit } from '@angular/core';
import { Persona } from './persona';
import { PersonaServiceService } from './persona-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-persona-component',
  templateUrl: './persona-component.component.html',
  styleUrls: ['./persona-component.component.css']
})
export class PersonaComponentComponent implements OnInit{

  personas: Persona[] = [];

  swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });

  constructor(private personaService: PersonaServiceService){}


  ngOnInit(): void {
    
    this.personaService.getPersonas().subscribe(
      personas => this.personas = personas
    );
  }

  delete(persona: Persona): void{
    this.swalWithBootstrapButtons.fire({
      title: "Está seguro?",
      text: `¿Seguro que desea eliminar a la persona ${persona.nombre} ${persona.apellidos}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, deseo eliminar!",
      cancelButtonText: "No, cancelar!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        this.personaService.delete(persona.id).subscribe(
          response => {  
            this.personaService.getPersonas().subscribe(
              personas => this.personas = personas
            );        
            //this.personas = this.personas.filter(p => p !== persona)
            Swal.fire("Persona Eliminada!", `Persona ${persona.nombre} eliminada con éxito.`, `success`)
            
          }
        )
      }
    });
  }

}
