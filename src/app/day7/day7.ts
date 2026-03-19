import { Component } from '@angular/core';
import { Mediator } from '../mediator';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-day7',
  imports: [JsonPipe],
  templateUrl: './day7.html',
  styleUrl: './day7.css',
})
export class Day7 {

  constructor(private mid: Mediator) {
    
  }
  mydata: any;

  ngOnInit() {
    console.log('-----------Day7------------');
    this.mydata = this.mid.senddatatoC2();

    console.log("data in C2", this.mydata);

  }

}
