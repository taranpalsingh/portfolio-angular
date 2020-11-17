import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, Color } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})

export class PieChartComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: true,
      labels: {
        fontSize: 16,
        boxWidth: 25
      }
    }
  };
  public pieChartLabels: Label[] = ['Angular', 'React', 'VanillaJs'];
  public chartColors: Color[] = [
    {backgroundColor: ['#fbc658', '#ef8157', '#6bd098']},
    // {backgroundColor: ['blue']},
    // {backgroundColor: ['green']}
  ]
  public pieChartData: SingleDataSet = [50, 25, 25];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {
  }
}