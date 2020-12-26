import { Component } from '@angular/core';
import {  Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  checkedItems: any = [];
  list: any = [
    {id:1, 'name': 'aaa', 'age': 22, 'date': '12-06-2019'},
    {id:2, 'name': 'bbb', 'age': 23, 'date': '13-06-2019'},
    {id:3, 'name': 'ccc', 'age': 25, 'date': '21-09-2019'}
  ];

  constructor(   private router: Router, private route: ActivatedRoute) {}

  onChecked(item: any, event: any){
    let {checked, value} = event.target;
    if(checked) {
      this.checkedItems.push(value);
    } else {
      let index = this.checkedItems.indexOf(value)
      if (index !== -1) this.checkedItems.splice(index, 1);
    }
   this.goToOther()
  }

  goToOther() {
     this.router.navigate(['/other'], {relativeTo: this.route, queryParams: { id: this.checkedItems.join() } });
  }
}
