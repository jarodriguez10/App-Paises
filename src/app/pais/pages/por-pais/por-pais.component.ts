import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li{
      cursor: pointer;
    }
  `
  ]
})
export class PorPaisComponent {

  busqueda: string = '';
  hayError: boolean = false;
  paises: Pais[] = []; 
  paisesSugeridos: Pais[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) { 

    //this.paises = JSON.parse(localStorage.getItem('paises')!) || [];
  
  }

  buscar(busqueda: string){

    this.mostrarSugerencias = false;
    this.hayError = false;
    this.busqueda = busqueda;

    this.paisService.buscarPais(this.busqueda)
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

  sugerencias(busqueda: string){
    this.hayError = false;
    this.busqueda = busqueda;
    this.mostrarSugerencias = true;
    this.paisService.buscarPais(busqueda)
      .subscribe( paises => this.paisesSugeridos = paises.slice(0,5),
      (err) => this.paisesSugeridos = []
    );

  }

  buscarSugerido(busqueda: string){
    this.buscar(busqueda);
  }

}
