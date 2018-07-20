import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TablesComponent } from './tables/tables.component';
import { BlankComponent } from './blank/blank.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: { title: 'Dashboard' }
  },
  {
    path: 'forms',
    component: FormsComponent,
    data: { title: 'Forms' }
  },
  {
    path: 'buttons',
    component: ButtonsComponent,
    data: { title: 'Buttons' }
  },
  {
    path: 'tables',
    component: TablesComponent,
    data: { title: 'Tables' }
  },
  {
    path: 'blank',
    component: BlankComponent,
    data: { title: 'Blank' }
  },
  {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
