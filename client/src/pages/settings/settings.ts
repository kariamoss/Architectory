import { LocalisationService } from './../../services/localisationService';
import { HtmlUtilsService } from './../../services/htmlUtils';
import { WebsocketService } from './../../services/webSocket';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Sensors } from '@ionic-native/sensors';
import { AppState } from '../../app/app.global';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  light = -1;
  previousLight = -1;
  cordovaAvailable = false;
  theme = 'light';
  socket: any;
  pseudo: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     private sensors: Sensors, private platform: Platform, public global: AppState,
     private webSocketService: WebsocketService, private htmlUTilsService: HtmlUtilsService) {

    platform.ready().then(() => {
      if (platform.is('cordova')) {
      
        this.initSensor();
        this.cordovaAvailable = true;
      }
    });

    // this.socket = webSocketService.getSocket();
  }

  ngOnInit(): void {
    this.platform.ready().then((readySource) => {

      if (this.htmlUTilsService.isMobile()){
        this.pseudo = 'mobile';
      } else {
        this.pseudo = 'desktop';
      }      
      
      /*this.socket.emit('newClient', this.pseudo);

      this.socket.on('data', (data) => {
        console.log('Received : ' + data.task);
        
        if (data.task === 'changeTheme') {
          this.global.set('theme', data.theme);
          this.theme = data.theme;
        }
      }); */

    });
  }

  changeTheme(theme) {
    this.global.set('theme', theme);
    console.log('sending new theme : ');
    //this.socket.emit('data', {pseudo : this.htmlUTilsService.platformToSend(), message: {task: 'changeTheme', theme: theme}});
  }

  initSensor() {
    this.sensors.enableSensor("LIGHT");

    setInterval(() => {
      if (this.light === -1) {
        this.sensors.enableSensor("LIGHT");
      }
      this.sensors.getState().then( (values) => {
        this.light = values[0];
        if (this.light < this.previousLight - 20 || this.light > this.previousLight + 20) {
          if (this.light < 100 && this.light > 40) {
            this.global.set('theme', 'theme-dark');
            this.theme = 'dark';
          } else if (this.light <= 40) {
            this.global.set('theme', 'theme-black');
            this.theme = 'black';
          } else {
            this.global.set('theme', 'theme-light');
            this.theme = 'light';
          }
          this.previousLight = this.light;
        }
        
      });
    }, 300);
  }
}
