import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';
import { BrowserModule } from '@angular/platform-browser';

import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SigninComponent } from './signin/signin.component';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/Forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { AdminComponent } from './admin/admin.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      validationMessages: [
        {
          name: 'required',
          message: 'This field is required',
        },
      ],
    }),
    FormlyBootstrapModule,
  ],
  bootstrap: [AppComponent, AdminComponent, LoginComponent, IndexComponent],
})
export class AppModule {}
