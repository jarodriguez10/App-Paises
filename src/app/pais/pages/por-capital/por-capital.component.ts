import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  busqueda: string = '';
  hayError: boolean = false;
  paises: Pais[] = []; 

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(busqueda: string){
    this.hayError = false;
    this.busqueda = busqueda;
    this.paisService.buscarCapital(this.busqueda)
    .subscribe(
      (paises) => {
        console.log(paises);
        this.paises = paises;
        //localStorage.setItem('paises', JSON.stringify(this.paises));
      },
      (err) => {
        this.hayError = true;
        this.paises= [];
      }
    );
  }

}
