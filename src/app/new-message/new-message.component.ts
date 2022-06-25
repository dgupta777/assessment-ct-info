import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss'],
})
export class NewMessageComponent implements OnInit {
  messageForm!: FormGroup;
  loading = false;
  errMsg = '';
  @ViewChild('mForm') messageFormDirective: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.messageForm = this.fb.group({
      title: ['', Validators.required],
      launchDate: [new Date(), Validators.required],
      author: ['', Validators.required],
      imageLink: '',
      desc: '',
    });
  }

  onSubmit() {
    this.loading = true;
    console.log(this.messageForm.value);
    setTimeout(() => {
      this.loading = false;
      this.openSnackBar();
      this.messageForm.reset({
        title: '',
        launchDate: new Date(),
        author: '',
        imageLink: '',
        time: '',
        desc: '',
      });
      this.messageFormDirective.resetForm();
      this.router.navigate(['/']);
    }, 3000);
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
