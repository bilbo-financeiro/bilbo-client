(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-projects-projects-module"],{

/***/ "./src/app/modules/projects/projects.component.html":
/*!**********************************************************!*\
  !*** ./src/app/modules/projects/projects.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\r\n\r\n  <div class=\"wishes-form\">\r\n    <div class=\"total\">\r\n      <h3>total: {{ total }}</h3>\r\n    </div>\r\n    <form [formGroup]=\"wishesForm\">\r\n      <div class=\"form-group\">\r\n        <label>Name</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"name\" formControlName=\"name\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Valor</label>\r\n        <input type=\"number\" class=\"form-control\" name=\"value\" formControlName=\"value\">\r\n      </div>\r\n    </form>\r\n    <div class=\"submit-actions\">\r\n      <button class=\"btn btn-primary\" (click)=\"insertWish()\">Novo</button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"wishes-list\">\r\n    <div class=\"wish-item\" *ngFor=\"let wish of wishesList | async\">\r\n      <div class=\"wish-name\">{{ wish.name }}</div>\r\n      <div class=\"wish-value\">{{ wish.value }}</div>\r\n      <button class=\"btn btn-warning\" (click)=\"removeWish(wish.key)\">Remover</button>\r\n    </div>\r\n  </div>\r\n\r\n<!--\r\n  <div class=\"wishes-overview\">\r\n    <div class=\"overview-total\">\r\n      <div class=\"item\">{{ totalValue }}</div>\r\n      <div class=\"item\">{{ totalItems }}</div>\r\n    </div>\r\n  </div> -->\r\n\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/modules/projects/projects.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/modules/projects/projects.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  display: flex;\n  flex-direction: row; }\n  .content .wishes-form {\n    width: 40%;\n    margin: 10px; }\n  .content .wishes-form .form-group {\n      width: 135px; }\n  .content .wishes-form .submit-actions {\n      margin-top: 20px; }\n  .content .wishes-list {\n    display: flex;\n    flex-direction: column;\n    align-items: center; }\n  .content .wishes-list .wish-item {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: center;\n      padding: 8px;\n      font-size: 11px;\n      font-weight: 800;\n      color: #000;\n      background-color: #aaaaaa; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcm9qZWN0cy9DOlxcVXNlcnNcXGZlbGlwZS5mcmFuY2lzY2hldHRvXFx3b3Jrc3BhY2VcXGJpbGJvLWZpbmNcXGJpbGJvLWNsaWVudC9zcmNcXGFwcFxcbW9kdWxlc1xccHJvamVjdHNcXHByb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYTtFQUNiLG9CQUFtQixFQTJCcEI7RUE3QkQ7SUFJSSxXQUFVO0lBQ1YsYUFBWSxFQU9iO0VBWkg7TUFPTSxhQUFZLEVBQ2I7RUFSTDtNQVVNLGlCQUFnQixFQUNqQjtFQVhMO0lBY0ksY0FBYTtJQUNiLHVCQUFzQjtJQUN0QixvQkFBbUIsRUFZcEI7RUE1Qkg7TUFrQk0sY0FBYTtNQUNiLG9CQUFtQjtNQUNuQiwrQkFBOEI7TUFDOUIsb0JBQW1CO01BQ25CLGFBQVk7TUFDWixnQkFBZTtNQUNmLGlCQUFnQjtNQUNoQixZQUFXO01BQ1gsMEJBQ0YsRUFBQyIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIC53aXNoZXMtZm9ybSB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICB3aWR0aDogMTM1cHg7XHJcbiAgICB9XHJcbiAgICAuc3VibWl0LWFjdGlvbnMge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAud2lzaGVzLWxpc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLndpc2gtaXRlbSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhYWFhXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/projects/projects.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/projects/projects.component.ts ***!
  \********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.service */ "./src/app/modules/projects/projects.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(formBuilder, projectsService) {
        this.formBuilder = formBuilder;
        this.projectsService = projectsService;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        this.wishesList = this.projectsService.getAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (wishs) { return _this.showTotalValueWish(wishs); }));
    };
    ProjectsComponent.prototype.initForm = function () {
        this.wishesForm = this.formBuilder.group({
            name: '',
            value: ''
        });
    };
    ProjectsComponent.prototype.insertWish = function () {
        var wish = this.wishesForm.value;
        this.projectsService.insert(wish);
        this.initForm();
    };
    ProjectsComponent.prototype.removeWish = function (key) {
        this.projectsService.delete(key);
    };
    ProjectsComponent.prototype.showTotalValueWish = function (items) {
        var data = items;
        var result = data.reduce(function (previous, current) { return previous + current.value; }, 1);
        this.total = result;
        return items;
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/modules/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/modules/projects/projects.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/modules/projects/projects.module.routing.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/projects/projects.module.routing.ts ***!
  \*************************************************************/
/*! exports provided: ProjectsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsRoutingModule", function() { return ProjectsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.component */ "./src/app/modules/projects/projects.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ROUTE = [
    {
        path: '',
        component: _projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"],
    }
];
var ProjectsRoutingModule = /** @class */ (function () {
    function ProjectsRoutingModule() {
    }
    ProjectsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ROUTE)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], ProjectsRoutingModule);
    return ProjectsRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/projects/projects.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/projects/projects.module.ts ***!
  \*****************************************************/
/*! exports provided: ProjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsModule", function() { return ProjectsModule; });
/* harmony import */ var _projects_module_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.module.routing */ "./src/app/modules/projects/projects.module.routing.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.component */ "./src/app/modules/projects/projects.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProjectsModule = /** @class */ (function () {
    function ProjectsModule() {
    }
    ProjectsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _projects_module_routing__WEBPACK_IMPORTED_MODULE_0__["ProjectsRoutingModule"]
            ]
        })
    ], ProjectsModule);
    return ProjectsModule;
}());



/***/ }),

/***/ "./src/app/modules/projects/projects.service.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/projects/projects.service.ts ***!
  \******************************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectsService = /** @class */ (function () {
    function ProjectsService(db) {
        this.db = db;
    }
    ProjectsService.prototype.insert = function (wish) {
        this.db.list('wish').push(wish);
    };
    ProjectsService.prototype.update = function (wish, key) {
        this.db.list('wish').update(key, wish);
    };
    ProjectsService.prototype.getAll = function () {
        return this.db.list('wish')
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) { return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); }); }));
    };
    ProjectsService.prototype.delete = function (key) {
        this.db.object("wish/" + key).remove();
    };
    ProjectsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], ProjectsService);
    return ProjectsService;
}());



/***/ })

}]);
//# sourceMappingURL=modules-projects-projects-module.js.map