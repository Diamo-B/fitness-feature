import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UIChart } from 'primeng/chart';
import { RunningService } from 'src/app/services/running.service';

@Component({
  selector: 'app-running',
  templateUrl: './running.component.html',
  styleUrls: ['./running.component.css'],
})
export class RunningComponent implements OnInit {
  data: any;
  options: any;
  datasetValues: number[] = [];
  @ViewChild('chart', { static: false }) chart!: UIChart;
  constructor(private runningService: RunningService) {}

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    this.runningService.dataset$.subscribe((d) => {
      this.datasetValues = d
      // Update the data object whenever datasetValues changes
      this.updateChartData();
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
          label: 'Distance ran in KM',
          backgroundColor: '#14B8A6',
          data: [...this.datasetValues],
        },
      ],
    };

    this.options = {
      indexAxis: 'y',
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: 'white',
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: 'white',
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
            color: 'white',
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };
  }
  // Function to update chart data
  updateChartData() {
    this.data.datasets[0].data = this.datasetValues;
    // Trigger chart update
    if (this.chart) {
      this.chart.refresh();
    }
  }
}
