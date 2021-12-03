import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../service/data-sharing.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private ser: DataSharingService, private router:Router) { 
    this.ser.currentData.subscribe((data)=>{
      console.log(data);
    });
  }

  ngOnInit(): void {
  }

  sendFromSecond(){
    let data1="data from second to first";
    this.ser.setMessage(data1);
    this.router.navigate(['first']);
  }

}
