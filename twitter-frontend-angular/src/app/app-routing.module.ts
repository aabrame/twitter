import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { TweetListComponent } from './components/tweet-list/tweet-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { TweetDetailsComponent } from './components/tweet-details/tweet-details.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'users/edit/:id', component: UserEditComponent },
  { path: 'users/add', component: UserAddComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'tweets', component: TweetListComponent },
  { path: 'tweets/:id', component: TweetDetailsComponent },
  { path: '', redirectTo: '/tweets', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
