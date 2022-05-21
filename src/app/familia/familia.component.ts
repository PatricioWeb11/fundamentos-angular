import { Component } from '@angular/core';

@Component({
  selector: 'app-familia',
  templateUrl: './familia.component.html',
  styleUrls: ['./familia.component.css']
})
export class FamiliaComponent {
  titulo: string = 'Listado de familiares';
  personas: string[] = ['patricio', 'pablo', 'monica', 'elian', 'emilio'];
  personaNueva: string = '';

  agregar(){
    this.personas.push(this.personaNueva);
    this.personaNueva = '';
  }

  quitar(){
    this.personas.pop();
  }
}
