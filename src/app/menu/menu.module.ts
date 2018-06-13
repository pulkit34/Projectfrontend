import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodohomeComponent } from './todohome/todohome.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodosComponent } from './todos/todos.component';
import { MultiUserComponent } from './multi-user/multi-user.component';
import { FriendComponent } from './friend/friend.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'todomenu', component: TodohomeComponent },
      { path: 'multi-user', component: MultiUserComponent },
      { path: 'friend', component: FriendComponent }
    ]),
    FormsModule
  ],
 declarations: [TodohomeComponent, TodosComponent, MultiUserComponent, FriendComponent]
})
export class MenuModule { }
