import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';

@Injectable()
export class LocalisationService {
  private latitude: number = 0;
  private longitude: number = 0;

  canUseLocalisation = false;

  constructor(private geolocation: Geolocation, private platform: Platform) {
    this.platform.ready().then( () => {
      if (this.platform.is("cordova")) {
        this.canUseLocalisation = true;
        let watch = this.geolocation.watchPosition();
        watch.subscribe((data) => {
          this.latitude = data.coords.latitude;
          this.longitude = data.coords.longitude;
        });
      }
    });
   }

  ngOnInit() {
    
  }

  distanceFromPos(latitude, longitude): number {
    return Math.abs(this.latitude - latitude) + Math.abs(this.longitude - longitude);
  }
}