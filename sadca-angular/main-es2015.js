(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"fondo\" class=\"bg-dark\" style=\"min-width: 100%; min-height: 100%;position: absolute; top: 0; left: 0;\">\r\n    <div class=\"container\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/calculo-complejo/calculo-complejo.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/calculo-complejo/calculo-complejo.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n\n    <div class=\"form-group\">\n        <label for=\"tarifa\">Tarifa</label>\n        <select name=\"tarifa\" class=\"form-control\" aria-placeholder=\"Tarifa\">\n            <option>0</option>\n            <option>1</option>\n            <option>2</option>\n        </select>\n    </div>\n\n    <div class=\"form-group\">\n        <div class=\"form-row\">\n            <div class=\"col-6\">\n                <label for=\"precio-potencia\">Precio de la Potencia</label>\n                <!-- Tipo Number(float) -->\n                <!-- Sacar tantas cajas como precio-potencia tenga la tarifa en la tabla -->\n                <div class=\"input-group mb-2\">\n                    <input type=\"number\" class=\"form-control\" id=\"precio-potencia\" name=\"precio-potencia\"\n                        placeholder=\"Precio - Potencia\">\n                    <div class=\"input-group-prepend\">\n                        <div class=\"input-group-text\">€/kW</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-6\">\n                <label for=\"precio-potencia\">Potencia contratada</label>\n                <!-- Tipo Number(float) -->\n                <!-- Sacar tantas cajas como precio-potencia tenga la tarifa en la tabla -->\n                <div class=\"input-group mb-2\">\n                    <input type=\"number\" class=\"form-control\" id=\"precio-potencia\" name=\"precio-potencia\"\n                        placeholder=\"Potencia contratada\">\n                    <div class=\"input-group-prepend\">\n                        <div class=\"input-group-text\">kW</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <div class=\"form-row\">\n            <div class=\"col-6\">\n                <label for=\"precio-energia\">Precio - Energía</label>\n                <!-- Tipo Number(float) -->\n                <!-- Sacar tantas cajas como precio-energia tenga la tarifa en la tabla -->\n                <div class=\"input-group mb-2\">\n                    <input type=\"number\" class=\"form-control\" id=\"precio-energia\" name=\"precio-energia\"\n                        placeholder=\"Precio - Energía\">\n                    <div class=\"input-group-prepend\">\n                        <div class=\"input-group-text\">€/kWh</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-6\">\n                <label for=\"precio-potencia\">Energía consumida</label>\n                <!-- Tipo Number(float) -->\n                <!-- Sacar tantas cajas como precio-potencia tenga la tarifa en la tabla -->\n                <div class=\"input-group mb-2\">\n                    <input type=\"number\" class=\"form-control\" id=\"precio-potencia\" name=\"precio-potencia\"\n                        placeholder=\"Energía consumida\">\n                    <div class=\"input-group-prepend\">\n                        <div class=\"input-group-text\">kWh</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n    <div class=\"form-group\">\n        <div class=\"form-row\">\n            <div class=\"col-6\">\n                <label for=\"precio-atr\">Precio - ATR</label>\n                <!-- Tipo Number(float) -->\n                <!-- Sacar tantas cajas como precio-ATR tenga la tarifa en la tabla -->\n                <div class=\"input-group mb-2\">\n                    <input type=\"number\" class=\"form-control\" id=\"precio-atr\" name=\"precio-energia\"\n                        placeholder=\"Precio - ATR\">\n                    <div class=\"input-group-prepend\">\n                        <div class=\"input-group-text\">€/kWh</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-6\">\n                <label for=\"precio-potencia\">ATR consumida</label>\n                <!-- Tipo Number(float) -->\n                <!-- Sacar tantas cajas como precio-potencia tenga la tarifa en la tabla -->\n                <div class=\"input-group mb-2\">\n                    <input type=\"number\" class=\"form-control\" id=\"precio-potencia\" name=\"precio-potencia\"\n                        placeholder=\"ATR consumida\">\n                    <div class=\"input-group-prepend\">\n                        <div class=\"input-group-text\">kWh</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"tipo_contrato\">Tipo Contrato</label>\n        <select name=\"tipo_contrato\" class=\"form-control\" aria-placeholder=\"Tipo Contrato\">\n            <option>Fijo</option>\n            <option>Variable</option>\n        </select>\n    </div>\n\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/calculo-imagen/calculo-imagen.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/calculo-imagen/calculo-imagen.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n\n    <div class=\"form-group\">\n        <label for=\"email\">Correo electronico</label>\n        <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\">\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"nombre\">Nombre Completo</label>\n        <input type=\"text\" class=\"form-control\" id=\"nombre\" name=\"nombre\">\n    </div>\n\n    <div class=\"form-group\">\n        ARRASTRAR Y EXAMINAR\n    </div>\n\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/calculo-simple/calculo-simple.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/calculo-simple/calculo-simple.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n\n    <div class=\"form-group\">\n        <label for=\"tarifa\">Tarifa</label>\n        <select name=\"tarifa\" class=\"form-control\" aria-placeholder=\"Tarifa\">\n            <option>0</option>\n            <option>1</option>\n            <option>2</option>\n        </select>\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"precio-potencia\">Precio - Potencia</label>\n        <!-- Tipo Number(float) -->\n        <!-- Sacar tantas cajas como precio-potencia tenga la tarifa en la tabla -->\n        <input type=\"number\" class=\"form-control\" id=\"precio-potencia\" name=\"precio-potencia\"\n            placeholder=\"Precio - Potencia\">\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"precio-energia\">Precio - Energía</label>\n        <!-- Tipo Number(float) -->\n        <!-- Sacar tantas cajas como precio-energia tenga la tarifa en la tabla -->\n        <input type=\"number\" class=\"form-control\" id=\"precio-energia\" name=\"precio-energia\"\n            placeholder=\"Precio - Energía\">\n    </div>\n\n\n    <div class=\"form-group\">\n        <label for=\"precio-atr\">Precio - ATR</label>\n        <!-- Tipo Number(float) -->\n        <!-- Sacar tantas cajas como precio-ATR tenga la tarifa en la tabla -->\n        <input type=\"number\" class=\"form-control\" id=\"precio-atr\" name=\"precio-energia\" placeholder=\"Precio - ATR\">\n    </div>\n\n\n    <div class=\"form-group\">\n        <label for=\"tipo_contrato\">Tipo Contrato</label>\n        <select name=\"tipo_contrato\" class=\"form-control\" aria-placeholder=\"Tipo Contrato\">\n            <option>Fijo</option>\n            <option>Variable</option>\n        </select>\n    </div>\n\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-12 mt-4 mb-4\">\n\n        <div class=\"row\">\n            <div class=\"card-deck\">\n                <div class=\"card text-center border-secondary\">\n                    <div class=\"card-header\">Opción Simple</div>\n                    <div class=\"card-body\">\n                        <p class=\"card-text\">Esta opción te permitirá saber si puedes o no ahorrar en tu factura\n                            de la luz de una forma sencilla y rápida, rellena los campos necesarios y calcula tu\n                            factura.</p>\n                    </div>\n                    <div class=\"card-footer\">\n                        <button (click)=\"mostrarOpcion('sencillo');scroll(abajo);\" class=\"btn btn-dark\">Mostrar</button>\n                    </div>\n                </div>\n                <div class=\"card text-center border-secondary\">\n                    <div class=\"card-header\">Opción Completa</div>\n                    <div class=\"card-body\">\n                        <p class=\"card-text\">Esta opción te permitirá saber cuanto puedes ahorrar en tu factura\n                            de la luz de una forma precisa y completa, rellena los campos necesarios y calcula\n                            tu ahorro. Por ejemplo: 200€ anuales</p>\n                    </div>\n                    <div class=\"card-footer\">\n                        <button (click)=\"mostrarOpcion('complejo');scroll(abajo);\" class=\"btn btn-dark\">Mostrar</button>\n                    </div>\n                </div>\n                <div class=\"card text-center border-secondary\">\n                    <div class=\"card-header\">Calculo con Imagen</div>\n                    <div class=\"card-body\">\n                        <p class=\"card-text\">Esta opción te permitirá saber cuanto puedes ahorrar en tu factura\n                            de la luz arrastrando una imagen o un archivo, nosotros analizaremos la factura y te\n                            contestaremos con un ahorro para tu factura. Por ejemplo: 200€ anuales</p>\n                    </div>\n                    <div class=\"card-footer\">\n                        <button (click)=\"mostrarOpcion('imagen');scroll(abajo);\" class=\"btn btn-dark\">Mostrar</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <hr class=\"bg-light\">\n        <div class=\"card\" *ngIf=\"opcion != ''\">\n            <div class=\"card-body bg-light border-dark\">\n                <p id=\"formulario\"></p>\n                <app-calculo-simple *ngIf=\"opcion == 'sencillo'\"></app-calculo-simple>\n\n                <app-calculo-complejo *ngIf=\"opcion == 'complejo'\"></app-calculo-complejo>\n\n                <app-calculo-imagen *ngIf=\"opcion == 'imagen'\"></app-calculo-imagen>\n            </div>\n        </div>\n    </div>\n</div>\n<a #abajo></a>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");




const routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'sadca-angular';
        this.minHeigth = 0;
    }
    ngOnInit() { }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html")
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_calculo_imagen_calculo_imagen_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/calculo-imagen/calculo-imagen.component */ "./src/app/components/calculo-imagen/calculo-imagen.component.ts");
/* harmony import */ var _components_calculo_simple_calculo_simple_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/calculo-simple/calculo-simple.component */ "./src/app/components/calculo-simple/calculo-simple.component.ts");
/* harmony import */ var _components_calculo_complejo_calculo_complejo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/calculo-complejo/calculo-complejo.component */ "./src/app/components/calculo-complejo/calculo-complejo.component.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _components_calculo_imagen_calculo_imagen_component__WEBPACK_IMPORTED_MODULE_6__["CalculoImagenComponent"], _components_calculo_simple_calculo_simple_component__WEBPACK_IMPORTED_MODULE_7__["CalculoSimpleComponent"], _components_calculo_complejo_calculo_complejo_component__WEBPACK_IMPORTED_MODULE_8__["CalculoComplejoComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/calculo-complejo/calculo-complejo.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/calculo-complejo/calculo-complejo.component.ts ***!
  \***************************************************************************/
/*! exports provided: CalculoComplejoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculoComplejoComponent", function() { return CalculoComplejoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CalculoComplejoComponent = class CalculoComplejoComponent {
    constructor() { }
    ngOnInit() {
    }
};
CalculoComplejoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calculo-complejo',
        template: __webpack_require__(/*! raw-loader!./calculo-complejo.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/calculo-complejo/calculo-complejo.component.html")
    })
], CalculoComplejoComponent);



/***/ }),

