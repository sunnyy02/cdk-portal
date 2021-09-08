import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ActionButtonComponent } from './action-button/action-button.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DemoMaterialModule} from './material.module';
import { ActionComponent } from './dashboard/action/action.component';
import { ClientComponent } from './dashboard/client/client.component';
import { OrderComponent } from './dashboard/order/order.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatsComponent } from './dashboard/stats/stats.component';
import { StatDetailsComponent } from './stat-details/stat-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OrderComponent,
    ClientComponent,
    ActionButtonComponent,
    StatDetailsComponent,
    ActionComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoMaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }