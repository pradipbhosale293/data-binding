import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  constructor(private actRoute: ActivatedRoute) {
    // 1. route param: It gives me direct values.
    // 2. param map: It gives me observables, so need to subscibe it.

    // 1. route param
    let staffId = this.actRoute.snapshot.params.id;
    let staffName = this.actRoute.snapshot.params.name;
    console.log(staffId, staffName);


    // 2. param Map
    this.actRoute.paramMap.subscribe((res)=>{
      console.log(res);
      let staffId1 = res.get('id');
      let staffName1 = res.get('name');

      console.log(staffId1, staffName1);
    })
   }

  ngOnInit(): void {
  }

}
