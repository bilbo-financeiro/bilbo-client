(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-signup-signup-module"],{

/***/ "./src/app/modules/signup/signup.component.html":
/*!******************************************************!*\
  !*** ./src/app/modules/signup/signup.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-group\" [formGroup]=\"signupForm\">\n  <div class=\"form-control\">\n    <label>Primeiro Nome</label>\n    <input type=\"text\" formControlName=\"firstName\">\n  </div>\n  <div class=\"form-control\">\n    <label>Último Nome</label>\n    <input type=\"text\" formControlName=\"lastName\">\n  </div>\n  <div class=\"form-control\">\n    <label>Email</label>\n    <input type=\"email\" formControlName=\"email\">\n  </div>\n  <div class=\"form-control\">\n    <label>Usuário</label>\n    <input type=\"text\" formControlName=\"username\">\n  </div>\n  <div class=\"form-control\">\n    <label>Senha</label>\n    <input type=\"text\" formControlName=\"password\">\n  </div>\n  <div class=\"form-control\">\n    <label>Confirmação de Senha</label>\n    <input type=\"text\" formControlName=\"confirmPassword\">\n  </div>\n\n  <button (click)=\"createUser()\" [disabled]=\"signupForm.invalid\">Salvar</button>\n\n</form>\n\n\n<pre>\n  value: {{ signupForm.value | json }}\n  valid: {{ signupForm.valid | json }}\n</pre>\n"

/***/ }),

/***/ "./src/app/modules/signup/signup.component.scss":
/*!******************************************************!*\
  !*** ./src/app/modules/signup/signup.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/signup/signup.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/signup/signup.component.ts ***!
  \****************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _signup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.service */ "./src/app/modules/signup/signup.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = /** @class */ (function () {
    function SignupComponent(signupSerivce) {
        this.signupSerivce = signupSerivce;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.initSignupForm();
    };
    SignupComponent.prototype.initSignupForm = function () {
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        }, { validators: this.validateConfirmPassword });
    };
    SignupComponent.prototype.validateConfirmPassword = function (formGroup) {
        var password = formGroup.get('password');
        var confirmPassword = formGroup.get('confirmPassword');
        if (password.value && !confirmPassword.value) {
            confirmPassword.setErrors({ required: true });
            return { passwordError: true };
        }
        else {
            if (password.value === confirmPassword.value) {
                return null;
            }
            else {
                confirmPassword.setErrors({ differentPasswordConfirmation: true });
                return { passwordError: true };
            }
        }
    };
    SignupComponent.prototype.createUser = function () {
        var formValue = this.signupForm.value;
        delete formValue.confirmPassword;
        this.signupSerivce.insert(formValue);
        console.log('ta osso');
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/modules/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/modules/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [_signup_service__WEBPACK_IMPORTED_MODULE_2__["SignupService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/modules/signup/signup.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/signup/signup.module.ts ***!
  \*************************************************/
/*! exports provided: SignupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModule", function() { return SignupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup.service */ "./src/app/modules/signup/signup.service.ts");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup.component */ "./src/app/modules/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ROUTES = [
    { path: '', component: _signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] }
];
var SignupModule = /** @class */ (function () {
    function SignupModule() {
    }
    SignupModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(ROUTES)
            ],
            providers: [_signup_service__WEBPACK_IMPORTED_MODULE_4__["SignupService"]]
        })
    ], SignupModule);
    return SignupModule;
}());



/***/ }),

/***/ "./src/app/modules/signup/signup.service.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/signup/signup.service.ts ***!
  \**************************************************/
/*! exports provided: SignupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupService", function() { return SignupService; });
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



var SignupService = /** @class */ (function () {
    function SignupService(db) {
        this.db = db;
    }
    SignupService.prototype.insert = function (user) {
        this.db.list('user').push(user);
    };
    SignupService.prototype.update = function (user, key) {
        this.db.list('user').update(key, user);
    };
    SignupService.prototype.getAll = function () {
        return this.db.list('user')
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) { return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); }); }));
    };
    SignupService.prototype.delete = function (key) {
        this.db.object("user/" + key).remove();
    };
    SignupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], SignupService);
    return SignupService;
}());



/***/ })

}]);
//# sourceMappingURL=modules-signup-signup-module.js.map