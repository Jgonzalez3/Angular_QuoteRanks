(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-author/add-author.component.css":
/*!*****************************************************!*\
  !*** ./src/app/add-author/add-author.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form{\r\n  margin: 20px, 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/add-author/add-author.component.html":
/*!******************************************************!*\
  !*** ./src/app/add-author/add-author.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <button class=\"btn btn-lg btn-link\" routerLink='/'>Home</button>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <h3>Add a new quotable author:</h3>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"border border-dark col-sm-9\"><br>\n        <form (submit)=\"createAuthor()\">\n          <h3>Name: </h3>\n          <input class=\"form-control col-sm-10\" type=\"text\" required minlength=\"4\" name=\"newauthor.name\" [(ngModel)]=\"newauthor.name\"><br>\n          <button class=\"col-4 btn btn-primary btn-lg\" routerLink=\"/\">Cancel</button>\n          <button class=\"col-4 btn btn-primary btn-lg\" type=\"submit\">Submit</button>\n        </form>\n        <br>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/add-author/add-author.component.ts":
/*!****************************************************!*\
  !*** ./src/app/add-author/add-author.component.ts ***!
  \****************************************************/
/*! exports provided: AddAuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAuthorComponent", function() { return AddAuthorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddAuthorComponent = /** @class */ (function () {
    function AddAuthorComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.newauthor = { name: "", quotes: [] };
    }
    AddAuthorComponent.prototype.ngOnInit = function () {
    };
    AddAuthorComponent.prototype.createAuthor = function () {
        console.log(this.newauthor);
        var observable = this._httpService.createAuthor(this.newauthor);
        observable.subscribe(function (data) {
            console.log("DataCreate:", data);
            console.log("ERROR", data['error']);
            console.log("Create Message", data['message']);
        });
        this.redirectHome();
    };
    AddAuthorComponent.prototype.redirectHome = function () {
        this._router.navigate(['/']);
    };
    AddAuthorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-author',
            template: __webpack_require__(/*! ./add-author.component.html */ "./src/app/add-author/add-author.component.html"),
            styles: [__webpack_require__(/*! ./add-author.component.css */ "./src/app/add-author/add-author.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddAuthorComponent);
    return AddAuthorComponent;
}());



/***/ }),

/***/ "./src/app/add-quote/add-quote.component.css":
/*!***************************************************!*\
  !*** ./src/app/add-quote/add-quote.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-quote/add-quote.component.html":
/*!****************************************************!*\
  !*** ./src/app/add-quote/add-quote.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"author\" class=\"container\">\n  <div class=\"row\">\n    <button class=\"btn btn-link\" routerLink='/'>Home</button>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <h3>Provide a quote by {{author.name}}:</h3>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"border border-dark col-sm-9\">\n      <br>\n      <form (submit)=\"createQuote()\">\n        <h3>Quote: </h3>\n        <input class=\"form-control col-sm-10\" required minlength=\"4\" name=\"newquote.quote\" [(ngModel)]=\"newquote.quote\"><br>\n        <button class=\"col-4 btn btn-danger btn-lg\" routerLink=\"/quotes/{{paramId}}\">Cancel</button>\n        <button class=\"col-4 btn btn-success btn-lg\" type=\"submit\">Submit</button>\n      </form><br>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/add-quote/add-quote.component.ts":
/*!**************************************************!*\
  !*** ./src/app/add-quote/add-quote.component.ts ***!
  \**************************************************/
