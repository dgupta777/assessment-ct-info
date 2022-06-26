import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageService } from '../services/message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss'],
})
export class NewMessageComponent implements OnInit, OnDestroy {
  messageForm!: FormGroup;
  loading = false;
  errMsg = '';
  msgSubscription!: Subscription;
  @ViewChild('mForm') messageFormDirective: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  ngOnDestroy(): void {
    if (this.msgSubscription) this.msgSubscription.unsubscribe();
  }

  createForm() {
    this.messageForm = this.fb.group({
      title: ['', Validators.required],
      launchdate: [new Date(), Validators.required],
      author: ['', Validators.required],
      image_link: '',
      description: '',
    });
  }

  onSubmit() {
    this.loading = true;
    this.msgSubscription = this.messageService
      .postMessage(this.messageForm.value)
      .subscribe(
        () => {
          this.loading = false;
          this.openSnackBar();
          this.messageForm.reset({
            title: '',
            launchdate: new Date(),
            author: '',
            image_link: '',
            description: '',
          });
          this.messageFormDirective.resetForm();
          this.router.navigate(['/']);
        },
        (err: { message: string }) => {
          this.loading = false;
          this.errMsg = err.message;
        }
      );
  }

  openSnackBar() {
    this.snackBar.open('Message sent successfully.', '', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 3000,
      panelClass: ['snakeBarClass'],
    });
  }
}
