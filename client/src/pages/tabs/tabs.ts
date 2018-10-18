import { WorkersPage } from './../workers/workers';
import { ArchitectPage } from './../architect/architect';
import { SettingsPage } from './../settings/settings';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SettingsPage;
  tab2Root = ArchitectPage;
  tab3Root = WorkersPage;

  constructor() {

  }
}
