import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ActionButtonComponent } from './action-button/action-button.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionComponent } from './dashboard/action/action.component';
import { ClientComponent } from './dashboard/client/client.component';
import { OrderComponent } from './dashboard/order/order.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatsComponent } from './dashboard/stats/stats.component';
import { StatDetailsComponent } from './stat-details/stat-details.component';
import {PortalModule} from '@angular/cdk/portal';

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
    FormsModule,
    PortalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
