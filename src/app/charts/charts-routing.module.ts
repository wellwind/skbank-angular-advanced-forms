import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FlotComponent } from './flot/flot.component';
import { MorrisComponent } from './morris/morris.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'flot'
  },
  {
    path: 'flot',
    component: FlotComponent,
    data: { title: 'Flot' }
  },
  {
    path: 'morris',
    component: MorrisComponent,
    data: { title: 'Morris' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
