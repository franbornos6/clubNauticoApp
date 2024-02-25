import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/persona-component/persona';
import { PersonaServiceService } from 'src/app/persona-component/persona-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-crea-persona',
  templateUrl: './form-crea-persona.component.html',
  styleUrls: ['./form-crea-persona.component.css']
})
export class FormCreaPersonaComponent implements OnInit{

  public persona!: Persona 
  public titulo1:string = "Crear Persona"
  public titulo2:string = "Editar Persona"
  public personaEsSocio:boolean = false
  public id!:number;

  get dni(){
    return this.formPersona.get('dni') as FormControl;
  }
  get nombre(){
    return this.formPersona.get('nombre') as FormControl;
  }
  get apellidos(){
    return this.formPersona.get('apellidos') as FormControl;
  }
  get telefono(){
    return this.formPersona.get('telefono') as FormControl;
  }
  get esSocio(){
    return this.formPersona.get('esSocio') as FormControl;
  }
  get esPatron(){
    return this.formPersona.get('esPatron') as FormControl;
  }

  formPersona = new FormGroup({
    'dni': new FormControl('', [Validators.required, Validators.pattern("^[0-9]{8}[A-Z]{1}")]),
    'nombre': new FormControl('', Validators.required),
    'apellidos': new FormControl('', Validators.required),
    'telefono': new FormControl('', [Validators.required, Validators.pattern("(6)([0-9]){8}")]),
    'esSocio': new FormControl(false),
    'esPatron': new FormControl(false)
  });

  

  constructor(private personaService: PersonaServiceService, private router: Router, private activatedRoute:ActivatedRoute){}
  

  ngOnInit(): void {
    this.cargarPersona();
  }

  
  public create(): void{
    let persona = <Persona>this.formPersona.value;
    this.personaService.create(persona).subscribe(
      response => {
      
      this.router.navigate(['/personas'])
      Swal.fire("Nueva persona", `Persona ${this.persona.nombre} creado con éxito`, "success")
      }
    )
  }

  cargarPersona():void{
    this.activatedRoute.params.subscribe(
      params => {
         this.id = params['id']
        if(this.id){
          this.personaService.getPersona(this.id).subscribe(
            (res) => this.persona = res
            
          )
        }
      }
    )
  }

  update():void{
    this.personaService.update(this.persona).subscribe(
      persona => {
        this.router.navigate(['/personas'])
        Swal.fire('Persona Actualizada', `Persona ${persona.nombre} actualizada con éxito`, 'success')
      }
    )
  }

}
