import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {MyProfile, FathersProfile, MothersProfile} from '../interfaces/my-profile';

import {MenuController, IonSlides} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'page-tutorial',
    templateUrl: 'tutorial.html',
    styleUrls: ['./tutorial.scss'],
})

export class TutorialPage implements OnInit, OnDestroy {
    showSkip = true;
    myProfile: MyProfile;
    fathersProfile: FathersProfile;
    mothersProfile: MothersProfile;

    builder = new FormBuilder();
    myProfileForm: FormGroup;
    fathersProfileForm: FormGroup;
    mothersProfileForm: FormGroup;

    requireError = 'にゅうりょくしてね';
    mailError = 'メールアドレスがまちがってるよ';

    @ViewChild('slides', {static: false}) slides: IonSlides;

    constructor(
        public menu: MenuController,
        public router: Router) {

        this.myProfileForm = this.builder.group({
            nickname: this.builder.control('', Validators.required),
            birth: this.builder.control('', Validators.required),
            gender: this.builder.control('', Validators.required),
            area: this.builder.control('', Validators.required),
        });

        this.fathersProfileForm = this.builder.group({
            nickname: this.builder.control('', Validators.required),
            birth: this.builder.control('', Validators.required),
            mail: this.builder.control('', [Validators.required, Validators.email]),
        });

        this.mothersProfileForm = this.builder.group({
            nickname: this.builder.control('', Validators.required),
            birth: this.builder.control('', Validators.required),
            mail: this.builder.control('', [Validators.required, Validators.email]),
        });
    }

    onSlideChangeStart(event) {
        this.slides.getActiveIndex().then((index) => {
            this.slides.slideTo(index);
        });
    }


    back() {
        this.slides.getActiveIndex().then((index) => {
            this.slides.slideTo(index - 1);
        });
    }

    next() {
        this.slides.getActiveIndex().then((index) => {
            this.slides.slideTo(index + 1);
        });
    }

    ngOnInit() {
        const didTutorial = localStorage.getItem('did_tutorial');
        if (didTutorial === 'did') {
            this.router.navigateByUrl('/home');
        }
        this.menu.enable(false);
    }

    myProfileSubmit() {
        this.myProfile = {
            nickname: this.myProfileForm.controls.nickname.value,
            birth: this.myProfileForm.controls.birth.value,
            gender: this.myProfileForm.controls.gender.value,
            area: this.myProfileForm.controls.area.value,
        };
        localStorage.setItem('my_profile', JSON.stringify(this.myProfile));
        this.next();
    }

    fatherProfileSubmit() {
        this.fathersProfile = {
            nickname: this.fathersProfileForm.controls.nickname.value,
            birth: this.fathersProfileForm.controls.birth.value,
            email_address: this.fathersProfileForm.controls.mail.value,
        };
        localStorage.setItem('father_profile', JSON.stringify(this.fathersProfile));

        this.next();
    }

    motherProfileSubmit() {
        this.mothersProfile = {
            nickname: this.mothersProfileForm.controls.nickname.value,
            birth: this.mothersProfileForm.controls.birth.value,
            email_address: this.mothersProfileForm.controls.mail.value,
        };
        localStorage.setItem('mother_profile', JSON.stringify(this.mothersProfile));

        // ホームに遷移
        this.router.navigateByUrl('/home').then(() => localStorage.setItem('did_tutorial', 'did'));
    }

    ngOnDestroy(): void {
        this.menu.enable(true);
    }
}
