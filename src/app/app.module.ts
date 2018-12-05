import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {SelectApiModule} from 'projects/select-api/src/select-api/select-api.module';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {NoopInterceptor} from './noop-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    ProfileEditorComponent,
  ],
  imports: [
    BrowserModule,
    SelectApiModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
