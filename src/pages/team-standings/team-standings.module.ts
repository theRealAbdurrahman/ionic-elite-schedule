import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamStandingsPage } from './team-standings';

@NgModule({
  declarations: [
    TeamStandingsPage,
  ],
  imports: [
    IonicPageModule.forChild(TeamStandingsPage),
  ],
})
export class TeamStandingsPageModule {}
