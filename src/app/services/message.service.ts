import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from '../shared/message.model';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  baseUrl = 'https://demo.api.admin.circlesnow.com/ProductRESTService.svc/';
  httpHeader = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  getMessages() {
    return this.http.post(
      this.baseUrl + 'getSPDataWOAuth',
      JSON.stringify('GetSchedMsgLog 1'),
      {
        ...this.httpHeader,
      }
    );
  }

  postMessage(message: Message) {
    return this.http.post(this.baseUrl + 'schedMsg', message, {
      ...this.httpHeader,
    });
  }
}
