(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Information-information-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Information/information.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Information/information.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title> Information</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-text class = 'my-class'>\n   \n    <h1>FAQs </h1> \n\n  </ion-text>\n  \n  <ion-text color=\"dark\">\n    <p>Why we concern only concern about carbohydrate      \n      and fat?\n      The ketogenic diet is a very low-carb, high-fat   \n      diet that shares many similarities with the Atkins and \n      low-carb diets. It involves drastically reducing  \n      carbohydrate intake and replacing it with fat.\n    </p>\n  </ion-text>\n\n  <ion-text color=\"dark\">\n    <p>What if I purchase items from stores are not in the   \n      dropdown list of the food choice?\n      Please add the new type of food with the plus  \n      sign in the diet tracking page\n    </p>\n  </ion-text>\n\n  <ion-text color=\"dark\">\n    <p>How to perform manual conversion on the food not   \n      part of the dropdown list?\n      Please first convert your food to 1 gram, and \n      then value how 1 gram of this type of food would             \n      generate the amount of carbohydrate and fat in terms  \n      of grams based on proportion. For instance, if 10 \n      grams of such food generates 5.2 grams of \n      carbohydrate. Then 1 gram of the food would generate \n      0.52 grams of carbohydrate. To determine the  \n      proportion, you need to divide 10 by the total food per  \n      10g. 10g ÷ total food per 10g = 1 g food choice. Then \n      total carbohydrate per 5.2g ÷ total food per 10g = 0.52 \n      g. Following such method would get you the desired \n      result.      \n    </p>\n  </ion-text>\n  \n  \n  <ion-text class = 'my-class'>\n    <h2 > GOSH Copyright \n    </h2>\n  </ion-text>\n  \n  <p>\n  All rights reserved. No part of this application may be   \n reproduced or used in any manner without written   \n permission. \n  </p>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/Information/information-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/Information/information-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: InformationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationPageRoutingModule", function() { return InformationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _information_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./information.page */ "./src/app/Information/information.page.ts");




const routes = [
    {
        path: '',
        component: _information_page__WEBPACK_IMPORTED_MODULE_3__["InformationPage"],
    }
];
let InformationPageRoutingModule = class InformationPageRoutingModule {
};
InformationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], InformationPageRoutingModule);



/***/ }),

/***/ "./src/app/Information/information.module.ts":
/*!***************************************************!*\
  !*** ./src/app/Information/information.module.ts ***!
  \***************************************************/
/*! exports provided: InformationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationPageModule", function() { return InformationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _information_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./information.page */ "./src/app/Information/information.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _information_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./information-routing.module */ "./src/app/Information/information-routing.module.ts");








let InformationPageModule = class InformationPageModule {
};
InformationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _information_routing_module__WEBPACK_IMPORTED_MODULE_7__["InformationPageRoutingModule"]
        ],
        declarations: [_information_page__WEBPACK_IMPORTED_MODULE_5__["InformationPage"]]
    })
], InformationPageModule);



/***/ }),

/***/ "./src/app/Information/information.page.scss":
/*!***************************************************!*\
  !*** ./src/app/Information/information.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-bottom: 15px;\n  --padding-end: 15px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.my-class {\n  color: #2ea1d7;\n}\n\n.test-class {\n  font-size: 15px !important;\n}\n\nh1 {\n  font-size: 1.3rem;\n}\n\nh2 {\n  font-size: 1.3rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSW5mb3JtYXRpb24vaW5mb3JtYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQWlCO0VBQ2pCLG1CQUFjO0VBQ2QscUJBQWdCO0VBQ2hCLG1CQUFjO0FBQ2xCOztBQUVFO0VBQ0UsY0FFRjtBQURGOztBQUdFO0VBQWEsMEJBQTBCO0FBQ3pDOztBQUNFO0VBQ0EsaUJBQWlCO0FBRW5COztBQUNFO0VBQ0UsaUJBQWlCO0FBRXJCIiwiZmlsZSI6InNyYy9hcHAvSW5mb3JtYXRpb24vaW5mb3JtYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMTVweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgfVxuXG4gIC5teS1jbGFzcyB7XG4gICAgY29sb3I6ICAjMmVhMWQ3XG5cbiAgfVxuXG4gIC50ZXN0LWNsYXNzIHtmb250LXNpemU6IDE1cHggIWltcG9ydGFudDt9XG5cbiAgaDF7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB9XG5cbiAgaDJ7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgfVxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/Information/information.page.ts":
/*!*************************************************!*\
  !*** ./src/app/Information/information.page.ts ***!
  \*************************************************/
/*! exports provided: InformationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationPage", function() { return InformationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let InformationPage = class InformationPage {
    constructor() { }
};
InformationPage.ctorParameters = () => [];
InformationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-information',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./information.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Information/information.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./information.page.scss */ "./src/app/Information/information.page.scss")).default]
    })
], InformationPage);



/***/ })

}]);
//# sourceMappingURL=Information-information-module-es2015.js.map