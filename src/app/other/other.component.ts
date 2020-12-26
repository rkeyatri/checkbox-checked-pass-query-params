import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

selectedId: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
     this.route.queryParams.subscribe(params => {
       this.selectedId = params['id'];  
      });
  }
}