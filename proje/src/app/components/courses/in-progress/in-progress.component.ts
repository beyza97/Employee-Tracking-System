import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { DataService } from 'src/app/service/data/data.service';

@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.component.html',
  styleUrls: ['./in-progress.component.css']
})
export class InProgressComponent  implements OnInit {
  inProgressCourses!: any[];
  upcomingCourses!: any[];
  combinedCourses!: any[];
  searchValue: string | undefined;
  selectedRowTable:any;

  @ViewChild('dt') dt!: Table;
  constructor(private dataService: DataService) {}

 

  ngOnInit() {
    this.dataService.getDashboardData().subscribe({
      next: (data) => {
        const dashboardData = data.data;
        this.inProgressCourses = dashboardData.in_progress_courses;
        this.upcomingCourses = dashboardData.upcoming_courses;
        this.combinedCourses = [...this.inProgressCourses, ...this.upcomingCourses];
        console.log(this.combinedCourses);
        
        
      },
      error: (error) => {
        console.error("Data not read: ", error);
      }
    });
  }
  filterTable(event: Event) {
    if (this.dt) {
      this.dt.filterGlobal((event.target as HTMLInputElement).value, 'string');
    }
  }
  
  clear(table: Table) {
    table.clear();
    this.searchValue = ''
}
getSeverity(status: string) {
  switch (status.toLowerCase()) {
    case 'in progress':
      return 'success';
    case 'upcoming':
      return 'info';
    default:
      return undefined; 
  }
}

}