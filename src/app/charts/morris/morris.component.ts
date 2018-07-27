import { Component, OnInit } from '@angular/core';

import { ChartsService } from '../../charts.service';

@Component({
  selector: 'app-morris',
  templateUrl: './morris.component.html',
  styleUrls: ['./morris.component.css']
})
export class MorrisComponent implements OnInit {
  constructor(private chartsService: ChartsService) {}

  ngOnInit() {
    this.chartsService.morris();
  }
}
