import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../services/message.service';
import { Message } from '../shared/message.model';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss'],
})
export class MessagesListComponent implements OnInit, OnDestroy {
  messagesList: Message[] = [];
  displayedColumns: string[] = ['launchDate', 'title', 'author'];
  msgSubscription!: Subscription;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.msgSubscription = this.messageService
      .getMessages()
      .subscribe((data) => {
        this.messagesList = Object.values(
          JSON.parse(Object.values(data)[0])
        )[0] as Message[];
      });
  }

  ngOnDestroy(): void {
    if (this.msgSubscription) this.msgSubscription.unsubscribe();
  }
}
