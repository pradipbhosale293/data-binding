import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../service/data-sharing.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private mySer: DataSharingService, private router: Router) {
    this.mySer.currentData.subscribe((res)=>{
      console.log(res);
    })
   }

  ngOnInit(): void {
  }

  sendFromFirst(){
    let data="data from first to second";
    this.mySer.setMessage(data);
    this.router.navigate(['second']);
  }

}
