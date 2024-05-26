import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data/data.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-mission-manage',
  templateUrl: './mission-manage.component.html',
  styleUrls: ['./mission-manage.component.css'],
  providers: [MessageService]
})
export class MissionManageComponent implements OnInit {
  dashboardData: any;
  showModal: boolean = false;
  skills: string[] = [];
  selectedSkill: string = '';


  constructor(
    private dataService: DataService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.dataService.getDashboardData().subscribe({
      next: (data) => {
        this.dashboardData = data.data;
        this.skills = this.dashboardData.skills_in_development.map((skill: any) => skill.skill);
        console.log(this.dashboardData);
        console.log(this.skills);
      },
      error: (error) => {
        console.error("Data not read: ", error);
      }
    });
  }
  saveCourse() {
    this.showModal = false; 
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'New Course Request Created' });

  }
}
