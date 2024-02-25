import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Barco } from 'src/app/barco-component/barco';
import { BarcoServiceService } from 'src/app/barco-component/barco-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-crea-barco-component',
  templateUrl: './form-crea-barco-component.component.html',
  styleUrls: ['./form-crea-barco-component.component.css']
})
export class FormCreaBarcoComponentComponent implements OnInit{
 
  public barco!: Barco
  public titulo1:string = "Crear Barco"
  public titulo2:string = "Editar Barco"
  public id!:number;

  get matricula(){
    return this.formBarco.get('matricula') as FormControl;
  }
  get n_amarre(){
    return this.formBarco.get('n_amarre') as FormControl;
  }
  get cuota(){
    return this.formBarco.get('cuota') as FormControl;
  }
  get personaId(){
    return this.formBarco.get('personaId') as FormControl;
  }


  formBarco = new FormGroup({
    'matricula': new FormGroup('', [Validators.required, Validators.pattern("[0-9]{4}")]),
    'n_amarre': new FormGroup(1, [Validators.required, Validators.min(1), Validators.max(100)]),
    'cuota': new FormGroup(0, [Validators.required, Validators.min(0), Validators.max(1000)]),
    'personaId': new FormGroup(0, Validators.required)
  });



  constructor(private barcoService: BarcoServiceService, private router: Router, private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.cargarBarco();
  }

  public create(): void{
    let barco = <Barco>this.formBarco.value;
    this.barcoService.create(barco).subscribe(
      response => {
        this.router.navigate(['/barcos'])
        Swal.fire("Nuevo barco", `Barco ${this.barco.matricula} creado con éxito`, "success")
      }
    )
  }

  cargarBarco():void{
    this.activatedRoute.params.subscribe(
      params => {
        this.id = params['id']
        if(this.id){
          this.barcoService.getBarco(this.id).subscribe(
            (res) => this.barco = res
          )
        }
      }
    )
  }

  update():void{
    this.barcoService.update(this.barco).subscribe(
      barco => {
        this.router.navigate(['/barcos'])
        Swal.fire('Barco Actualizado', `Barco ${barco.matricula} actualizado con éxito`, 'success')
      }
    )
  }

}
