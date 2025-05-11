import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Build first prototype',
      summary: 'Build first prototype of the online shop.',
      dueDate: '2025-05-21'
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular.',
      dueDate: '2025-04-20'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary: 'Prepare issue template which will help with project management.',
      dueDate: '2025-07-12'
    }
  ]

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
