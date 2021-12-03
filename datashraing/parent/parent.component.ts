import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {

  constructor() { }
  // this is for @input
  parentToChild:any="Data From Parent to Child Component.";

  // this is for @output
  dataFromChild:any;

  // this is for @viewChild
  @ViewChild(ChildComponent) childComp:any;
  dataFrmChildByViewChild:any;
  data:any;
  ngOnInit(): void {
  }


  emitDataFromChild(ev:any){
    console.log(ev);
    this.dataFromChild= ev;
  }
  ngAfterViewInit(){
    setTimeout(() => {
      console.log(this.childComp.dataFromChildForViewChild);
      this.data = this.childComp.dataFromChildForViewChild;
      this.childComp.checkCallFromParent();
    }, 0);
  }
}
