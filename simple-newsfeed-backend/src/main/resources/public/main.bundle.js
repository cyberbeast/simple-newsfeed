webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fav-icon {\n  padding: 0 14px;\n}\n\n.spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <span>Simple Newsfeed App</span>\n    <span class=\"spacer\"></span>\n    <mat-icon class=\"fav-icon\">favorite</mat-icon>\n  </mat-toolbar-row>\n</mat-toolbar>\n<router-outlet>\n</router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_divider__ = __webpack_require__("../../../material/esm5/divider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_list__ = __webpack_require__("../../../material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngrx_store_devtools__ = __webpack_require__("../../../../@ngrx/store-devtools/@ngrx/store-devtools.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__store__ = __webpack_require__("../../../../../src/app/store/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__newsfeed_newsfeed_component__ = __webpack_require__("../../../../../src/app/newsfeed/newsfeed.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





 // Angular CLI environemnt
// Material imports









// ngrx main imports



// service imports


var appRoutes = [
    { path: '', redirectTo: '/newsfeed', pathMatch: 'full' },
    { path: 'newsfeed', component: __WEBPACK_IMPORTED_MODULE_19__newsfeed_newsfeed_component__["a" /* NewsfeedComponent */] },
    { path: '**', redirectTo: '/newsfeed' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_19__newsfeed_newsfeed_component__["a" /* NewsfeedComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                ),
                __WEBPACK_IMPORTED_MODULE_6__angular_material_input__["a" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_divider__["a" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_list__["a" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_15__ngrx_store__["j" /* StoreModule */].forRoot({}),
                __WEBPACK_IMPORTED_MODULE_15__ngrx_store__["j" /* StoreModule */].forFeature('app', __WEBPACK_IMPORTED_MODULE_17__store__["e" /* reducers */]),
                __WEBPACK_IMPORTED_MODULE_16__ngrx_effects__["c" /* EffectsModule */].forRoot([]),
                __WEBPACK_IMPORTED_MODULE_16__ngrx_effects__["c" /* EffectsModule */].forFeature(__WEBPACK_IMPORTED_MODULE_17__store__["c" /* effects */]),
                // Instrumentation must be imported after importing StoreModule (config is optional)
                __WEBPACK_IMPORTED_MODULE_13__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument({
                    maxAge: 25,
                    logOnly: __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].production // Restrict extension to log-only mode
                }),
                __WEBPACK_IMPORTED_MODULE_12__angular_flex_layout__["a" /* FlexLayoutModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_18__services__["b" /* services */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/newsfeed/newsfeed.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/newsfeed/newsfeed.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-list>\n  <div *ngFor=\"let item of (newsfeed$ | async)\">\n    <mat-list-item>\n      <p mat-line>{{item.text}}</p>\n      <p mat-line style=\"font-size:x-small; color:rgba(0, 0, 0, 0.54)\"> {{item.publicationDate}} </p>\n    </mat-list-item>\n    <mat-divider></mat-divider>\n  </div>\n</mat-list>\n<!-- <pre>\n  {{newsfeed$ | async | json}}\n</pre> -->\n<div fxLayout=\"row\" fxFlexFill>\n  <div fxFlex fxFlexOrder=\"2\" fxFlex.xs=\"55\" fxFlexAlign=\"center\">\n    <button mat-raised-button (click)=\"onCreate(text.value)\">Create</button>\n  </div>\n  <div fxFlex style=\"margin:2%\">\n    <mat-form-field style=\"width: 100%;\">\n      <textarea matInput #text placeholder=\"Text\"></textarea>\n    </mat-form-field>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/newsfeed/newsfeed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsfeedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__("../../../../../src/app/store/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsfeedComponent = /** @class */ (function () {
    function NewsfeedComponent(store) {
        this.store = store;
        this.newsfeed$ = store.select(__WEBPACK_IMPORTED_MODULE_2__store__["d" /* getCurrentNewsfeed */]);
    }
    NewsfeedComponent.prototype.onCreate = function (text) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__store__["a" /* CreateNewsItem */]({
            text: text,
            publicationDate: new Date().toISOString()
        }));
    };
    NewsfeedComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__store__["b" /* FetchNewsfeed */]());
    };
    NewsfeedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-newsfeed',
            template: __webpack_require__("../../../../../src/app/newsfeed/newsfeed.component.html"),
            styles: [__webpack_require__("../../../../../src/app/newsfeed/newsfeed.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]])
    ], NewsfeedComponent);
    return NewsfeedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return services; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__newsfeed_service__ = __webpack_require__("../../../../../src/app/services/newsfeed.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__newsfeed_service__["a"]; });

var services = [__WEBPACK_IMPORTED_MODULE_0__newsfeed_service__["a" /* NewsfeedService */]];



/***/ }),

/***/ "../../../../../src/app/services/newsfeed.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsfeedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewsfeedService = /** @class */ (function () {
    function NewsfeedService(http) {
        this.http = http;
    }
    NewsfeedService.prototype.fetchNewsfeed = function () {
        return this.http
            .get('/newsItems')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json()); }));
    };
    NewsfeedService.prototype.createNewsfeedItem = function (newsfeedItem) {
        return this.http
            .post('/newsItems', newsfeedItem)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json()); }));
    };
    NewsfeedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], NewsfeedService);
    return NewsfeedService;
}());



