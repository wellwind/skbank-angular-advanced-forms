import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  @ViewChild('mText') mText;

  text = 'test';
  constructor() {}

  ngOnInit() {
    console.log(this.mText);
  }

}
