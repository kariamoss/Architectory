import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';

declare var sensors;

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  luminosity:number;

  constructor(public navCtrl: NavController, platform: Platform) {
    this.luminosity = 0;
    
    platform.ready().then(() => {
      this.initSensor();
    })
   }

  ngOnInit() {
  }

  initSensor() {
    sensors.enableSensor("PROXIMITY")
    
    setInterval(() => {
      sensors.getState((values) => {
        this.luminosity = values[0]
      });
    }, 300)
    
  }

}
