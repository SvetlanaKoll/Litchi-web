import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
// import { MatMenuTrigger } from '@angular/material';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'header-app',
  templateUrl: './header-app.component.html',
  styleUrls: ['./header-app.component.scss']
})
export class HeaderAppComponent implements OnInit {
  
  constructor(public ngxModal: NgxSmartModalService) {

  }
  activeTab = 'login';
  ngOnInit() {
  }
  openModel(){
    this.ngxModal.getModal('myModal').open();
  }
  switchTab(tabName){
    this.activeTab = tabName;
  }
  // @ViewChild ('btn', 'MatMenuTrigger') trigger: MatMenuTrigger;

  // someMethod() {
  //   this.trigger.openMenu();
  // }
}
