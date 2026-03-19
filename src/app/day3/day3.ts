import { Component } from '@angular/core';

@Component({
  selector: 'app-day3',
  imports: [],
  templateUrl: './day3.html',
  styleUrl: './day3.css',
})
export class Day3 {

  is_visible: boolean = false;
  time: number = 20;

  places: string[] = ['New York', 'London', 'Paris', 'Berlin', 'Tokyo'];


  students: any[] = [
    { name: 'Alice', age: 22, grade: 'A' },
    { name: 'Stefin', age: 23, grade: 'A+' },
    { name: 'Febina', age: 22, grade: 'A-' },
    
  ]

}
