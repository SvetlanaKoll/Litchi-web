import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'selected-dress-app',
  templateUrl: './selected-dress-app.component.html',
  styleUrls: ['./selected-dress-app.component.scss']
})
export class SelectedDressAppComponent implements OnInit, OnDestroy {
  storedDresses = [
    {
      id: '1',
      color:'Red Mini',
      style: 'Shirt',
      style2: 'Casual',
      price: '$ 15.00',
      photo: './assets/images/red-mini.svg'
    },
    {
      id: '2',
      color:'Navy Polka Dot Spray Ruffle',
      style: 'Midi',
      style2: 'Casual',
      price: '$ 7.50',
      photo: './assets/images/navy-polka.svg'
    },
    {
      id: '3',
      color:'Pink With Flowers',
      style: 'Midi',
      style2: 'Casual',
      price: '$ 15.00',
      photo: './assets/images/flower.svg',
      small1: './assets/images/small1.svg',
      small2: './assets/images/small2.svg',
      small3: './assets/images/small3.svg',
      small4: './assets/images/small4.svg',
      small5: './assets/images/small5.svg',
    },
    {
      id: '4',
      color:'Black Lace',
      style: 'Casual',
      style2: 'Cami',
      price: '$ 18.00',
      photo: './assets/images/black-lace.svg'
    },
    {
      id: '5',
      color:'Blue Mini',
      style: 'Shirt',
      style2: 'Jeans',
      price: '$ 18.00',
      photo: './assets/images/black-lace.svg'
    },
    {
      id: '6',
      color:'Black Polka Dot V-neck',
      style: 'Midi',
      style2: 'Casual',
      price: '$ 20.00',
      photo: './assets/images/black-polka.svg'
    },
    {
      id: '7',
      color:'Pink Bra Top',
      style: 'Midi',
      style2: 'Casual',
      price: '$ 14.00',
      photo: './assets/images/pink-bra.svg'
    },
    {
      id: '8',
      color:'Navy Floral Crewneck',
      style: 'Midi',
      style2: 'Casual',
      price: '$ 20.00',
      photo: './assets/images/navy-floral.svg'
    },
    {
      id: '9',
      color:'Pink Light',
      style: 'Midi',
      style2: 'Casual',
      price: '$ 16.00',
      photo: './assets/images/pink-midi.svg'
    },
    {
      id: '10',
      color:'Yellow Floral',
      style: 'Midi',
      style2: 'Casual',
      price: '$ 21.00',
      photo: './assets/images/yellow-floral.svg'
    },
    {
      id: '11',
      color:'Yellow Tee Waist',
      style: 'Maxi',
      style2: 'Casual',
      price: '$ 15.00',
      photo: './assets/images/yellow-tee.svg'
    },
    {
      id: '12',
      color:'Navy Floral V-neck',
      style: 'Mini',
      style2: 'Casual',
      price: '$ 17.00',
      photo: './assets/images/navy-v-neck.svg'
    }
  ];
  id: string;
  sub;
  selectedDress = {};
  constructor (private route: ActivatedRoute, public ngxModal: NgxSmartModalService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
     this.id = params['id'];
     this.selectedDress = this.storedDresses.find((oneItem)=>oneItem.id == this.id)
     });
     console.log(this.id);
   }
   ngOnDestroy(){
    this.sub.unsubscribe();
   }
   openModel(){
    this.ngxModal.getModal('myModal2').open();
  }

}
