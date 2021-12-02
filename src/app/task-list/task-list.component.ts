import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }


  tasksInOrder: Task[] = [
    {id: '1' , title:'task1', state:'TASK_INBOX', color:'black' ,background : 'rgba(100, 100 , 100 , 0.6)' },
    {id: '2' , title:'task2', state:'TASK_INBOX', color:'black' ,background : 'rgba(100, 100 , 100 , 0.6)' },
    {id: '3' , title:'task3', state:'TASK_INBOX', color:'black' ,background : 'rgba(100, 100 , 100 , 0.6)'},
    {id: '4' , title:'task4', state:'TASK_INBOX', color:'black' ,background : 'rgba(100, 100 , 100 , 0.6)'},
    {id: '5' , title:'task5', state:'TASK_INBOX', color:'black' ,background : 'rgba(100, 100 , 100 , 0.6)'},
    {id: '6' , title:'task6', state:'TASK_INBOX', color:'black' ,background : 'rgba(100, 100 , 100 , 0.6)'},
    {id: '7' , title:'task7', state:'TASK_PINNED', color:'blue' ,background : 'rgba(100, 100 , 100 , 0.6)'},
    {id: '8' , title:'task8', state:'TASK_PINNED', color:'blue' ,background : 'rgba(100, 100 , 100 , 0.6)'},
   
   ];
 

  /** The list of tasks */
  @Input()
  set tasks(arr: Task[]) {
    this.tasksInOrder = [
      ...arr.filter(t => t.state === 'TASK_PINNED'),
      ...arr.filter(t => t.state !== 'TASK_PINNED'),
    ];
  }

  
  /** Checks if it's in loading state */
  @Input() loading = false;

  /** Event to change the task to pinned */
  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onPinTask = new EventEmitter<Event>();

  /** Event to change the task to archived */
  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onArchiveTask = new EventEmitter<Event>();


}

