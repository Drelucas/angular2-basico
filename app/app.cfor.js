"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var TASKS = [
    { id: 1, name: 'Work' },
    { id: 2, name: 'Wash dishes' },
    { id: 3, name: 'Take dust' },
    { id: 4, name: 'Shopping' },
    { id: 5, name: 'Take care of kids' },
    { id: 6, name: 'Play game' },
    { id: 7, name: 'Have lunch' },
    { id: 8, name: 'Have a dinner' },
    { id: 9, name: 'Exercise' },
    { id: 10, name: 'Pay the bills' }
];
var AppCFor = (function () {
    function AppCFor() {
        this.title = "List of tasks";
        this.tasks = TASKS;
    }
    AppCFor = __decorate([
        core_1.Component({
            selector: 'my-app2',
            template: "\n            <h1>{{ title }}</h1>\n            <ul>\n              <li *ngFor=\"let t of tasks\">{{ t.name }}</li>\n            </ul>\n            "
        }), 
        __metadata('design:paramtypes', [])
    ], AppCFor);
    return AppCFor;
}());
exports.AppCFor = AppCFor;
//# sourceMappingURL=app.cfor.js.map