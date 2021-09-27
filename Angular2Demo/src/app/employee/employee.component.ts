import { Component, OnInit } from '@angular/core'
import { IEmployee } from './employee'
import { ActivatedRoute, Router } from '@angular/router'
import { EmployeeService } from './employee.service';
import { error } from 'util';
import { log } from 'console';

@Component({
    selector: `my-employee`,
    templateUrl: `app/employee/employee.component.html`,
    styleUrls: [`app/employee/employee.component.css`]
})

export class EmployeeComponent implements OnInit {
    //firstName: string = "Tom";
    //lastName: string = "Hopkins";
    //gender: string = "Male";
    //age: number = 20;
    //showDetails: boolean = false;
    employee: IEmployee;
    statusMessage: string = 'Loading Data. Please Wait...';
    constructor(private _employeeService: EmployeeService,
                private _activatedRoute: ActivatedRoute,
                private _router: Router) {

    }
    onBackButtonClick(): void{
        this._router.navigate(['/employees']);
}
    ngOnInit() {
        let empCode: string = this._activatedRoute.snapshot.params['code'];
        this._employeeService.getEmployeeByCode(empCode).then(  /*subscribe()*/
            (employeData) => {
                if (employeData == null) {
                    this.statusMessage = 'Employee with the code doesnt exist';
                }
                else {
                    this.employee = employeData;
                }
              }
        ).catch((error) => {
            this.statusMessage = 'Problem with service. Please try again';
            console.log(error);
        });
     }

    //toggleClass(): void {
    //    this.showDetails = !this.showDetails;
  }
