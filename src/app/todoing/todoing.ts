import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MediatorApi } from '../mediator-api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todoing',
  imports: [FormsModule],
  templateUrl: './todoing.html',
  styleUrl: './todoing.css',
})
export class Todoing {

  constructor(private mediatorApi: MediatorApi, private route:Router) { }


  create(todo: any) {
    console.log(todo);

    this.mediatorApi.saveTodo(todo).subscribe(
      (response: any) => {
        console.log("To-Do item saved successfully:", response);
      },
      (error: any) => {
        console.error("Error saving To-Do item:", error);
      }

      
    ) ;
  }
  }
  


