import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {HomeComponent} from './components/home/home.component';
import {ButtonModule} from "primeng/button";
import {MissionManageComponent} from './components/mission-manage/mission-manage.component';
import {TableModule} from "primeng/table";
import {FormsModule} from "@angular/forms";
import {CardModule} from "primeng/card";
import {InputTextModule} from 'primeng/inputtext';
import {ChartModule} from "primeng/chart";
import { HttpClientModule } from '@angular/common/http';
import { MenubarModule } from 'primeng/menubar';
import { PanelComponent } from './components/panel/panel.component';
import { MessageService } from 'primeng/api';
import { CoursesComponent } from './components/courses/courses.component';
import { TabViewModule } from 'primeng/tabview';
import { ActivityStatusComponent } from './components/courses/activity-status/activity-status.component';
import { InProgressComponent } from './components/courses/in-progress/in-progress.component';
import { TagModule } from 'primeng/tag';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillsDevelopmentComponent } from './components/courses/skills-development/skills-development.component';
import { TeamsComponent } from './components/teams/teams.component';
import { SalesComponent } from './components/teams/sales/sales.component';
import { CarouselModule } from 'primeng/carousel';
import { RatingModule } from 'primeng/rating';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { FieldsetModule } from 'primeng/fieldset';
import { CustomerSuccessComponent } from './components/teams/customer-success/customer-success.component';
import { EngineeringComponent } from './components/teams/engineering/engineering.component';
import { MarketingComponent } from './components/teams/marketing/marketing.component';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MissionManageComponent,
    PanelComponent,
    CoursesComponent,
    ActivityStatusComponent,
    InProgressComponent,
    SkillsDevelopmentComponent,
    TeamsComponent,
    SalesComponent,
    CustomerSuccessComponent,
    EngineeringComponent,
    MarketingComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TableModule,
    FormsModule,
    CardModule,
    InputTextModule,
    ChartModule,
    HttpClientModule,
    MenubarModule,
    TabViewModule,
    TagModule,
    BrowserAnimationsModule,
    CarouselModule,
    RatingModule,
    OverlayPanelModule,
    FieldsetModule,
    DropdownModule,
    DialogModule,
    ToastModule, 
    CalendarModule,
  ],
  providers: [
    MessageService
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
