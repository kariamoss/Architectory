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
  theme: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     private sensors: Sensors, platform: Platform, public global: AppState) {

    platform.ready().then(() => {
      if (platform.is('cordova')) {
      
        this.initSensor();
        this.cordovaAvailable = true;
      }
    });
  }

  changeTheme(theme) {
    this.global.set('theme', theme);
  }

  initSensor() {
    this.sensors.enableSensor("LIGHT");

    setInterval(() => {
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
            this.global.set('theme', '');
            this.theme = 'light';
          }
          this.previousLight = this.light;
        }
        
      });
    }, 300);
  }
}
