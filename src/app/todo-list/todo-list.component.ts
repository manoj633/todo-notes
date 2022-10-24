import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { todo } from '../model/todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos!: todo[];

  constructor(private todoService: TodoService, private router: Router) {
  }

  ngOnInit(): void {
    this.todoService.getTasks();
  }

  onAddTask() {
    this.router.navigate(['addTask']);
  }

}
