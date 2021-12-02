import { Component,OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: any;

  @Input() color: any;

  @Input() background: any;
  
  @Output()
  onPinTask = new EventEmitter<Event>();

  @Output() 
  onArchiveTask = new EventEmitter<Event>();

  constructor() { }

  ngOnInit(): void {
  }

  onPin(id: any) {
      this.onPinTask.emit(id);
  }

  onArchive(id: any) {
    this.onArchiveTask.emit(id);

  }
}

