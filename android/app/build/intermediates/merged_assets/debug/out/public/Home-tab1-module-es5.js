function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Home-tab1-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/tab1.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/tab1.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeTab1PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Home</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content class=\"ion-padding\">\n    <ion-segment color=\"primary\" [(ngModel)]=\"type\" (ionChange)=\"segmentChanged($event)\" scrollable>\n      <ion-segment-button value=\"breakfast\" checked>\n        <ion-label>Breakfast</ion-label>\n      \n      </ion-segment-button>\n      <ion-segment-button value=\"lunch\">\n        <ion-label>Lunch</ion-label>\n      \n      </ion-segment-button>\n      <ion-segment-button value=\"eveningmeal\">\n        <ion-label>Evening Meal</ion-label>\n   \n      </ion-segment-button>\n      <ion-segment-button value=\"snack1\">\n        <ion-label>Snack 1</ion-label>\n      \n      </ion-segment-button>\n      <ion-segment-button value=\"snack2\">\n        <ion-label>Snack 2</ion-label>\n     \n      </ion-segment-button>\n      <ion-segment-button value=\"snack3\">\n        <ion-label>Snack 3</ion-label>\n\n      </ion-segment-button>\n      <ion-segment-button value=\"others\">\n        <ion-label>Others</ion-label>\n\n      </ion-segment-button>\n      \n    </ion-segment>\n\n<ion-list>\n\n    <ion-item>\n        <ion-datetime displayFormat=\"YYYY-MM-DD\" placeholder=\"Today\"></ion-datetime>\n    </ion-item>\n\n  <ion-item-sliding>\n    <ion-item>\n        <ion-card>\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <ion-item>\n                        <ion-label color=\"primary\">Date</ion-label>\n                    </ion-item>\n                </ion-col>\n                <ion-col>\n                    <ion-item>\n                        <ion-datetime displayFormat=\"YYYY-MM-DD\" placeholder=\"Select Date\"></ion-datetime>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-item>\n                        <ion-label color=\"primary\">Food Name</ion-label>\n                    </ion-item>\n                </ion-col>\n                <ion-col>\n                    <ion-item>\n                        <ion-input placeholder=\"Enter\"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-item>\n                        <ion-label color=\"primary\">Unit</ion-label>\n                    </ion-item>\n                </ion-col>\n                <ion-col>\n                    <ion-item>\n                        <ion-input placeholder=\"Enter\"></ion-input>\n                    </ion-item>\n                </ion-col>\n                <ion-col>\n                    <ion-item>\n                        <ion-label color=\"primary\">Qty</ion-label>\n                    </ion-item>\n                </ion-col>\n                <ion-col>\n                    <ion-item>\n                        <ion-input placeholder=\"Enter\"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-item>\n                        <ion-label color=\"primary\">CHO</ion-label>\n                    </ion-item>\n                </ion-col>\n                <ion-col>\n                    <ion-item>\n                        <ion-input placeholder=\"Enter\"></ion-input>\n                    </ion-item>\n                </ion-col>\n                <ion-col>\n                    <ion-item>\n                        <ion-label color=\"primary\">Fat</ion-label>\n                    </ion-item>\n                </ion-col>\n                <ion-col>\n                    <ion-item>\n                        <ion-input placeholder=\"Enter\"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n        </ion-card>\n    </ion-item>\n    <ion-item-options side=\"end\">\n      <ion-item-option (click)=\"unread(item)\">Delete</ion-item-option>\n    </ion-item-options>\n  </ion-item-sliding>\n    <ion-button expand=\"full\">Add card</ion-button>\n</ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/Home/tab1-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/Home/tab1-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: Tab1PageRoutingModule */

  /***/
  function srcAppHomeTab1RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function () {
      return Tab1PageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tab1.page */
    "./src/app/Home/tab1.page.ts");

    var routes = [{
      path: '',
      component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"]
    }];

    var Tab1PageRoutingModule = function Tab1PageRoutingModule() {
      _classCallCheck(this, Tab1PageRoutingModule);
    };

    Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Tab1PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Home/tab1.module.ts":
  /*!*************************************!*\
    !*** ./src/app/Home/tab1.module.ts ***!
    \*************************************/

  /*! exports provided: Tab1PageModule */

  /***/
  function srcAppHomeTab1ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
      return Tab1PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tab1.page */
    "./src/app/Home/tab1.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");
    /* harmony import */


    var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./tab1-routing.module */
    "./src/app/Home/tab1-routing.module.ts");

    var Tab1PageModule = function Tab1PageModule() {
      _classCallCheck(this, Tab1PageModule);
    };

    Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]],
      declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })], Tab1PageModule);
    /***/
  },

  /***/
  "./src/app/Home/tab1.page.scss":
  /*!*************************************!*\
    !*** ./src/app/Home/tab1.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeTab1PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0hvbWUvdGFiMS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/Home/tab1.page.ts":
  /*!***********************************!*\
    !*** ./src/app/Home/tab1.page.ts ***!
    \***********************************/

  /*! exports provided: Tab1Page */

  /***/
  function srcAppHomeTab1PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1Page", function () {
      return Tab1Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Tab1Page = function Tab1Page() {
      _classCallCheck(this, Tab1Page);
    };

    Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab1',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tab1.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/tab1.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tab1.page.scss */
      "./src/app/Home/tab1.page.scss"))["default"]]
    })], Tab1Page);
    /***/
  }
}]);
//# sourceMappingURL=Home-tab1-module-es5.js.map