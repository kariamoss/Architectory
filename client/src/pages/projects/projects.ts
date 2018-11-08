import { LocalisationService } from './../../services/localisationService';
import { ArchitectPage } from './../architect/architect';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the ProjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {
  items: Array<{ title: string, image: string, codePage: string, latitude: number, longitude: number, 
    distance?: number, problem?: string }>;

  canUseLocalisation = false;
  useLocalisation: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, private localisationService: LocalisationService) {
    this.items = [
      {
        title: 'Rénovation Ascenseurs Nord Tour Eiffel',
        image: 'https://www.rfr.fr/sites/default/files/styles/projet_full_carousel/public/2017-10/10230292_ASC%20TOUR%20EIFFEIL_existant%203%20%C2%A9%20RFR.jpg',
        codePage: 'Eiffel',
        latitude: 48.858260,
        longitude: 2.294499
      },
      {
        title: 'Rénovation Ascenseurs Est Tour Eiffel',
        image: 'https://www.rfr.fr/sites/default/files/styles/projet_full_carousel/public/2017-10/10230292_ASC%20TOUR%20EIFFEIL_existant%203%20%C2%A9%20RFR.jpg',
        codePage: 'Eiffel2',
        latitude: 48.858260,
        longitude: 2.294499
      },
      {
        title: 'Rénovation Ascenseurs Ouest Tour Eiffel',
        image: 'https://www.rfr.fr/sites/default/files/styles/projet_full_carousel/public/2017-10/10230292_ASC%20TOUR%20EIFFEIL_existant%203%20%C2%A9%20RFR.jpg',
        codePage: 'Eiffel3',
        latitude: 48.858260,
        longitude: 2.294499
      },
      {
        title: 'Rénovation Ascenseurs Sud Tour Eiffel',
        image: 'https://www.rfr.fr/sites/default/files/styles/projet_full_carousel/public/2017-10/10230292_ASC%20TOUR%20EIFFEIL_existant%203%20%C2%A9%20RFR.jpg',
        codePage: 'Eiffel4',
        latitude: 48.858260,
        longitude: 2.294499
      },
      {
        title: 'Rénovation Polytech',
        image: 'https://cdn.static01.nicematin.com/media/npo/1440w/2017/12/fv4a1357.jpg',
        codePage: 'Polytech',
        latitude: 43.6155879,
        longitude: 7.0718865
      },
      {
        title: 'Construction Maison en Bois',
        image: 'https://www.travauxbricolage.fr/wp-content/uploads/2014/09/devis-construction-maison-bois.jpg',
        codePage: 'Maison',
        latitude: 43.5878445,
        longitude: 7.0720335,
        problem: 'Manque de matériaux'
      }
    ];
  }
  ngOnInit() {
    this.canUseLocalisation = this.localisationService.canUseLocalisation;
    if (!this.canUseLocalisation) {
      this.sortByName();
      this.useLocalisation = false;
    } else {
      this.sortByDistance();
    }
  }

  localizate(){
    this.useLocalisation = true;
    this.items.forEach( (item) => {
      item.distance = this.localisationService.distanceFromPos(item.latitude, item.longitude);
    });
    this.sortByDistance();
  }

  sortByDistance() {
    this.items = this.items.sort( (obj1, obj2) => {
      if(obj1.distance > obj2.distance) {
        return 1;
      }
      if(obj1.distance < obj2.distance) {
        return -1;
      }
      return 0;
    })
  }

  sortByName() {
    this.useLocalisation = false;
    this.items = this.items.sort( (obj1, obj2) => {
      if(obj1.title > obj2.title) {
        return 1;
      }
      if(obj1.title < obj2.title) {
        return -1;
      }
      return 0;
    })
  }

  itemTapped(item) {
    this.navCtrl.push(ArchitectPage, {
      title: item.title,
      codePage: item.codePage
    });
  }

}
