import { Injectable } from '@angular/core';
import { throws } from 'assert';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  todoTasks!: Task[];
  tasksChanged = new Subject<Task[]>();

  getTasks() {
    return this.todoTasks.slice();
  }

  setTasks(todoList: Task[]) {
    this.todoTasks = todoList;
    this.tasksChanged.next(this.todoTasks);
  }

  getTask(id: number) {
    return this.todoTasks.slice()[id];
  }

  setTask(inputTask: Task) {
    this.todoTasks.push(inputTask);
    this.tasksChanged.next(this.todoTasks);
  }
}
