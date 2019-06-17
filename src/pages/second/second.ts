import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CardPage } from '../card/card';
import { ThrowStmt } from '@angular/compiler';
import {HomePage} from '../home/home';

/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {
  receiver: string;
  name: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = navParams.get('name');
    this.receiver = navParams.get('receiver');
  }
  ionViewDidLoad() {
    console.log(this.name, + '=======', this.receiver);
  }
  onBack(){
    this.navCtrl.push(HomePage);
  }
}

