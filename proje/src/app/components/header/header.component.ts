import { Component, Input, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { MenuItem, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() themeLogo: string = 'assets/logo/logo_t.jpg'
  menuItems: MenuItem[] | undefined;

  constructor(
    private route: Router,
    private messageService: MessageService
  ) {
  }
  ngOnInit(): void {
    this.menuItems = [
      {
          label: 'Home',
          icon: 'pi pi-home',
          command: () => this.goToPanel(),
      },
/*       {
          label: 'Mission Manage',
          icon: 'pi pi-star',
          command: () => this.goToMissionManage(),
          
      }, */
      {
        label: 'Courses',
        icon: 'pi pi-star',
        command: () => this.goToCourses(),
        
    },
      {
          label: 'Teams',
          icon: 'pi pi-user',
          command: () => this.goToTeams(),
      },
/*       {
          label: 'Contact',
          icon: 'pi pi-envelope'
      }, */
      {
        label: 'Log Out',
        icon: 'pi pi-sign-out',
        command: () => this.logOut(),
        
    },
  ]
  }

  goToSearch(){
    this.route.navigate(['home/inquiry-panel'])
  }
/*   goToMissionManage(){
    this.route.navigate(['home/mission-manage'])
  } */
  goToTeams(){
    this.route.navigate(['home/teams'])
  }
 
  goToPanel(){
    this.route.navigate(['/home/panel']); 
  }
  goToCourses(){
    this.route.navigate(['/home/courses']); 
  }
  logOut() {
    this.route.navigate(['/home']); 
    this.showLogoutToast(); 
  }
  showLogoutToast() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Logged out successfully', life: 3000 });
  }

}
