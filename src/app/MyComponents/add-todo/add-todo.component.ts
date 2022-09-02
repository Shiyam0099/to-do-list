import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  title!: string;
  description!: string;

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const todo = {
      id: Math.floor(Math.random() * 9999),
      title: this.title,
      description: this.description,
      active: true,
    };
    this.todoAdd.emit(todo);
  }
}
