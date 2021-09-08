import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './dashboard/client/client.component';
import { OrderComponent } from './dashboard/order/order.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'client',
        component: ClientComponent,
      },
      {
        path: 'order',
        component: OrderComponent,
      },
      {
        path: '',
        redirectTo: 'client',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
