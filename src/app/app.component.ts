import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MusicControls, MusicControlsOptions } from '@ionic-native/music-controls';
import { HomePage } from '../pages/home/home';
@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	
	private rootPage = null;

	constructor(
		platform: Platform, 
		statusBar: StatusBar, 
		splashScreen: SplashScreen,
		private musicControls : MusicControls
	) {


		

		platform.ready().then(() => {
			this.rootPage = HomePage;
			statusBar.styleDefault();
			splashScreen.hide();
			
		});
	}

}

