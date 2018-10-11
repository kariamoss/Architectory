import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Sensors } from '@ionic-native/sensors';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  light:number;
  cordovaAvailable = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sensors: Sensors, platform: Platform) {
    this.light = 0;

    if (platform.is('cordova')) {
      platform.ready().then(() => {
        this.initSensor();
      })
      this.cordovaAvailable = true;
    }
    
  }

  initSensor() {
    this.sensors.enableSensor("LIGHT");

    setInterval(() => {
      this.sensors.getState().then( (values) => {
        this.light = values[0];
      });
    }, 300);
  }
}
