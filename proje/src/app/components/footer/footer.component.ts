import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  {

  @Input() class: string = 'footer-light' 
  @Input() themeLogo: string = 'assets/logo/logo_t.jpg'
  @Input() newsletter: boolean = true; 

  constructor(private route: Router) {
  }

  kvkk(){
    let path: string = "/home/"
    this.route.navigate([]).then(() => {
      window.open(path, '_blank')
    })
  }
  privacy(){
    let path: string = "/home/"
    this.route.navigate([]).then(() => {
      window.open(path, '_blank')
    })
  }
 cookie(){
    let path: string = "/home/"
    this.route.navigate([]).then(() => {
      window.open(path, '_blank')
    })
  }
  aboutUs(){
    let path: string = "/home"
    this.route.navigate([]).then(() => {
      window.open(path, '_blank')
    })
  }
  contactUs(){
    let path: string = "/home"
    this.route.navigate([]).then(() => {
      window.open(path, '_blank')
    })
  }


}