/*! exports provided: AddQuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddQuoteComponent", function() { return AddQuoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddQuoteComponent = /** @class */ (function () {
    function AddQuoteComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.newquote = { quote: "", vote: 0 };
    }
    AddQuoteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.paramId = params['id'];
            console.log(params['id']);
        });
        this.getAuthorFromService();
    };
    AddQuoteComponent.prototype.getAuthorFromService = function () {
        var _this = this;
        var observable = this._httpService.getAuthor(this.paramId);
        observable.subscribe(function (data) {
            console.log("Data", data);
            _this.author = data['quotes'];
            console.log(_this.author);
        });
    };
    AddQuoteComponent.prototype.createQuote = function () {
        var _this = this;
        console.log(this.newquote);
        var observable = this._httpService.createQuote(this.newquote, this.paramId);
        observable.subscribe(function (data) {
            console.log("Data", data);
            console.log("Any Errors", data['error']);
            _this.redirectAuthorQuotes();
        });
    };
    AddQuoteComponent.prototype.redirectAuthorQuotes = function () {
        this._router.navigate(['/quotes/' + this.paramId]);
    };
    AddQuoteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-quote',
            template: __webpack_require__(/*! ./add-quote.component.html */ "./src/app/add-quote/add-quote.component.html"),
            styles: [__webpack_require__(/*! ./add-quote.component.css */ "./src/app/add-quote/add-quote.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddQuoteComponent);
    return AddQuoteComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_quote_add_quote_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-quote/add-quote.component */ "./src/app/add-quote/add-quote.component.ts");
/* harmony import */ var _add_author_add_author_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-author/add-author.component */ "./src/app/add-author/add-author.component.ts");
/* harmony import */ var _author_quotes_author_quotes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./author-quotes/author-quotes.component */ "./src/app/author-quotes/author-quotes.component.ts");
/* harmony import */ var _edit_author_edit_author_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-author/edit-author.component */ "./src/app/edit-author/edit-author.component.ts");
/* harmony import */ var _authors_authors_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authors/authors.component */ "./src/app/authors/authors.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: "", component: _authors_authors_component__WEBPACK_IMPORTED_MODULE_6__["AuthorsComponent"] },
    { path: "new", component: _add_author_add_author_component__WEBPACK_IMPORTED_MODULE_3__["AddAuthorComponent"] },
    { path: "quotes/:id", component: _author_quotes_author_quotes_component__WEBPACK_IMPORTED_MODULE_4__["AuthorQuotesComponent"] },
    { path: "edit/:id", component: _edit_author_edit_author_component__WEBPACK_IMPORTED_MODULE_5__["EditAuthorComponent"] },
    { path: "write/:id", component: _add_quote_add_quote_component__WEBPACK_IMPORTED_MODULE_2__["AddQuoteComponent"] },
    { path: "**", component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <h1>{{ title }}</h1>\n    </div>\n  </div>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Quote Ranks';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _add_quote_add_quote_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-quote/add-quote.component */ "./src/app/add-quote/add-quote.component.ts");
/* harmony import */ var _add_author_add_author_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-author/add-author.component */ "./src/app/add-author/add-author.component.ts");
/* harmony import */ var _author_quotes_author_quotes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./author-quotes/author-quotes.component */ "./src/app/author-quotes/author-quotes.component.ts");
/* harmony import */ var _authors_authors_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./authors/authors.component */ "./src/app/authors/authors.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _edit_author_edit_author_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit-author/edit-author.component */ "./src/app/edit-author/edit-author.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _add_quote_add_quote_component__WEBPACK_IMPORTED_MODULE_7__["AddQuoteComponent"],
                _add_author_add_author_component__WEBPACK_IMPORTED_MODULE_8__["AddAuthorComponent"],
                _author_quotes_author_quotes_component__WEBPACK_IMPORTED_MODULE_9__["AuthorQuotesComponent"],
                _authors_authors_component__WEBPACK_IMPORTED_MODULE_10__["AuthorsComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"],
                _edit_author_edit_author_component__WEBPACK_IMPORTED_MODULE_12__["EditAuthorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/author-quotes/author-quotes.component.css":
/*!***********************************************************!*\
  !*** ./src/app/author-quotes/author-quotes.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/author-quotes/author-quotes.component.html":
/*!************************************************************!*\
  !*** ./src/app/author-quotes/author-quotes.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"author\" class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <button class=\"btn btn-link\" routerLink=\"/\">Home</button>\n      <span class=\"d-none d-sm-inline col-sm-4\"></span>\n      <button class=\"btn btn-link col-3 col-sm-4\" routerLink='/write/{{paramId}}'>Add a quote</button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <h3>Quotes by {{author.name}}:</h3>\n    </div>\n  </div>\n  <table class=\"table table-striped table-hover table-bordered\">\n    <thead>\n      <th>Quotes</th>\n      <th>Votes</th>\n      <th>Actions available</th>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let q of author.quotes\">\n        <td>\"{{q.quote}}\"</td>\n        <td>{{q.votes}}</td>\n        <td class=\"text-center\">\n          <button class=\"btn btn-success col-sm-4 text-center\" (click)=\"voteUp(q, q._id)\">Vote Up</button>\n          <button class=\"btn btn-warning col-sm-4 text-center\" (click)=\"voteDown(q, q._id)\">Vote down</button>\n          <button class=\"btn btn-danger col-sm-4 text-center\" (click)=\"deleteQuote(q._id)\">Delete</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/author-quotes/author-quotes.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/author-quotes/author-quotes.component.ts ***!
  \**********************************************************/
/*! exports provided: AuthorQuotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorQuotesComponent", function() { return AuthorQuotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthorQuotesComponent = /** @class */ (function () {
    function AuthorQuotesComponent(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
    }
    AuthorQuotesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.paramId = params['id'];
            console.log(params['id']);
        });
        this.getQuotesFromService();
    };
    AuthorQuotesComponent.prototype.getQuotesFromService = function () {
        var _this = this;
        var observable = this._httpService.getAuthor(this.paramId);
        observable.subscribe(function (data) {
            console.log("Got Quotes", data);
            _this.author = data['quotes'];
        });
    };
    AuthorQuotesComponent.prototype.deleteQuote = function (quoteid) {
        var _this = this;
        var observable = this._httpService.deleteQuote(this.paramId, quoteid);
        observable.subscribe(function (data) {
            console.log("Delete Data", data);
            console.log("Delete ERROR", data['error']);
            console.log("Delete ERROR", data['err']);
            _this.getQuotesFromService();
        });
    };
    // Work on Methods below
    AuthorQuotesComponent.prototype.voteUp = function (quote, quoteid) {
        console.log(quote);
        quote.votes++;
        console.log(quote.votes);
        var observable = this._httpService.updateVote(this.paramId, quoteid, quote);
        observable.subscribe(function (data) {
            console.log("Any Errors", data['error']);
            console.log("Any Errors", data['err']);
        });
    };
    AuthorQuotesComponent.prototype.voteDown = function (quote, quoteid) {
        console.log(quote.votes);
        quote.votes--;
        console.log(quote.votes);
        var observable = this._httpService.updateVote(this.paramId, quoteid, quote);
        observable.subscribe(function (data) {
            console.log("Any Errors", data['error']);
            console.log("Any Errors", data['err']);
        });
    };
    AuthorQuotesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-author-quotes',
            template: __webpack_require__(/*! ./author-quotes.component.html */ "./src/app/author-quotes/author-quotes.component.html"),
            styles: [__webpack_require__(/*! ./author-quotes.component.css */ "./src/app/author-quotes/author-quotes.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AuthorQuotesComponent);
    return AuthorQuotesComponent;
}());



