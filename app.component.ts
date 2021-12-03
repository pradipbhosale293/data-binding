import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo2';

  constructor(private route: Router){

  }

  navigateToStaff(){
    // here my business logic will go.
    // router.navigate will accept the params as array.
    // this.route.navigate(['staff1']);

    // router.navigateByUrl will accept params as string aragument
    this.route.navigateByUrl('staff1/2/Rahul');
  }
}
