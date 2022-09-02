import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  localItem: string | null;
  todos: Todo[];

  constructor() {
    this.localItem = localStorage.getItem('todos');
    if (this.localItem === null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {}

  deleteTodo(todo: Todo) {
    console.log(todo);
    const todoIndex = this.todos.indexOf(todo);
    this.todos.splice(todoIndex, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  toggleTodo(todo: Todo) {
    const todoIndex = this.todos.indexOf(todo);
    this.todos[todoIndex].active = !this.todos[todoIndex].active;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
