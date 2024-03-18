import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { UIChart } from 'primeng/chart';
import { RunningService } from 'src/app/services/running.service';

@Component({
  selector: 'app-calories',
  templateUrl: './calories.component.html',
  styleUrls: ['./calories.component.css'],
})
export class CaloriesComponent implements OnInit {
  data: any;
  options: any;
  runningService: RunningService = inject(RunningService);
  caloriesData: number[] = [];
  weight: number = 0;
  runningDistances: number[] = [];
  @ViewChild('chart', { static: false }) chart!: UIChart;

  ngOnInit() {
    const textColor = 'white';
    const textColorSecondary = 'white';
    this.runningService.weight$.subscribe((w) => {
      this.weight = w;
      this.updateCalories();
    });
    this.runningService.dataset$.subscribe((d) => {
      this.runningDistances = d;
      this.updateCalories();
    });
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
          label: 'Calories Burned',
          data: this.caloriesData,
          fill: true,
          tension: 0.4,
          borderColor: '#ffffff',
          backgroundColor: 'rgba(20, 184, 166, 0.4)',
        },
      ],
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
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
          },
          grid: {
            color: 'gray',
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: 'gray',
          },
        },
      },
    };
  }

  updateCalories() {
    this.caloriesData = [];
    this.runningDistances.forEach((d) => {
      /* Calories burned = 10 km * 70 kg * 1 kcal/kg/km = 700 kcal     */
      this.caloriesData.push(d * this.weight * 1);
    });

    this.data.datasets[0].data = this.caloriesData;
    // Trigger chart update
    if (this.chart) {
      this.chart.reinit();
    }
  }
}