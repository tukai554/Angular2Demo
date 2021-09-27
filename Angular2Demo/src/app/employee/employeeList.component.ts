import { Component,OnInit } from "@angular/core";
import { error } from "console";
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service'
@Component({
    selector: 'list-employee',
    templateUrl: `app/employee/employeeList.component.html`,
    styleUrls: [`app/employee/employeeList.component.css`],
})

export class EmployeeListComponent {

    employees: IEmployee[];
    selectedEmployeeCountRadioButton: string = "All";
    statusMessage: string = "Loading Data. Please wait ...";
    constructor(private _employeeService: EmployeeService) {

    }
    ngOnInit() {
        this._employeeService.getEmployees()
            .subscribe((employeesData) => this.employees = employeesData,
                (error) => { this.statusMessage= "Problem with Service. Try again later ..." }
        );

    }

    //employees: any[];

    //selectedEmployeeCountRadioButton: string = "All";
    //constructor() {
    //    this.employees = [
    //        { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '6/25/1988' },
    //        { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700.95, dateOfBirth: '6/9/1982' },
    //        { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '08/12/1979' },
    //        { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 6500.826, dateOfBirth: '10/14/1980' },
    //        ];
    //}

    

    //trackbyEmpCode(index: number, employee: any): string {
    //    return employee.code;
    //}
    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }

    getTotalEmployeesCount(): number {
        return this.employees.length;
    }
    getTotalMaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === "Male").length;
    }
    getTotalFemaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === "Female").length;
    }

 }