import {Page, Alert, NavController, NavParams} from 'ionic-framework/ionic';
import {StorageService} from '../../quiz/storage-service';

@Page({
  templateUrl: 'build/pages/settings/settings.html',
})
export class SettingsPage {
    private nav:NavController;
    private storageService: StorageService;

    constructor(storageService: StorageService, nav: NavController, navParams: NavParams) {
        this.nav = nav;
        this.storageService = storageService;
    }
    clickExpertMode() {
        this.storageService.setExpertMode(!this.storageService.getExpertMode())
    }
    openPrompt() {
        let prompt = Alert.create({
            body: "Bitte geben Sie eine Anzahl der Runden ein",
            inputs: [
                {
                    name: 'numberRounds',
                    placeholder: 'Rundenanzahl',
                    type: 'number',
                    value: this.storageService.getNumberOfRounds()
                },
            ],
            buttons: [
                {
                    text: 'Abbrechen',
                    handler: data => {
                        //console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Speichern',
                    handler: data => {
                        this.storageService.setNumberOfRounds(data.numberRounds);
                    }
                }
            ]
        });
        this.nav.present(prompt);
    }
}
