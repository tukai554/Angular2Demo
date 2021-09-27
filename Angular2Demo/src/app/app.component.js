"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: /*`<list-employee></list-employee>`*/ "<div style = \"padding:5px\">\n         <ul class=\"nav nav-tabs\">\n             <li routerLinkActive=\"active\"> <a routerLink=\"home\">Home</a></li>\n             <li routerLinkActive=\"active\"> <a routerLink=\"employees\">Employees</a></li>\n         </ul>\n         </div>\n         <router-outlet></router-outlet>"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/*<my-employee></my-employee>*/
//Name: <input [(ngModel)]='name'/>
//            <br/>
//            You entered: {{name}}`
//# sourceMappingURL=app.component.js.map