/***/ }),

/***/ "../../../../../src/app/store/actions/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__newsfeedItem_actions__ = __webpack_require__("../../../../../src/app/store/actions/newsfeedItem.actions.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__newsfeedItem_actions__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__newsfeedItem_actions__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__newsfeedItem_actions__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__newsfeedItem_actions__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__newsfeedItem_actions__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__newsfeedItem_actions__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__newsfeedItem_actions__["j"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__newsfeedItem_actions__["k"]; });



/***/ }),

/***/ "../../../../../src/app/store/actions/newsfeedItem.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FETCH_NEWSFEED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return FETCH_NEWSFEED_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FETCH_NEWSFEED_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return FetchNewsfeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return FetchNewsfeedSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return FetchNewsfeedFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CREATE_NEWS_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CREATE_NEWS_ITEM_SUCCESS; });
/* unused harmony export CREATE_NEWS_ITEM_FAIL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CreateNewsItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CreateNewsItemSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CreateNewsItemFail; });
var FETCH_NEWSFEED = '[Newsfeed Item] Fetch All';
var FETCH_NEWSFEED_SUCCESS = '[Newsfeed Item] Fetch All - Success';
var FETCH_NEWSFEED_FAIL = '[Newsfeed Item] Fetch All - Fail';
var FetchNewsfeed = /** @class */ (function () {
    function FetchNewsfeed() {
        this.type = FETCH_NEWSFEED;
    }
    return FetchNewsfeed;
}());

var FetchNewsfeedSuccess = /** @class */ (function () {
    function FetchNewsfeedSuccess(payload) {
        this.payload = payload;
        this.type = FETCH_NEWSFEED_SUCCESS;
    }
    return FetchNewsfeedSuccess;
}());

var FetchNewsfeedFail = /** @class */ (function () {
    function FetchNewsfeedFail(payload) {
        this.payload = payload;
        this.type = FETCH_NEWSFEED_FAIL;
    }
    return FetchNewsfeedFail;
}());

var CREATE_NEWS_ITEM = '[Newsfeed Item] Create';
var CREATE_NEWS_ITEM_SUCCESS = '[Newsfeed Item] Create - Success';
var CREATE_NEWS_ITEM_FAIL = '[Newsfeed Item] Create - Fail';
var CreateNewsItem = /** @class */ (function () {
    function CreateNewsItem(payload) {
        this.payload = payload;
        this.type = CREATE_NEWS_ITEM;
    }
    return CreateNewsItem;
}());

var CreateNewsItemSuccess = /** @class */ (function () {
    function CreateNewsItemSuccess(payload) {
        this.payload = payload;
        this.type = CREATE_NEWS_ITEM_SUCCESS;
    }
    return CreateNewsItemSuccess;
}());

var CreateNewsItemFail = /** @class */ (function () {
    function CreateNewsItemFail(payload) {
        this.payload = payload;
        this.type = CREATE_NEWS_ITEM;
    }
    return CreateNewsItemFail;
}());



/***/ }),

/***/ "../../../../../src/app/store/effects/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return effects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__newsfeed_effects__ = __webpack_require__("../../../../../src/app/store/effects/newsfeed.effects.ts");
/* unused harmony namespace reexport */

var effects = [__WEBPACK_IMPORTED_MODULE_0__newsfeed_effects__["a" /* NewsfeedEffects */]];



/***/ }),

