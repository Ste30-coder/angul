import { Component } from '@angular/core';
import { MediatorApi } from '../mediator-api';
import { ActivatedRoute } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-edit',
  imports: [JsonPipe,FormsModule],
  templateUrl: './todo-edit.html',
  styleUrl: './todo-edit.css',
})
export class TodoEdit {

  constructor(private rut: ActivatedRoute, private mediator: MediatorApi) { }

  idnum: any;
  mydata: any;

  ngOnInit(): void {
    // in a real app, you would fetch the todo item by ID and populate the form
    alert("Todo Edit Page - Ina real app, this would be a form to edit the todo item with ID: " + this.rut.snapshot.params['id']);
    const id = this.rut.snapshot.paramMap.get('id');
    console.log("Editing todowith id: " + id);
    this.idnum = id;
    this.mediator.getTodoById(this.idnum).subscribe((data: any) => {
      console.log(data);

      this.mydata = data;
      // In a real app, you would navigate to an edit page or show a form pre-populated with the todo data

    });
  }
    // Add this function inside the TodoEdit class
  saveData() {
    this.mediator.updateTodo(this.idnum, this.mydata).subscribe((response) => {
      console.log("Update successful", response);
      alert("Todo updated successfully!");
      
    });
  }

}
