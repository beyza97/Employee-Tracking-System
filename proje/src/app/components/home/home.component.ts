import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data/data.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MessageService]

})
export class HomeComponent implements OnInit{
  dashboardData:any;
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

  goToMissionManage(event: Event) {
    event.preventDefault();

  
    const form = document.getElementById('loginForm') as HTMLFormElement;
    if (form.checkValidity()) {
      this.route.navigate(['home/panel']);
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Mission managed successfully' });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill out all required fields. Please enter random input.' });
    }
  }
}