/***/ "../../../../../src/app/store/effects/newsfeed.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsfeedEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions___ = __webpack_require__("../../../../../src/app/store/actions/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewsfeedEffects = /** @class */ (function () {
    function NewsfeedEffects(actions$, newsfeedService) {
        var _this = this;
        this.actions$ = actions$;
        this.newsfeedService = newsfeedService;
        this.fetchNewsfeed$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_4__actions___["e" /* FETCH_NEWSFEED */]).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["d" /* switchMap */])(function (action) {
            return _this.newsfeedService.fetchNewsfeed().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* map */])(function (response) {
                if (response.status === 'SUCCESS')
                    return new __WEBPACK_IMPORTED_MODULE_4__actions___["h" /* FetchNewsfeedSuccess */](response.data);
                return new __WEBPACK_IMPORTED_MODULE_4__actions___["g" /* FetchNewsfeedFail */](response.status);
            }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_4__actions___["g" /* FetchNewsfeedFail */](error)); }));
        }));
        this.createNewsfeedItem$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_4__actions___["a" /* CREATE_NEWS_ITEM */]).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* map */])(function (action) { return action.payload; }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["d" /* switchMap */])(function (newsFeedItem) {
            return _this.newsfeedService.createNewsfeedItem(newsFeedItem).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* map */])(function (response) {
                if (response.status === 'SUCCESS')
                    return new __WEBPACK_IMPORTED_MODULE_4__actions___["d" /* CreateNewsItemSuccess */](response.data);
                return new __WEBPACK_IMPORTED_MODULE_4__actions___["c" /* CreateNewsItemFail */](response.status);
            }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_4__actions___["c" /* CreateNewsItemFail */](error)); }));
        }));
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], NewsfeedEffects.prototype, "fetchNewsfeed$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], NewsfeedEffects.prototype, "createNewsfeedItem$", void 0);
    NewsfeedEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */], __WEBPACK_IMPORTED_MODULE_5__services__["a" /* NewsfeedService */]])
    ], NewsfeedEffects);
    return NewsfeedEffects;
}());



/***/ }),

/***/ "../../../../../src/app/store/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reducers__ = __webpack_require__("../../../../../src/app/store/reducers/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__reducers__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__reducers__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__("../../../../../src/app/store/actions/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__actions__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__actions__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__effects__ = __webpack_require__("../../../../../src/app/store/effects/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__effects__["a"]; });





/***/ }),

/***/ "../../../../../src/app/store/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducers; });
/* unused harmony export getAppState */
/* unused harmony export getCurrentNewsfeedState */
/* unused harmony export getCurrentNewsfeedEntities */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCurrentNewsfeed; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__newsfeedItem_reducer__ = __webpack_require__("../../../../../src/app/store/reducers/newsfeedItem.reducer.ts");


var reducers = {
    currentNewsfeed: __WEBPACK_IMPORTED_MODULE_1__newsfeedItem_reducer__["b" /* reducer */]
};
var getAppState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["n" /* createFeatureSelector */])('app');
// newsfeed state
var getCurrentNewsfeedState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getAppState, function (state) { return state.currentNewsfeed; });
// get current newsfeed entities
var getCurrentNewsfeedEntities = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getCurrentNewsfeedState, __WEBPACK_IMPORTED_MODULE_1__newsfeedItem_reducer__["a" /* getCurrentNewsfeedEntities */]);
//
var getCurrentNewsfeed = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getCurrentNewsfeedEntities, function (entities) {
    return Object.keys(entities)
        .map(function (id) { return entities[id]; })
        .sort(function (a, b) {
        return (-1 *
            (new Date(a.publicationDate).getTime() -
                new Date(b.publicationDate).getTime()));
    });
});


/***/ }),

/***/ "../../../../../src/app/store/reducers/newsfeedItem.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["b"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCurrentNewsfeedEntities; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_newsfeedItem_actions__ = __webpack_require__("../../../../../src/app/store/actions/newsfeedItem.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    entities: {}
    // currentNewsfeed: []
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_newsfeedItem_actions__["f" /* FETCH_NEWSFEED */]: {
            return __assign({}, state);
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_newsfeedItem_actions__["h" /* FETCH_NEWSFEED_SUCCESS */]: {
            var data = action.payload;
            var entities = data.reduce(function (entities, newsfeedItem) {
                return __assign({}, entities, (_a = {}, _a[newsfeedItem.objectId] = newsfeedItem, _a));
                var _a;
            }, __assign({}, state.entities));
            return __assign({}, state, { entities: entities });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_newsfeedItem_actions__["g" /* FETCH_NEWSFEED_FAIL */]: {
            return __assign({}, state);
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_newsfeedItem_actions__["b" /* CREATE_NEWS_ITEM_SUCCESS */]: {
            var newsFeedItem = action.payload;
            var entities = __assign({}, state.entities, (_a = {}, _a[newsFeedItem.objectId] = newsFeedItem, _a));
            return __assign({}, state, { entities: entities });
        }
    }
    return state;
    var _a;
}
var getCurrentNewsfeedEntities = function (state) {
    return state.entities;
};


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])()
    .bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map