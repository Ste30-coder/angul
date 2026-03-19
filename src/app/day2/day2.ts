import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-day2',
  imports: [FormsModule],
  templateUrl: './day2.html',
  styleUrl: './day2.css',
})
export class Day2 {

  msg = 'Hello, from Day2 Component'
  type = 'radio'

  checkboxType = 'checkbox'

  display(s: string) {
    alert("Button Clicked");
    console.log("Button Clicked");
    console.log(s);
  }

  changetext: string = 'Initial Text';

  newtext: string = "hello";


  
  } 
