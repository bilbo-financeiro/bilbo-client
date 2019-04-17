(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-financial-planning-financial-planning-module"],{

/***/ "./src/app/modules/financial-planning/financial-planning.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/financial-planning/financial-planning.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  financial-planning works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/modules/financial-planning/financial-planning.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/financial-planning/financial-planning.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmluYW5jaWFsLXBsYW5uaW5nL2ZpbmFuY2lhbC1wbGFubmluZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/financial-planning/financial-planning.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/financial-planning/financial-planning.component.ts ***!
  \****************************************************************************/
/*! exports provided: FinancialPlanningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancialPlanningComponent", function() { return FinancialPlanningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FinancialPlanningComponent = /** @class */ (function () {
    function FinancialPlanningComponent() {
    }
    FinancialPlanningComponent.prototype.ngOnInit = function () {
    };
    FinancialPlanningComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-financial-planning',
            template: __webpack_require__(/*! ./financial-planning.component.html */ "./src/app/modules/financial-planning/financial-planning.component.html"),
            styles: [__webpack_require__(/*! ./financial-planning.component.scss */ "./src/app/modules/financial-planning/financial-planning.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FinancialPlanningComponent);
    return FinancialPlanningComponent;
}());



/***/ }),

/***/ "./src/app/modules/financial-planning/financial-planning.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/financial-planning/financial-planning.module.ts ***!
  \*************************************************************************/
/*! exports provided: FinancialPlanningModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancialPlanningModule", function() { return FinancialPlanningModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _financial_planning_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./financial-planning.component */ "./src/app/modules/financial-planning/financial-planning.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ROUTES = [
    {
        path: '',
        component: _financial_planning_component__WEBPACK_IMPORTED_MODULE_2__["FinancialPlanningComponent"]
    }
];
var FinancialPlanningModule = /** @class */ (function () {
    function FinancialPlanningModule() {
    }
    FinancialPlanningModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_financial_planning_component__WEBPACK_IMPORTED_MODULE_2__["FinancialPlanningComponent"]],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ROUTES)
            ]
        })
    ], FinancialPlanningModule);
    return FinancialPlanningModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-financial-planning-financial-planning-module.js.map