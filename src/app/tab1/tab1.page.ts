import { Component, OnInit } from '@angular/core';
import {MyProfile,FathersProfile,MothersProfile} from '../interfaces/my-profile';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
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
