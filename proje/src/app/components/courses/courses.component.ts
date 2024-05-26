import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data/data.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{
  dashboardData:any;

  constructor(
    private dataService:DataService,
    private route: Router,
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
}
