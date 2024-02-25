import { Component, OnInit } from '@angular/core';
import { Barco } from './barco';
import { BarcoServiceService } from './barco-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-barco-component',
  templateUrl: './barco-component.component.html',
  styleUrls: ['./barco-component.component.css']
})
export class BarcoComponentComponent implements OnInit{
  
  barcos: Barco[] = [];

  swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });
  
  constructor(private barcoService: BarcoServiceService){}
  
  ngOnInit(): void {
   
    this.barcoService.getBarcos().subscribe(
      barcos => this.barcos = barcos
    );
  }

  delete(barco: Barco): void{
    this.swalWithBootstrapButtons.fire({
      title: "Está seguro?",
      text: `¿Seguro que desea eliminar el barco ${barco.matricula}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, deseo eliminar!",
      cancelButtonText: "No, cancelar!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        this.barcoService.delete(barco.id).subscribe(
          response => {  
            this.barcoService.getBarcos().subscribe(
              barcos => this.barcos = barcos
            );        
            //this.personas = this.personas.filter(p => p !== persona)
            Swal.fire("Barco Eliminado!", `Barco ${barco.matricula} eliminado con éxito.`, `success`)
            
          }
        )
      }
    });
  }

}
