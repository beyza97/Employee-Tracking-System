import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data/data.service';

@Component({
  selector: 'app-activity-status',
  templateUrl: './activity-status.component.html',
  styleUrls: ['./activity-status.component.css']
})
export class ActivityStatusComponent implements OnInit{
  dashboardData:any;
  basicData: any;
  basicOptions: any;

  constructor(
    private dataService:DataService,
  ){}
  ngOnInit() {

    this.dataService.getDashboardData().subscribe({
      next: (data) => {
        this.dashboardData = data.data;
        console.log(this.dashboardData);
        this.setupChart();
      },
      error: (error) => {
        console.error("data not read : ", error);
      }
    });
  }
  setupChart() {
    const activityHours = this.dashboardData.activity_hours;

    const labels = activityHours.map((activity: any) => activity.date);
    const hoursData = activityHours.map((activity: any) => activity.hours);
    const lessonsData = activityHours.map((activity: any) => activity.lessons_taken);
    const examsData = activityHours.map((activity: any) => activity.exams_completed);

    this.basicData = {
      labels: labels,
      datasets: [
        {
          label: 'Hours',
          backgroundColor: '#42A5F5',
          data: hoursData
        },
        {
          label: 'Lessons Taken',
          backgroundColor: '#66BB6A',
          data: lessonsData
        },
        {
          label: 'Exams Completed',
          backgroundColor: '#FFA726',
          data: examsData
        }
      ]
    };

    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057'
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
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        }
      }
    };
  }

}
