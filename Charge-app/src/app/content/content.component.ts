import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  baseURL = '../../assets/tecnologias/';

  tecnologias =  [
    {
      id: '1',
      nome: 'Docker',
      url: 'docker_logo.png'
    },
    {
      id: '2',
      nome: 'SQL Server',
      url: 'mssql_logo.png'
    },
    {
      id: '3',
      nome: 'Node.js',
      url: 'node_logo.png'
    },
    {
      id: '4',
      nome: 'Angular',
      url: 'angular_logo.png'
    },
    {
      id: '5',
      nome: 'dotNet',
      url: 'dotnet_logo.png'
    }
 ];

  constructor() { }

  ngOnInit() {
  }

}
