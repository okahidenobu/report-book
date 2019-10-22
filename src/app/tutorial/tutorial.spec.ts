import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {Router} from '@angular/router';
import {TestBed, async} from '@angular/core/testing';
import {MenuController} from '@ionic/angular';

import {TutorialPage} from './tutorial';

describe('TutorialPage', () => {
    let fixture, app;
    beforeEach(async(() => {
        const menuSpy = jasmine.createSpyObj('MenuController', [
            'toggle',
            'enable'
        ]);
        const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

        TestBed.configureTestingModule({
            declarations: [TutorialPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                {provide: MenuController, useValue: menuSpy},
                {provide: Router, useValue: routerSpy}
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TutorialPage);
        app = fixture.debugElement.componentInstance;
    });
    it('should create the tutorial page', () => {
        expect(app).toBeTruthy();
    });


});
