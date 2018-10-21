import { WebsocketService } from './../services/webSocket';
import { ArchitectPage } from './../pages/architect/architect';
import { WorkersPage } from './../pages/workers/workers';
import { SettingsPage } from './../pages/settings/settings';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AppState } from './app.global';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TodoListComponent } from '../components/todo-list/todo-list';
import { Sensors } from '@ionic-native/sensors';
import { HtmlUtilsService } from '../services/htmlUtils';

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    WorkersPage,
    ArchitectPage,
    TodoListComponent,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    WorkersPage,
    ArchitectPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Sensors,
    AppState,
    WebsocketService,
    HtmlUtilsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
