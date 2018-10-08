import { ArchitectPage } from './../architect/architect.page';
import { WorkersPage } from './../workers/workers.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { SettingsPage } from '../settings/settings.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(architect:architect)',
        pathMatch: 'full',
      },
      {
        path: 'settings',
        outlet: 'settings',
        component: SettingsPage
      },
      {
        path: 'architect',
        outlet: 'architect',
        component: ArchitectPage
      },
      {
        path: 'workers',
        outlet: 'workers',
        component: WorkersPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(architect:architect)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
