import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bpm',
  templateUrl: './bpm.component.html',
  styleUrls: ['./bpm.component.css']
})
export class BpmComponent implements OnInit{
  data: any;

  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = "white";
    const textColorSecondary = "white"
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      datasets: [
        {
          label: 'Resting Heart Rate (bpm)',
          data: [65, 68, 72, 67, 62, 63, 66],
          fill: true,
          tension: 0.4,
          borderColor: 'blue',
          backgroundColor: 'rgb(45, 212, 191)',
        },
        {
          label: 'Steps Walked (in thousands)',
          data: [80, 10, 5, 40, 20, 15, 12],
          fill: true,
          tension: 0.4,
          backgroundColor: 'rgb(139, 92, 246)',
        },
      ],
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500,
            },
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };
  }
}