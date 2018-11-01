import { ProjectsPage } from './../projects/projects';
import { WorkersPage } from './../workers/workers';
import { SettingsPage } from './../settings/settings';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SettingsPage;
  tab2Root = ProjectsPage;

  constructor() {

  }
}
