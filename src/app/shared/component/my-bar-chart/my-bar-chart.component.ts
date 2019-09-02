import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})
export class MyBarChartComponent implements OnInit {

  constructor() { }

  public pieChartLabels = ['Admin', 'Teacher', 'Student', 'Parent'];
  public pieChartData = [120, 150, 180, 90];
  public pieChartType = 'pie';
  ngOnInit() {
  }

}
