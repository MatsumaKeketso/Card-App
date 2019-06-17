import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SecondPage} from '../second/second';

@IonicPage()
@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
})
export class CardPage {
  senderName: SecondPage;
  receiverName: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.receiverName = navParams.get('receiver')
  }

  ionViewDidLoad() {
  }

}
