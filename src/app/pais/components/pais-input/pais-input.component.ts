import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Event } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit{

  @Output() onEnter   : EventEmitter<string> = new EventEmitter;
  @Output() onDebounce: EventEmitter<string> = new EventEmitter;

  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();
  
  busqueda: string = '';

  ngOnInit(){
    this.debouncer
      .pipe(debounceTime(200))
      .subscribe(valor => {
        this.onDebounce.emit(valor);
    });
  }

  buscar(){
    this.onEnter.emit(this.busqueda);
  }

  teclaPresionada(){
    this.debouncer.next(this.busqueda)
  }

}