/***/ }),

/***/ "./src/app/authors/authors.component.css":
/*!***********************************************!*\
  !*** ./src/app/authors/authors.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/authors/authors.component.html":
/*!************************************************!*\
  !*** ./src/app/authors/authors.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <button class=\"btn btn-lg btn-link\" routerLink =\"new\">Add a quotable author</button>\n  <div class=\"row\">\n    <div class=\"col\">\n      <h3>We have quotes by:</h3>\n    </div>\n  </div>\n  <table class=\"table table-striped table-hover table-bordered\">\n    <thead>\n      <th class=\"h3\">Author</th>\n      <th class=\"h3\">Actions available</th>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let a of authors\">\n        <td >{{a.name}}</td>\n        <td class=\"text-center h4\">\n          <button class=\"btn btn-primary col-sm-5\" routerLink=\"quotes/{{a._id}}\">View Quotes</button>\n          <span class=\"d-none d-sm-inline col-sm-1\"></span>\n          <button class=\"btn btn-dark col-sm-5\" routerLink=\"edit/{{a._id}}\">Edit</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/authors/authors.component.ts":
/*!**********************************************!*\
  !*** ./src/app/authors/authors.component.ts ***!
  \**********************************************/
/*! exports provided: AuthorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorsComponent", function() { return AuthorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthorsComponent = /** @class */ (function () {
    function AuthorsComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
    }
    AuthorsComponent.prototype.ngOnInit = function () {
        this.getAuthorsFromService();
    };
    AuthorsComponent.prototype.getAuthorsFromService = function () {
        var _this = this;
        var observable = this._httpService.getAuthors();
        observable.subscribe(function (data) {
            console.log("Authors Data", data);
            _this.authors = data['authors'];
        });
    };
    AuthorsComponent.prototype.redirectCreateAuthor = function () {
        this._router.navigate(['/new']);
    };
    AuthorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-authors',
            template: __webpack_require__(/*! ./authors.component.html */ "./src/app/authors/authors.component.html"),
            styles: [__webpack_require__(/*! ./authors.component.css */ "./src/app/authors/authors.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthorsComponent);
    return AuthorsComponent;
}());



/***/ }),

