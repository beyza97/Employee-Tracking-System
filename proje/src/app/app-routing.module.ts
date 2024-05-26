import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {MissionManageComponent} from "./components/mission-manage/mission-manage.component";
import { PanelComponent } from './components/panel/panel.component';
import { CoursesComponent } from './components/courses/courses.component';
import { TeamsComponent } from './components/teams/teams.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home', component: HomeComponent,
 /*  children:[
    {path:'mission-manage', component: MissionManageComponent},

  ] */
  },
 /*  { path: 'home/mission-manage', component: MissionManageComponent }, */
  { path: 'home/panel', component: PanelComponent },
  { path: 'home/courses', component: CoursesComponent },
  { path: 'home/teams', component: TeamsComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
