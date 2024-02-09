import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { TweetListComponent } from './components/tweet-list/tweet-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ActionButtonComponent } from './components/shared/action-button/action-button.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserFormComponent } from './components/shared/user-form/user-form.component';
import { UserListItemComponent } from './components/user-list-item/user-list-item.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import {MatButtonModule} from '@angular/material/button';

const materialImports = [
  MatButtonModule
];

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    TweetListComponent,
    NavbarComponent,
    UserDetailsComponent,
    ActionButtonComponent,
    UserAddComponent,
    UserEditComponent,
    UserFormComponent,
    UserListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ...materialImports
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
