import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddPage } from './../add/add';
import { PersonalPage } from './../personal/personal';
import { NoticesPage } from './../notices/notices';
import { GroupPage } from './../group/group';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  onNavControlltoAdd(){
    this.navCtrl.push(AddPage);
  }
  onNavControlltoPresonal(){
    this.navCtrl.push(PersonalPage);
  }
  onNavControlltoNotices() {
  this.navCtrl.push( NoticesPage);
  }
  onNavControlltoGroups() {
  this.navCtrl.push(GroupPage);
  }
  onNavControlltoHome() {
  this.navCtrl.push(HomePage);
  }
}
