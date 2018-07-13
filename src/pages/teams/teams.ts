import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {
  public teams = [
    { id: 1, name: 'Cairo Wolves' },
    { id: 2, name: 'Cairo HellHounds' },
    { id: 3, name: 'Cairo Bears' },
    { id: 4, name: 'Cairo Warriors' },
    { id: 5, name: 'MSA Tigers' },
    { id: 6, name: 'GUC Eagles' },
    { id: 7, name: 'AUC Titans' },
    { id: 8, name: 'Gezira Thunder' },
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsPage');
  }
  teamTapped($event, team) {
    this.navCtrl.push("TeamDetailPage", team)
  }

}
