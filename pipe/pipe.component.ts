import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor() { }
  sampleText:string = "angular Pipes";
  date = new Date();
  student ={
    fname:'Alex',
    lname:'simi',
    age:25
  };
  salary:number = 10000;
  ngOnInit(): void {
  }

}
