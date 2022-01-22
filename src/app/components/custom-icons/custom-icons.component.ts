import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-icons',
  templateUrl: './custom-icons.component.html',
  styleUrls: ['./custom-icons.component.scss']
})
export class CustomIconsComponent implements OnInit {

  @Input() iconName: String ='';
  
  constructor() { }

  ngOnInit(): void {
  }

}
