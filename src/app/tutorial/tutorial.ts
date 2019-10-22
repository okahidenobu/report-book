import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {MyProfile,FathersProfile,MothersProfile} from '../interfaces/my-profile';

import {MenuController, IonSlides} from '@ionic/angular';

@Component({
    selector: 'page-tutorial',
    templateUrl: 'tutorial.html',
    styleUrls: ['./tutorial.scss'],
})


export class TutorialPage implements OnInit, OnDestroy {
    showSkip = true;

    @ViewChild('slides', {static: true}) slides: IonSlides;

    constructor(
        public menu: MenuController,
        public router: Router,
    ) {
    }

    startApp() {
        this.router
            .navigateByUrl('/home')
            .then(() => localStorage.setItem('did_tutorial', 'did'));
    }

    onSlideChangeStart(event) {
        event.target.isEnd().then(isEnd => {
            this.showSkip = !isEnd;
        });
    }

    ngOnInit() {
        const didTutorial = localStorage.getItem('did_tutorial');
        if (didTutorial === 'did') {
            this.router.navigateByUrl('/home');
        }
        this.menu.enable(false);
    }

    ngOnDestroy(): void {
        this.menu.enable(true);
    }
}


export class Tab1Page implements OnInit{

    myProfile: MyProfile;
    FathersProfile:FathersProfile;
    MothersProfile:MothersProfile;

    constructor() {}


    testClick(){
        console.log('click')
    }

    ngOnInit(){
        // データを取得
        this.myProfile.nickname = 'me';
        this.myProfile.birth = 'mybirthdate';
        this.myProfile.gender = 'boy';
        this.myProfile.area = 'fukuoka';

        this.FathersProfile.nickname = 'myfather';
        this.FathersProfile.birth = 'fatersbirthdate';
        this.FathersProfile.emailAdress = 'father@family.com';

        this.MothersProfile.nickname = 'myfather';
        this.MothersProfile.birth = 'mothersbirthdate';
        this.MothersProfile.emailAdress = 'mother@family.com';


        //localstrgaeに保存
        localStorage.setItem('my_profile', JSON.stringify('my_profile'));
        localStorage.setItem('MyFathersProfile', JSON.stringify('MyFathersProfile'));
        localStorage.setItem('MyMothersProfile', JSON.stringify('MyMothersProfile'));
    }

}
