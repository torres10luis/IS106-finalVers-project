import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InterfaceComponent } from './interface/interface.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { JobsComponent } from './jobs/jobs.component';
import { CurrentJobsComponent } from './current-jobs/current-jobs.component';
import { CompletedJobsComponent } from './completed-jobs/completed-jobs.component';
import { CancelJobsComponent } from './cancel-jobs/cancel-jobs.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'interface', component: InterfaceComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'jobs', component: JobsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    InterfaceComponent,
    ContactComponent,
    JobsComponent,
    CurrentJobsComponent,
    CompletedJobsComponent,
    CancelJobsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
