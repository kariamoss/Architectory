import { Sensors, TYPE_SENSOR } from '@ionic-native/sensors';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LightAmbientService {

  /* private _light = 0;
  public get light() {
    return this._light;
  }

  constructor(private sensors: Sensors) { }

  ngOnInit() {
    this.sensors.enableSensor(TYPE_SENSOR.LIGHT);

    setInterval(() => { this.sensors.getState().then( (data) => {
      this._light = data;
    })}, 1000);
  } */
}
