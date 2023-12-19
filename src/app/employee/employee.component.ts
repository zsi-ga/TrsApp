import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employee: any;
  getEmployees: any;
  employees: any;
  
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployee () {
    this.api.getEmployees().subscribe({
      next: res => (
        //console.log(res);
        this.employees = res
        )
      })
  }

}
