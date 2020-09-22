(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Profile-profile-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/Profile/profile.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Profile/profile.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n<ion-header>\n    <ion-toolbar>\n      \n      <ion-title>Profile</ion-title>\n      \n        <ion-fab-button (click)=\"updateProfile()\" size = small class = custom-icon>\n          <ion-icon name=\"create-outline\"></ion-icon>\n        </ion-fab-button>\n\n\n    </ion-toolbar>\n  </ion-header> \n\n<ion-content ng-if=\"staticMode\" >\n  \n  <ion-item lines=\"none\">\n    <ion-label>Patient ID</ion-label><ion-label>03</ion-label>\n  </ion-item>\n  \n  <ion-item lines=\"none\">\n    <ion-label>First Name</ion-label><ion-label>Mark</ion-label>\n  </ion-item>\n  \n  <ion-item lines=\"none\">\n    <ion-label>Last Name</ion-label> <ion-label>Spencer</ion-label>\n  </ion-item>\n  \n  <ion-item lines=\"none\">\n    <ion-label>Email</ion-label> <ion-label>mspencer@gmail.com</ion-label>\n  </ion-item>\n  \n  <ion-item lines=\"none\">\n    <ion-label>Birth Year</ion-label><ion-label>1996</ion-label>\n  </ion-item>\n  \n  <ion-item lines=\"none\">\n    <ion-label>CHO Benchmark</ion-label><ion-label>100</ion-label>\n  </ion-item>\n  \n  <ion-item lines=\"none\">\n    <ion-label>Fat Benchmark</ion-label><ion-label>10</ion-label>\n  </ion-item>\n\n\n  <!-- <ion-label>\n    <h5 >Date:{{data.patientid}}</h5>\n    <h5>CHO:{{data.firstname}}</h5>\n    <h5>Fat:{{data.lastname}}</h5>\n    <h5>Fat:{{data.email}}</h5>\n    <h5>Fat:{{data.birthday}}</h5>\n    <h5>Fat:{{data.chobenchmark}}</h5>\n    <h5>Fat:{{data.fatbenchmark}}</h5>\n  </ion-label> -->\n\n  </ion-content>\n\n";
      /***/
    },

    /***/
    "./src/app/Profile/profile-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/Profile/profile-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: ProfileRoutingModule */

    /***/
    function srcAppProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function () {
        return ProfileRoutingModule;
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


      var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile.page */
      "./src/app/Profile/profile.page.ts");

      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
      }];

      var ProfileRoutingModule = function ProfileRoutingModule() {
        _classCallCheck(this, ProfileRoutingModule);
      };

      ProfileRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProfileRoutingModule);
      /***/
    },

    /***/
    "./src/app/Profile/profile.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/Profile/profile.module.ts ***!
      \*******************************************/

    /*! exports provided: ProfileModule */

    /***/
    function srcAppProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileModule", function () {
        return ProfileModule;
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


      var _profile_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile.page */
      "./src/app/Profile/profile.page.ts");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "./src/app/explore-container/explore-container.module.ts");
      /* harmony import */


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./profile-routing.module */
      "./src/app/Profile/profile-routing.module.ts");

      var ProfileModule = function ProfileModule() {
        _classCallCheck(this, ProfileModule);
      };

      ProfileModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_7__["ProfileRoutingModule"]],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_5__["ProfilePage"]]
      })], ProfileModule);
      /***/
    },

    /***/
    "./src/app/Profile/profile.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/Profile/profile.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".custom-icon {\n  position: absolute;\n  right: 10px;\n  top: -6.5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztBQUFmIiwiZmlsZSI6InNyYy9hcHAvUHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20taWNvbntcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IC02LjVweDsgXG4gICAgXG5cbn1cblxuXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/Profile/profile.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/Profile/profile.page.ts ***!
      \*****************************************/

    /*! exports provided: ProfilePage */

    /***/
    function srcAppProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
        return ProfilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage() {
          _classCallCheck(this, ProfilePage);
        }

        _createClass(ProfilePage, [{
          key: "updateProfile",
          value: function updateProfile() {}
        }]);

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [];
      };

      ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./profile.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/Profile/profile.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./profile.page.scss */
        "./src/app/Profile/profile.page.scss"))["default"]]
      })], ProfilePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=Profile-profile-module-es5.js.map