import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

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
