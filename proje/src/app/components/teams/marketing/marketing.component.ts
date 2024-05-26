import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data/data.service';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
export class MarketingComponent implements OnInit {
  salesData: any;
  responsiveOptions: any;
  showRatingTitle: boolean = false;
  showOverallRatingTitle:boolean=false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getDashboardData().subscribe({
      next: (data) => {
        this.salesData = data.data.teams.find((team: any) => team.title === 'Marketing');
      },
      error: (error) => {
        console.error("data not read : ", error);
      }
    });

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
}

