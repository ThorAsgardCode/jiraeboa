import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor() {}
  sidebarMenuArray = [
    {
      guid: '900ea552-ef68-42cc-b6a6-b8c4dff10fb7',
      age: 32,
      name: 'Powers Schneider',
      tittle: 'Projecto 1',
      href: '/powers',
      tumbnail:
        'https://media.discordapp.net/attachments/529394209162264587/680386844512485386/wp4484228.jpg',
    },
    {
      guid: '880381d3-8dca-4aed-b207-b3b4e575a15f',
      age: 25,
      name: 'Adrian Lawrence',
      tittle: 'Projecto Adrian',
      href: '/Adrian',
      tumbnail:
        'https://media.discordapp.net/attachments/529394209162264587/680386848815841290/wp4484219.jpg?width=720&height=405',
    },
    {
      guid: '87b47684-c465-4c51-8c88-3f1a1aa2671b',
      age: 32,
      name: 'Boyer Stanley',
      tittle: 'Projecto Boyer',
      href: '/Boyer',
      tumbnail:
        'https://media.discordapp.net/attachments/529394209162264587/680397775229550592/iron-man-infinity-stones-uhdpaper.com-4K-21.jpg?width=720&height=405',
    },
  ];
  ngOnInit() {}
}
