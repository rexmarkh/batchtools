import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { AppBootstrapModule } from './modules/app-bootstrap.module';
import { Approute } from './modules/app-routes.module';

import { AppComponent } from './app.component';
import { BatchtoolsComponent } from './components/batchtools/batchtools.component';
import { DatatablesComponent } from './components/datatables/datatables.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PagetitleComponent } from './components/pagetitle/pagetitle.component';

@NgModule({
  declarations: [
    AppComponent,
    BatchtoolsComponent,
    DatatablesComponent,
    DashboardComponent,
    PagetitleComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    HttpModule,
    RouterModule.forRoot(Approute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
