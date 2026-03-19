import { Component } from '@angular/core';
import { MediatorApi } from '../mediator-api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-day8',
  imports: [],
  templateUrl: './day8.html',
  styleUrl: './day8.css',
})
export class Day8 {
  mydata: any;
  constructor(private mediator: MediatorApi,private rot:Router) { }

  ngOnInit(): void {

    this.mediator.getTodos().subscribe((data: any) => {
      console.log(data);
      this.mydata = data;
    });
  }
  deleteTodo(id: number){
        console.log("Deleting todo with id: " + id);
        this.mediator.deleteTodo(id).subscribe((response: any) => {
          console.log(response);
          // after deletion, refresh the todo list
          alert("Todo deleted successfully");

          this.ngOnInit();
      });
      
  }
  editTodo(id: number) {
    console.log("Editing todo with id: " + id);
    this.mediator.getTodoById(id).subscribe((data: any) => {
      console.log(data);
      // Ina real app, you would navigate to an edit page or show
      alert("Editing todo: " + id);
      this.rot.navigate(['/todoedit', id]);
    });
  }
}

