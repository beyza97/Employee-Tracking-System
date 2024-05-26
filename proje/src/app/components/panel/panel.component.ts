import { Component,OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data/data.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
  providers: [MessageService]
})
export class PanelComponent implements OnInit {
  dashboardData:any;
  topEmployeesChartData: any;
  pieChartOptions: any;
  showCourseModal: boolean = false;
  skills: string[] = [];
  selectedSkill: string = '';
  showEmployeeModal: boolean = false;
  teamOptions: string[] = [];
  basicData: any;
  basicOptions: any;

  constructor(
    private dataService:DataService,
    private route: Router,
    private messageService: MessageService
  ){}
  ngOnInit() {

    this.dataService.getDashboardData().subscribe({
      next: (data) => {
        this.dashboardData = data.data;
        this.skills = this.dashboardData.skills_in_development.map((skill: any) => skill.skill);
        this.teamOptions = this.dashboardData.teams.map((team: any) => team.title);

        console.log(this.dashboardData);
        this.prepareChartData()
        this.setupChart();
      },
      error: (error) => {
        console.error("data not read : ", error);
      }
    });
  }
  saveCourse() {
    this.showCourseModal = false; 
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'New Course Request Created' });
  }
  saveEmployee() {
    this.showEmployeeModal = false; 
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'New Employee Request Created' });
  }

  prepareChartData() {
    this.topEmployeesChartData = {
        labels: this.dashboardData.top_employees.map((employee:any )=> employee.name),
        datasets: [
            {
                data: this.dashboardData.top_employees.map((employee:any)  => employee.current_score),
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }
        ]
    };
    this.pieChartOptions = {
      responsive: true,
      legend: {
          position: 'top',
      },
      animation: {
          animateScale: true,
          animateRotate: true
      }
  };

}
setupChart(){
  const skillsDev = this.dashboardData.top_skills;
  const labels = skillsDev.map((activity:any)=>activity.skill)
  const employees = skillsDev.map((activity:any)=>activity.employees);
  
  this.basicData = {
    labels: labels,
    datasets: [
      {
        label: ' Top Skills',
        backgroundColor: '#42A5F5',
        data: employees
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
