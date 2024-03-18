import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { ToastComponent } from './toast/toast.component';
import { ChartModule } from 'primeng/chart';
import { RunningComponent } from './charts/running/running.component';
import { CaloriesComponent } from './charts/calories/calories.component';
import { BpmComponent } from './charts/bpm/bpm.component';
import { SportsComponent } from './charts/sports/sports.component';
import { FormsComponent } from './forms/forms.component';
import { RunningFormComponent } from './forms/running/running.component';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    ToastComponent,
    RunningComponent,
    CaloriesComponent,
    BpmComponent,
    SportsComponent,
    FormsComponent,
    RunningFormComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
