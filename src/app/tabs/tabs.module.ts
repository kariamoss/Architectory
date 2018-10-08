import { SharedModule } from './../shared/shared.module';
import { TodoListComponent } from './../shared/components/todo-list/todo-list.component';
import { WorkersPageModule } from './../workers/workers.module';
import { SettingsPageModule } from './../settings/settings.module';
import { ArchitectPageModule } from './../architect/architect.module';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    ArchitectPageModule,
    SettingsPageModule,
    WorkersPageModule
  ],
  declarations: [
    TabsPage
  ]
})
export class TabsPageModule {}
