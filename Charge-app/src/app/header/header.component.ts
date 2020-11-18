import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user =  {
    id: '1',
    nome: 'Alex Eloy',
    avatar: '../../assets/avatar/48a5d422-7b30-4e9a-86dc-ace0c2c3845a.PNG'
  };

  constructor() { }

  ngOnInit() {
  }

}
