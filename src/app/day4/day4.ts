import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { SamplepipePipe } from '../samplepipe-pipe';

@Component({
  selector: 'app-day4',
  imports: [JsonPipe,UpperCasePipe,CurrencyPipe,LowerCasePipe,DatePipe,SamplepipePipe],
  templateUrl: './day4.html',
  styleUrl: './day4.css',
})
export class Day4 {


  day: string = '13';
  employee = {
    name: 'Stefin',
    dob: '2-08-2003',
    salary: 75000
  }

}
