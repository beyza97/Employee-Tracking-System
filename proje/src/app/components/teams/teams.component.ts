import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DataService } from 'src/app/service/data/data.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
  providers: [MessageService]
})
export class TeamsComponent implements OnInit{
  dashboardData:any;

  topEmployeesChartData: any;
  pieChartOptions: any;
  showCourseModal: boolean = false;
  skills: string[] = [];
  selectedSkill: string = '';
  showEmployeeModal: boolean = false;
  teamOptions: string[] = [];

  constructor(
    private dataService:DataService,
    private route: Router,
    private messageService: MessageService
  ){}
  ngOnInit() {

    this.dataService.getDashboardData().subscribe({
      next: (data) => {
        this.dashboardData = data.data;
        console.log(this.dashboardData);
      },
      error: (error) => {
        console.error("data not read : ", error);
      }
    });
  }
  saveCourse() {
    this.showCourseModal = false; 
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'New Team Request Created' });
  }
}
