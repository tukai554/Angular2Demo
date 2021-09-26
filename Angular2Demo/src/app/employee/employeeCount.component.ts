import { Output,EventEmitter } from '@angular/core';
import { Component,Input } from '@angular/core';

@Component({
    selector: 'employee-count',
    templateUrl: `app/employee/employeeCount.component.html`,
    styleUrls: [`app/employee/employeeCount.component.css`]
})

export class EmployeeCountComponent {
    selectedRadioButtonValue: string ="All"
    @Output()
    countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();
    @Input()
    all: number = 10
    @Input()
    male: number = 5;
    @Input()
    female: number = 5;

    onRadioButtonSelectionChange() {
        this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    }
    
}