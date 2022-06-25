import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagesListComponent } from '../messages-list/messages-list.component';
import { NewMessageComponent } from '../new-message/new-message.component';

const routes: Routes = [
  { path: '', component: MessagesListComponent },
  { path: 'new-message', component: NewMessageComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
