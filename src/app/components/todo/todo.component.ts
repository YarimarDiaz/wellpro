import { Component, OnInit } from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {


  userValue: string = "";
  toDoList: string[] = [];
  // toDoList: Array<string> = [];

  typesOfShoes: string[] = ['Contactar con el grupo 4 de encuestados para ver si respondieron o no.', 'Hacer seguimiento del grupo 5', 'Recoger resultados del grupo 1 de encuestados', 'Enviar las encuestas que faltan', 'Contactar con equipo para feedback'];

  days: string[] = ['Lunes 21 de septiembre', 'Martes 22 de septiembre', 'Miércoles 23 de septiembre', 'Jueves 24 de septiembre', 'Viernes 25 de septiembre'];

  constructor() { }

  ngOnInit(): void {}

  addTodo() {
   this.toDoList.push(this.userValue);
  }

  // toggle(event){
  //   console.log(event.source.value, 'holi');
  // }

}