/***/ "./src/app/edit-author/edit-author.component.css":
/*!*******************************************************!*\
  !*** ./src/app/edit-author/edit-author.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit-author/edit-author.component.html":
/*!********************************************************!*\
  !*** ./src/app/edit-author/edit-author.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"author\" class=\"container\">\n  <div class=\"row\">\n    <button class=\"btn btn-link\" routerLink='/'>Home</button>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <h3>Edit Author: {{authorname}}</h3>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"border border-dark col-sm-9\">\n      <br>\n      <form (submit)=\"editAuthor()\">\n        <h3>Name: </h3>\n        <input class=\"form-control col-sm-10\" required minlength=\"4\" name=\"author.name\" [(ngModel)]=\"author.name\"><br>\n        <button class=\"col-4 btn btn-danger btn-lg\" routerLink=\"/\">Cancel</button>\n        <button class=\"col-4 btn btn-success btn-lg\" type=\"submit\">Submit</button>\n      </form><br>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/edit-author/edit-author.component.ts":
/*!******************************************************!*\
  !*** ./src/app/edit-author/edit-author.component.ts ***!
  \******************************************************/
/*! exports provided: EditAuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAuthorComponent", function() { return EditAuthorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditAuthorComponent = /** @class */ (function () {
    function EditAuthorComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    EditAuthorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.paramId = params['id'];
            console.log(params['id']);
        });
        this.getAuthorFromService();
    };
    EditAuthorComponent.prototype.getAuthorFromService = function () {
        var _this = this;
        var observable = this._httpService.getAuthor(this.paramId);
        observable.subscribe(function (data) {
            console.log("AuthorData", data);
            _this.authorname = data['quotes']['name'];
            _this.author = data['quotes'];
            console.log(_this.author);
        });
    };
    EditAuthorComponent.prototype.editAuthor = function () {
        // this.author.name = this.newauthor.name;
        var observable = this._httpService.updateAuthor(this.paramId, this.author);
        observable.subscribe(function (data) {
            console.log("Data Edit", data);
        });
        this.redirectHome();
    };
    EditAuthorComponent.prototype.redirectHome = function () {
        this._router.navigate(['/']);
    };
    EditAuthorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-author',
            template: __webpack_require__(/*! ./edit-author.component.html */ "./src/app/edit-author/edit-author.component.html"),
            styles: [__webpack_require__(/*! ./edit-author.component.css */ "./src/app/edit-author/edit-author.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditAuthorComponent);
    return EditAuthorComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getAuthors = function () {
        return this._http.get('/authors');
    };
    HttpService.prototype.getAuthor = function (id) {
        return this._http.get('/author/' + id);
    };
    HttpService.prototype.createAuthor = function (newAuthor) {
        console.log(newAuthor);
        return this._http.post('/author', newAuthor);
    };
    HttpService.prototype.createQuote = function (author, id) {
        return this._http.put('/quote/' + id, author);
    };
    HttpService.prototype.updateAuthor = function (id, author) {
        return this._http.put('/author/edit/' + id, author);
    };
    HttpService.prototype.updateVote = function (id, quoteid, quote) {
        return this._http.put("/vote/" + id + "/" + quoteid, quote);
    };
    HttpService.prototype.deleteQuote = function (id, quoteid) {
        console.log(id, quoteid);
        return this._http.delete('/quote/' + id + '/' + quoteid);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col text-center\">\n      <h1>Page Not Found</h1>\n      <button class=\"btn btn-success\" routerLink = \"/\">Home</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
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

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Javier Gonzalez\Documents\CodingDojo\Bootcamp\MEAN\Angular\Assignments\Navigation\QuoteRanks\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map