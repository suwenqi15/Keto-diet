(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Record-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Record/tab1.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Record/tab1.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Diet Record\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Record</ion-title>\n    </ion-toolbar>\n  </ion-header>\n    <ion-item>\n        <!-- Segment with anchors -->\n        <ion-segment [(ngModel)]=\"selectTabs\" color=\"primary\" >\n            <ion-segment-button value=\"tableview\">\n                <ion-icon name=\"calendar-outline\"></ion-icon>\n                <ion-label>Table View</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"chart\">\n                <ion-icon name=\"bar-chart-outline\"></ion-icon>\n                <ion-label>Chart</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"export\">\n                <ion-icon name=\"exit-outline\"></ion-icon>\n                <ion-label>Export</ion-label>\n            </ion-segment-button>\n        </ion-segment>\n    </ion-item>\n    \n    <div [hidden]=\"selectTabs != 'tableview'\">\n          <ion-grid>\n        <ion-row>\n          <ion-col class =\"label\">\n            Date\n          </ion-col>\n          <ion-col class =\"label\">\n            CHO\n          </ion-col>\n          <ion-col class =\"label\">\n            Fat\n          </ion-col>\n          \n        </ion-row>\n        <ion-row>\n          <ion-col class =\"textlabel\">\n            13/08/2020\n          </ion-col>\n          <ion-col class =\"textlabel\">\n            100\n          </ion-col>\n          <ion-col class =\"textlabel\">\n            50\n          </ion-col>\n          \n        </ion-row>\n    \n        <ion-row>\n          <ion-col class =\"textlabel\">\n            14/08/2020\n          </ion-col>\n          <ion-col class =\"textlabel\">\n            600\n          </ion-col>\n          <ion-col class =\"textlabel\">\n            50\n          </ion-col>\n          \n        </ion-row>\n       \n    \n        <ion-row>\n          <ion-col class =\"textlabel\">\n            17/08/2020\n          </ion-col>\n          <ion-col class =\"textlabel\">\n            600\n          </ion-col>\n          <ion-col class =\"textlabel\">\n            50\n          </ion-col>\n          \n        </ion-row>\n        </ion-grid>\n    </div>\n<div [hidden]=\"selectTabs != 'chart'\">\n  \n \n    <ion-card>\n      <ion-card-header>\n        Tracking Chart\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #lineCanvas></canvas>\n      </ion-card-content>\n    </ion-card>\n</div>\n <div [hidden]=\"selectTabs != 'export'\">\n \n    \n    <ion-button  (click)=\"sendEmail()\" size = \"small\" class = \"center\" color=\"primary\">Send Email </ion-button>\n  \n   \n    </div>\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/Record/tab1-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/Record/tab1-routing.module.ts ***!
  \***********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "./src/app/Record/tab1.page.ts");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "./src/app/Record/tab1.module.ts":
/*!***************************************!*\
  !*** ./src/app/Record/tab1.module.ts ***!
  \***************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "./src/app/Record/tab1.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "./src/app/Record/tab1-routing.module.ts");








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/Record/tab1.page.scss":
/*!***************************************!*\
  !*** ./src/app/Record/tab1.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1JlY29yZC90YWIxLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/Record/tab1.page.ts":
/*!*************************************!*\
  !*** ./src/app/Record/tab1.page.ts ***!
  \*************************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let Tab1Page = class Tab1Page {
    constructor() { }
};
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Record/tab1.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab1.page.scss */ "./src/app/Record/tab1.page.scss")).default]
    })
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=Record-tab1-module-es2015.js.map