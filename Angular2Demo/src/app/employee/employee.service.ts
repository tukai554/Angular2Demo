import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'


@Injectable()

export class EmployeeService {

    constructor(private _http: Http) {

    }
    getEmployees(): Observable<IEmployee[]> {
        return this._http.get("https://localhost:44329/api/Employees")
            .map((response: Response) => <IEmployee[]>response.json())
            .catch(this.handleError);
                                                                       
    }
    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error);

    }
    //getEmployees(): IEmployee[] {
    //   return [
    //        { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '6/25/1988' },
    //        { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700.95, dateOfBirth: '6/9/1982' },
    //        { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '08/12/1979' },
    //        { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 6500.826, dateOfBirth: '10/14/1980' },
    //        { code: 'emp105', name: 'Nancy', gender: 'Female', annualSalary: 6700.826, dateOfBirth: '12/15/1982' },
    //    ];
    //}

}