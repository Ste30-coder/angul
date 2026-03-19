import { Routes } from '@angular/router';
import { Day1 } from './day1/day1';
import { Day2 } from './day2/day2';
import { Day3 } from './day3/day3';
import { Day4 } from './day4/day4';
import { Day5 } from './day5/day5';
import { Day7 } from './day7/day7';
import { Day6 } from './day6/day6';
import { Todoing } from './todoing/todoing';
import { Day8 } from './day8/day8';
import { TodoEdit } from './todo-edit/todo-edit';

export const routes: Routes = [
    { path:'D1', component: Day1 },
    { path: 'D2', component: Day2 },
    { path: 'D3', component: Day3 },
    { path: 'D4', component: Day4 },
    { path: 'D5', component: Day5 },
    { path: 'D6', component: Day6 },
    { path: 'D7', component: Day7 },
    { path: 'D8', component: Day8 },
    { path: 'todoing', component: Todoing },
    { path: 'todoedit/:id', component: TodoEdit}
    
];
