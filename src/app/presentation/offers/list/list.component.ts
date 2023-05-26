import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
listOffers=[
{
  id:1,
  title:"Software Developer",
  status:'Activa',
  date_status:"Enviada a revision:2023-05-24 - 11:45",
  location:"Medellin y sus alrededores",
  money:"De $2 a $5 millones",
  modality:"Remoto"
},
{
      id: 2,
      title: "Database Administrator",
      status: 'En Revision',
      date_status: 'Enviada a revisión: 2023-05-25 - 11:45',
      location: "Medellín y sus alrededores",
      money: "De $1 a $5 millones",
      modality: "Remoto"
},
{
  id: 3,
      title: "FullStack Developer",
      status: 'Disponible',
      date_status: 'Enviada a revisión: 2023-05-26 - 11:45',
      location: "Medellín y sus alrededores",
      money: "De $1 a $6 millones",
      modality: "Remoto"

},
{
id: 4,
      title: "Backend Developer",
      status: 'Disponible',
      date_status: 'Enviada a revisión: 2023-05-23 - 11:45',
      location: "Medellín y sus alrededores",
      money: "De $1 a $4 millones",
      modality: "Remoto"
},
{
 id: 5,
      title: "Frontend Developer",
      status: 'Disponible',
      date_status: 'Enviada a revisión: 2023-05-22 - 11:45',
      location: "Medellín",
      money: "De $1 a $6 millones",
      modality: "Remoto"
},
];
}