/***/ "./src/app/components/calculo-imagen/calculo-imagen.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/calculo-imagen/calculo-imagen.component.ts ***!
  \***********************************************************************/
/*! exports provided: CalculoImagenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculoImagenComponent", function() { return CalculoImagenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CalculoImagenComponent = class CalculoImagenComponent {
    constructor() { }
    ngOnInit() {
    }
};
CalculoImagenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calculo-imagen',
        template: __webpack_require__(/*! raw-loader!./calculo-imagen.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/calculo-imagen/calculo-imagen.component.html")
    })
], CalculoImagenComponent);



/***/ }),

/***/ "./src/app/components/calculo-simple/calculo-simple.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/calculo-simple/calculo-simple.component.ts ***!
  \***********************************************************************/
/*! exports provided: CalculoSimpleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculoSimpleComponent", function() { return CalculoSimpleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CalculoSimpleComponent = class CalculoSimpleComponent {
    constructor() { }
    ngOnInit() {
    }
};
CalculoSimpleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calculo-simple',
        template: __webpack_require__(/*! raw-loader!./calculo-simple.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/calculo-simple/calculo-simple.component.html")
    })
], CalculoSimpleComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() {
        this.opcion = '';
    }
    ngOnInit() { }
    mostrarOpcion(opcion) {
        this.opcion = opcion;
    }
    scroll(el) {
        setTimeout(() => {
            el.scrollIntoView();
        }, 100);
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html")
    })
], HomeComponent);



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! B:\Documentos\SADCA\desarrollo-angular-ahorro\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map