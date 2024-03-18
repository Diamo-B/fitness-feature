import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit{

  data: any;
  options: any;

  ngOnInit() {
    this.data = {
      labels: [
        'Basketball',
        'Tennis',
        'Swimming',
        'Yoga',
        'Hiking',
        'Rock Climbing',
        'Rest',
      ],
      datasets: [
        {
          label: 'Sports Time (hours)',
          data: [1, 2, 1.5, 0.5, 2.5, 1, 3],
          borderColor: '#14B8A6',
          pointBackgroundColor: "white",
          pointBorderColor: "orange",
          pointHoverBackgroundColor: "white",
          pointHoverBorderColor:"red"
        },
      ],
    };

    this.options = {
      plugins: {
        legend: {
          labels: {
            color: 'white',
          },
        },
      },
      scales: {
        r: {
          grid: {
            color: 'white',
          },
          pointLabels: {
            color: 'white',
          },
          angleLines: {
            color: '#ebedef',
          },
        },
      },
    };
  }
}