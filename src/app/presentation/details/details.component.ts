import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  listPartners = [
    {
      id: 1,
      name: "Emmanuel Londoño Gomez ",
      role: "Frontend Designer",
      imageProfile:"../src/assets/imgs/emmanuel.png",
    },
    {
      id: 2,
      name: "Anderson Paz",
      role: "FullStack Developer",
      imageProfile: "../src/assets/imgs/anderson.png",
    },
    {
      id: 3,
      name: "Brayan Oviedo",
      role: "FullStack Developer",
      imageProfile: "",
    }
  ];

  ngOnInit(){
    console.log(this.listPartners);
  }
}
