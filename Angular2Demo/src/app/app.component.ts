import {Component } from "@angular/core"

@Component({
    selector: 'my-app',
    template: /*`<list-employee></list-employee>`*/
        `<div style = "padding:5px">
         <ul class="nav nav-tabs">
             <li routerLinkActive="active"> <a routerLink="home">Home</a></li>
             <li routerLinkActive="active"> <a routerLink="employees">Employees</a></li>
         </ul>
         </div>
         <router-outlet></router-outlet>`
                
    })
export class AppComponent {
    //pageHeader: string = "Employee Details";
    //name: string = "Tom";
}

/*<my-employee></my-employee>*/
    //Name: <input [(ngModel)]='name'/>
    //            <br/>
    //            You entered: {{name}}`