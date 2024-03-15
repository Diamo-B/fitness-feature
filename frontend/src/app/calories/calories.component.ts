import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calories',
  templateUrl: './calories.component.html',
  styleUrls: ['./calories.component.css']
})
export class CaloriesComponent  implements OnInit{
    data: any;

    options: any;

    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = "white";
        const textColorSecondary = "white";
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        
        this.data = {
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [
              {
                label: 'Calories Burned',
                data: [180, 210, 215, 190, 205, 195, 200],
                fill: false,
                tension: 0.4,
                borderColor: "orange",
            },
            {
                label: 'Active Minutes',
                data: [200, 220, 210, 205, 215, 200, 210],
                fill: false,
                borderColor: "white",
                tension: 0.4,
            }
                        
            
            ]
        };
        
        this.options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };
    }
}