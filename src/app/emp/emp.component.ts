import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   ename:string='sam1256';
   epic:string='https://angular.io/assets/images/logos/angular/shield-large.svg'
   welcome()
   {
    alert("Welcome to Angular event Binding");
   }
   isdisabled:boolean=true;
}
