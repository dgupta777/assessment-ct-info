import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss'],
})
export class MessagesListComponent implements OnInit {
  messagesList = [
    {
      launchDate: new Date(),
      title: 'hello world hello world hello world ',
      author: 'Hello World',
    },
    {
      launchDate: new Date(),
      title: 'hello world hello world hello world ',
      author: 'Hello World',
    },
    {
      launchDate: new Date(),
      title: 'hello world hello world hello world ',
      author: 'Hello World',
    },
    {
      launchDate: new Date(),
      title: 'hello world hello world hello world ',
      author: 'Hello World',
    },
    {
      launchDate: new Date(),
      title: 'hello world hello world hello world ',
      author: 'Hello World',
    },
    {
      launchDate: new Date(),
      title: 'hello world hello world hello world ',
      author: 'Hello World',
    },
    {
      launchDate: new Date(),
      title: 'hello world hello world hello world ',
      author: 'Hello World',
    },
  ];

  displayedColumns: string[] = ['launchDate', 'title', 'author'];
  dataSource = this.messagesList;

  constructor() {}

  ngOnInit(): void {}
}
