import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'dresses-app',
  templateUrl: './dresses-app.component.html',
  styleUrls: ['./dresses-app.component.scss']
})
export class DressesAppComponent implements OnInit {
  storedDresses = [
    {
      id: '1',
      color:'Red Mini',
      style: 'Shirt',
      style2: 'Casual',
      price: '$ 15.00',
      photo: './assets/images/red-mini.svg',
      photo2: './assets/images/red-mini.svg'
     
    },
    {
      id: '2',
      color:'Navy Polka Dot Spray Ruffle',
      style: 'Midi',
      style2: 'Casual',
      price: '$ 7.50',
      photo: './assets/images/navy-polka.svg',
      photo2: './assets/images/navy-polka.svg'
    },
    {
      id: '3',
      color:'Pink With Flowers',
      style: 'Midi',
      style2: 'Casual',
      price: '$ 15.00',
      photo: './assets/images/pink-flower.svg',
      photo2:  './assets/images/flower.svg'
    },
    {
      id: '4',
      color:'Black Lace',
      style: 'Casual',
      style2: 'Cami',
      price: '$ 18.00',
      photo: './assets/images/black-lace.svg',
      photo2: './assets/images/black-lace.svg'
    },
    {
      id: '5',
      color:'Blue Mini',
      style: 'Shirt',
      style2: 'Jeans',
      price: '$ 18.00',
      photo: './assets/images/black-lace.svg',
      photo2: './assets/images/black-lace.svg'
    },
    {
      id: '6',
      color:'Black Polka Dot V-neck',
      style: 'Midi',
      style2: 'Casual',
      price: '$ 20.00',
      photo: './assets/images/black-polka.svg',
      photo2: './assets/images/black-polka.svg'
    },
    {
      id: '7',
      color:'Pink Bra Top',
      style: 'Midi',
      style2: 'Casual',
      price: '$ 14.00',
      photo: './assets/images/pink-bra.svg',
      photo2: './assets/images/pink-bra.svg'

    },
    {
      id: '8',
      color:'Navy Floral Crewneck',
      style: 'Midi',
      style2: 'Casual',
      price: '$ 20.00',
      photo: './assets/images/navy-floral.svg',
      photo2: './assets/images/navy-floral.svg'
    },
    {
      id: '9',
      color:'Pink Light',
      style: 'Midi',
      style2: 'Casual',
      price: '$ 16.00',
      photo: './assets/images/pink-midi.svg',
      photo2: './assets/images/pink-midi.svg'
    },
    {
      id: '10',
      color:'Yellow Floral',
      style: 'Midi',
      style2: 'Casual',
      price: '$ 21.00',
      photo: './assets/images/yellow-floral.svg',
      photo2: './assets/images/yellow-floral.svg'
    },
    {
      id: '11',
      color:'Yellow Tee Waist',
      style: 'Maxi',
      style2: 'Casual',
      price: '$ 15.00',
      photo: './assets/images/yellow-tee.svg',
      photo2: './assets/images/yellow-tee.svg'
    },
    {
      id: '12',
      color:'Navy Floral V-neck',
      style: 'Mini',
      style2: 'Casual',
      price: '$ 17.00',
      photo: './assets/images/navy-v-neck.svg',
      photo2: './assets/images/navy-v-neck.svg'
    }
  ];
  filterIsCleared = false;
  sectionIsCleared = false;
  itemIsHidden = false;
  filteredDresses = [];
  dressIsHovered = false;

  ngOnInit() {
    this.filteredDresses = this.storedDresses;

  }
  filterBy(style){
    this.filteredDresses = this.storedDresses.filter(dress => dress.style == style);
  }
  refreshFilter(){
    this.filteredDresses = this.storedDresses;
  }
  clearFilter(){
    this.filterIsCleared = !this.filterIsCleared;
  }
  clearSection(){
    this.sectionIsCleared = !this.sectionIsCleared;
  }
  showItem(){
    this.itemIsHidden = false;
  }
  shadowOff(){
    
  }
}
