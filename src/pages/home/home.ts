import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public tracks: string[] = [
    'https://groovefox.azureedge.net/on-demand/test/001.m4a',
    'https://groovefox.azureedge.net/on-demand/test/002.m4a',
    'https://groovefox.azureedge.net/on-demand/test/003.m4a',
    'https://groovefox.azureedge.net/on-demand/test/004.m4a',
  ];

  private currentTrack: number = 0;
  constructor(public navCtrl: NavController) {

  }
  
  onPlay(): void {
    let audioObj = new window['Media'](this.tracks[this.currentTrack], (a) => {
      console.log('first', a);
    }, (a) => {
      console.log('second', a);
    }, (a) => {
      console.log('third', a);
      if (a === 4) {
        console.log('song has been finished');
        audioObj.release();
        this.currentTrack++;
        this.onPlay();
      }
    }, {
      automaticallyWaitsToMinimizeStalling: 'no'
    });

    audioObj.play();
  }
}
