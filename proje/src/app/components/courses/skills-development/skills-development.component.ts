import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data/data.service';

@Component({
  selector: 'app-skills-development',
  templateUrl: './skills-development.component.html',
  styleUrls: ['./skills-development.component.css']
})
export class SkillsDevelopmentComponent implements OnInit {
  dashboardData: any;
  basicData: any;
  basicOptions: any;

  constructor(private dataService: DataService) {}


  ngOnInit() {
    this.dataService.getDashboardData().subscribe({
      next: (data) => {
        this.dashboardData = data.data;
        console.log(this.dashboardData);
        this.setupChart();
      },
      error: (error) => {
        console.error("Data not read: ", error);
      }
    });
  }
  setupChart(){
    const skillsDev = this.dashboardData.skills_in_development;
    const labels = skillsDev.map((activity:any)=>activity.skill)
    const employees = skillsDev.map((activity:any)=>activity.employees);
    
    this.basicData = {
      labels: labels,
      datasets: [
        {
          label: 'Skills',
          backgroundColor: '#42A5F5',
          data: employees,
          hoverBackgroundColor: '#FF6384',
          hoverBorderColor: 'rgba(255,99,132,1)',
          hoverBorderWidth: 1,
          hoverLabel: {
            display: true,
            formatter: function(value: any, context: any) {
              return 'employee: ' + value;
            }
          }
        }
      ]
    };
    
    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        },
        tooltip: {
          callbacks: {
            label: function(context: any) {
              const label = context.dataset.label || '';
              const value = context.raw || 0;
              return `employee: ${value}`;
            }
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'  
          }
        },
        y: {
          ticks: {
            color: '#495057',
            precision: 0 
          },
          grid: {
            color: '#ebedef'
          }
        }
      }
    };
  }
  

}
