import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danhba',
  templateUrl: './danhba.page.html',
  styleUrls: ['./danhba.page.scss'],
})
export class DanhbaPage implements OnInit {

  list=[
    {
        "check": false,
        "Id": "1412134502",
        "Name": "Anh hai",
        "image": ""
    },
    {
    },
  ];
  
  datasings: any;
  singByGroup: any = [];
  anpha = ["A", "Ă", "Â", "B", "C", "D", "Đ", "E", "Ê", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "Ô", "Ơ", "P", "Q", "R", "S", "T", "U", "Ư", "V", "W", "X", "Y", "Z"]
  show = false;
  lists = {
    "check": false,
    "Id": "1412134502",
    "Name": "Anh hai",
    "image": ""
  }
  constructor() {
    this.datasings = this.list;
   }
  
  ngOnInit() {
    this.datasings = this.list;
    this.singByGroup = [];
    for(var i = 0; i < this.anpha.length; i++) {
      let temp = {
        header: "",
        listsings: [],
      }
      temp.header = this.anpha[i];
      for(var j = 0; j < this.datasings.length; j++) {
        if(this.datasings[j].Name.charAt(0)===this.anpha[i]) {
          temp.listsings.push(this.datasings[j]);
        }
      }
      if(temp.listsings.length > 0) {
        this.singByGroup.push(temp);
      }
    } 
    console.log(this.singByGroup) 
  }
  showSinger(id){
    for(var i = 0; i < this.list.length; i++) {
      if(id === this.list[i].Id) {
        this.list[i].check = true;
      }
      else {
        this.list[i].check = false;
      }
    }
  }
  }