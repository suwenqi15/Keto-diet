(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Home-home-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/home.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/home.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Diet Tracking\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-item lines=\"none\">\n    <ion-datetime  [(ngModel)]=\"myDate\" class=time displayFormat=\"DD-MM-YYYY\" placeholderdate=\"Today\"></ion-datetime>\n\n</ion-item>\n  <ion-segment color=\"primary\" [(ngModel)]=\"type\" (ionChange)=\"segmentChanged($event)\" scrollable>\n    <ion-segment-button value=\"breakfast\" checked>\n        <ion-label>Breakfast</ion-label>\n      \n      </ion-segment-button>\n      <ion-segment-button value=\"lunch\">\n        <ion-label>Lunch</ion-label>\n      \n      </ion-segment-button>\n      <ion-segment-button value=\"eveningmeal\">\n        <ion-label>Evening Meal</ion-label>\n   \n      </ion-segment-button>\n      <ion-segment-button value=\"snack1\">\n        <ion-label>Snack 1</ion-label>\n      \n      </ion-segment-button>\n      <ion-segment-button value=\"snack2\">\n        <ion-label>Snack 2</ion-label>\n     \n      </ion-segment-button>\n      <ion-segment-button value=\"snack3\">\n        <ion-label>Snack 3</ion-label>\n\n      </ion-segment-button>\n      <ion-segment-button value=\"others\">\n        <ion-label>Others</ion-label>\n\n      </ion-segment-button>\n      \n    </ion-segment>\n\n\n\n\n    \n  <!-- section of Breakfast start -->\n <div [hidden]=\"type !='breakfast'\">\n\n\n\n<!-- <app-card> </app-card> -->\n\n\n  <ion-list>\n    \n\n    <!-- loop and print out what has already in the list -->\n    <ion-card *ngFor=\"let att of anArrayBreakfast; let i=index\" >  \n      <ion-item-sliding >\n        <ion-item-options  side=\"end\">\n        <ion-button color = \"danger\" (click)=\"removeItemBreakfast(i)\"><ion-icon name=\"trash\"></ion-icon> Delete</ion-button>\n      </ion-item-options>\n        <ion-item  lines=\"none\">\n        <ion-label class=\"label\"> Food Name</ion-label>\n        <ion-input  formControlName = \"food_name\" type=\"text\" required class = \"right\" placeholder={{att.food_name}} ></ion-input> \n\n      </ion-item>\n    \n      <ion-item lines=\"none\">\n        <ion-label class=\"label\">Unit</ion-label>\n        <!-- <ion-select value=\"gram\" okText=\"Okay\" cancelText=\"Dismiss\">\n          <ion-select-option formControlName = \"unit\" type=\"text\" required class = \"left1\" >Gram</ion-select-option>\n          <ion-select-option formControlName = \"unit\" type=\"text\" required class = \"left1\">Tbsl</ion-select-option>\n        </ion-select> -->\n        <ion-input  formControlName = \"unit\" type=\"text\" required class = \"left1\" placeholder=\"{{att.unit}}\" ></ion-input>\n        <ion-label class=\"unique\">Qty</ion-label>\n        <ion-input  formControlName = \"qty\"  type=\"text\" required class = \"right\" placeholder=\"{{att.qty}}\"></ion-input>\n       \n      </ion-item>\n      <ion-item lines=\"none\" >\n        \n        <ion-label class=\"label\">CHO</ion-label>\n        <ion-input formControlName = \"cho\"  type=\"text\" required class = \"left2\" placeholder=\"{{att.cho}}\"></ion-input>\n        <ion-label class=\"label\">Fat</ion-label>\n        <ion-input formControlName = \"fat\" type=\"text\" required class = \"right\" placeholder=\"{{att.fat}}\"></ion-input>\n      </ion-item>\n    </ion-item-sliding>\n  \n    </ion-card>\n</ion-list>\n\n  \n<!-- take in what user eat -->\n<ion-list>\n  <form [formGroup]=\"foodCardForm\" (ngSubmit)=\"onSaveBreakfast()\">\n  <ion-card >  \n    <ion-item-sliding >\n      <ion-item-options  side=\"end\">\n    </ion-item-options>\n\n\n    \n    \n \n        <ion-searchbar (ionInput) = \"filterJsonData($event)\"></ion-searchbar> \n\n\n        <!-- <ion-item>\n          <ion-label>Users</ion-label>\n          <ion-select [compareWith]=\"compareWith\">\n            <ion-select-option *ngFor=\"let user of jsonData\">{{user.first + ' ' + user.last}}</ion-select-option>\n          </ion-select>\n        </ion-item> -->\n\n\n      \n      \n        <!-- <ion-select [(ngModel)]=\"food\" >\n          <ion-select-option *ngFor=\"let food of jsonData\" [value]=\"food\"></ion-select-option>\n        </ion-select> -->\n\n      \n       \n         <ion-list >\n      <ion-item (click) = \"selectVal(object.name)\" *ngFor = \"let object of jsonData\"> \n        {{object.name}}\n      </ion-item>\n    </ion-list>  \n\n    <ion-item lines=\"none\">\n      <ion-label class=\"label\"> Food Name</ion-label>\n \n      <ion-input  formControlName = \"food_name\" type=\"text\" required class = \"right\" placeholder=\" Enter\" ></ion-input>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label class=\"label\">Unit</ion-label>\n      <ion-input  formControlName = \"unit\" type=\"text\" required class = \"left1\" placeholder=\"Enter\" ></ion-input>\n\n      <ion-label class=\"unique\">Qty</ion-label>\n      <ion-input  formControlName = \"qty\"  type=\"text\" required class = \"right\" placeholder=\"Enter\" ></ion-input>\n    </ion-item>\n\n\n    <ion-item lines=\"none\" >\n      \n      <ion-label class=\"label\">CHO</ion-label>\n      <ion-input #choiput value = \"custom\" formControlName = \"cho\"  type=\"text\" required class = \"left2\" placeholder=\"Enter\"></ion-input>\n      <ion-label class=\"label\">Fat</ion-label>\n      <ion-input id = \"fatinput\" formControlName = \"fat\" type=\"text\" required class = \"right\" placeholder=\"Enter\"></ion-input>\n    </ion-item>\n\n  </ion-item-sliding>\n\n  </ion-card>\n  \n  \n</form >\n\n</ion-list>\n\n\n<ion-button  (click)=\"AddBreakfast()\" size = \"small\" class = \"center\" color=\"primary\">Add Food</ion-button>\n<ion-button  (click)=\"storeToDatabase()\" size = \"small\" class = \"center\" color=\"primary\">Store to Database</ion-button>\n\n\n<ion-list>\n  <ion-item>\n    <ion-label class = \"label\">Breakfast CHO Sum</ion-label>\n    <ion-input  class = \"right\" placeholder={{curChoBreakfast}} ></ion-input>\n  </ion-item>\n</ion-list>\n  <ion-list>\n    <ion-item>\n      <ion-label class = \"label\">Breakfast Fat Sum</ion-label>\n      <ion-input   class = \"right\" placeholder={{curFatBreakfast}}></ion-input>\n    </ion-item>\n    </ion-list>  \n<ion-list>\n  <ion-item>\n    <ion-label class = \"label\">Daily CHO Sum</ion-label>\n    <ion-input  class = \"right\" placeholder={{curChoTotal}} ></ion-input>\n  </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-item>\n      <ion-label class = \"label\">Daily Fat Sum</ion-label>\n      <ion-input  class = \"right\" placeholder={{curFatTotal}} ></ion-input>\n    </ion-item>\n    </ion-list>\n  </div>\n\n\n\n<!-- \n  <ion-card>\n    <ion-item lines=\"inset\" *ngFor=\"let data of Data\">\n      <ion-label>\n        <h5 >Date:{{myDate}}</h5>\n        <h5>CHO:{{data.cho}}</h5>\n        <h5>Fat:{{data.fat}}</h5>\n      </ion-label>\n      <div class=\"item-note\" item-end>     \n        <ion-icon name=\"trash\" style=\"zoom:2.0\" (click)=\"deleteFood(data.id)\"></ion-icon>\n      </div>\n    </ion-item>\n  </ion-card>   -->\n\n\n\n  <!-- section of Breakfast end -->\n\n\n\n\n\n\n  \n  <!-- section of lunch start -->\n  <div [hidden]=\"type !='lunch'\">\n\n\n    <!-- <app-card> </app-card> -->\n    \n    \n      <ion-list>\n       \n        <ion-card *ngFor=\"let att of anArrayLunch; let i=index\" >  \n          <ion-item-sliding >\n            <ion-item-options  side=\"end\">\n            <ion-button color = \"danger\" (click)=\"removeItemLunch(i)\"><ion-icon name=\"trash\"></ion-icon> Delete</ion-button>\n          </ion-item-options>\n          \n            <ion-item  lines=\"none\">\n            <ion-label class=\"label\"> Food Name</ion-label>\n            <ion-input  formControlName = \"food_name\" type=\"text\" required class = \"right\" placeholder={{att.food_name}} ></ion-input> \n    \n          </ion-item>\n        \n          <ion-item lines=\"none\">\n            <ion-label class=\"label\">Unit</ion-label>\n            <ion-input  formControlName = \"unit\" type=\"text\" required class = \"left1\" placeholder=\"{{att.unit}}\" ></ion-input>\n            \n            <ion-label class=\"unique\">Qty</ion-label>\n            <ion-input  formControlName = \"qty\"  type=\"text\" required class = \"right\" placeholder=\"{{att.qty}}\"></ion-input>\n           \n          </ion-item>\n          <ion-item lines=\"none\" >\n            \n            <ion-label class=\"label\">CHO</ion-label>\n            <ion-input formControlName = \"cho\"  type=\"text\" required class = \"left2\" placeholder=\"{{att.cho}}\"></ion-input>\n            <ion-label class=\"label\">Fat</ion-label>\n            <ion-input formControlName = \"fat\" type=\"text\" required class = \"right\" placeholder=\"{{att.fat}}\"></ion-input>\n          </ion-item>\n        </ion-item-sliding>\n      \n        </ion-card>\n  \n    </ion-list>\n    \n      \n    <ion-list>\n      <form [formGroup]=\"foodCardForm\" (ngSubmit)=\"onSaveLunch()\">\n        <ion-card >  \n          <ion-item-sliding >\n            <ion-item-options  side=\"end\">\n          </ion-item-options>\n            <ion-item  lines=\"none\">\n            <ion-label class=\"label\"> Food Name</ion-label>\n       \n            <ion-input  formControlName = \"food_name\" type=\"text\" required class = \"right\" placeholder=\" Enter\" ></ion-input>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-label class=\"label\">Unit</ion-label>\n            <ion-input  formControlName = \"unit\" type=\"text\" required class = \"left1\" placeholder=\"Enter\" ></ion-input>\n      \n            <ion-label class=\"unique\">Qty</ion-label>\n            <ion-input  formControlName = \"qty\"  type=\"text\" required class = \"right\" placeholder=\"Enter\" ></ion-input>\n          </ion-item>\n      \n      \n          <ion-item lines=\"none\" >\n            \n            <ion-label class=\"label\">CHO</ion-label>\n            <ion-input formControlName = \"cho\"  type=\"text\" required class = \"left2\" placeholder=\"Enter\"></ion-input>\n            <ion-label class=\"label\">Fat</ion-label>\n            <ion-input formControlName = \"fat\" type=\"text\" required class = \"right\" placeholder=\"Enter\"></ion-input>\n          </ion-item>\n      \n        </ion-item-sliding>\n      \n        </ion-card>\n    </form >\n    \n    </ion-list>\n    \n    \n    <ion-button  (click)=\"AddLunch()\" size = \"small\" class = \"center\" color=\"primary\">Add Food</ion-button>\n    <ion-button  (click)=\"storeToDatabase()\" type=\"submit\" size = \"small\" class = \"center\" color=\"primary\">Store to Database</ion-button>\n    \n    \n\n    <ion-list>\n      <ion-item>\n        <ion-label class = \"label\">Lunch CHO Sum</ion-label>\n        <ion-input  class = \"right\" placeholder={{curChoLunch}} ></ion-input>\n      </ion-item>\n    </ion-list>\n      <ion-list>\n        <ion-item>\n          <ion-label class = \"label\">Lunch Fat Sum</ion-label>\n          <ion-input   class = \"right\" placeholder={{curFatLunch}}></ion-input>\n        </ion-item>\n        </ion-list>  \n    <ion-list>\n      <ion-item>\n        <ion-label class = \"label\">Daily CHO Sum</ion-label>\n        <ion-input  class = \"right\" placeholder={{curChoTotal}} ></ion-input>\n      </ion-item>\n      </ion-list>\n      <ion-list>\n        <ion-item>\n          <ion-label class = \"label\">Daily Fat Sum</ion-label>\n          <ion-input  class = \"right\" placeholder={{curFatTotal}} ></ion-input>\n        </ion-item>\n        </ion-list>\n      </div>\n    \n  \n    \n    \n      <!-- section of lunch end -->\n    \n\n\n <!-- section of dinner start -->\n <div [hidden]=\"type !='eveningmeal'\">\n\n\n  <!-- <app-card> </app-card> -->\n  \n  \n    <ion-list>\n\n      <ion-card *ngFor=\"let att of anArrayDinner; let i=index\" >  \n        <ion-item-sliding >\n          <ion-item-options  side=\"end\">\n          <ion-button color = \"danger\" (click)=\"removeItemDinner(i)\"><ion-icon name=\"trash\"></ion-icon> Delete</ion-button>\n        </ion-item-options>\n    \n          <ion-item  lines=\"none\">\n          <ion-label class=\"label\"> Food Name</ion-label>\n          <ion-input  formControlName = \"food_name\" type=\"text\" required class = \"right\" placeholder={{att.food_name}} ></ion-input> \n  \n        </ion-item>\n      \n        <ion-item lines=\"none\">\n          <ion-label class=\"label\">Unit</ion-label>\n          <ion-input  formControlName = \"unit\" type=\"text\" required class = \"left1\" placeholder=\"{{att.unit}}\" ></ion-input>\n          \n          <ion-label class=\"unique\">Qty</ion-label>\n          <ion-input  formControlName = \"qty\"  type=\"text\" required class = \"right\" placeholder=\"{{att.qty}}\"></ion-input>\n         \n        </ion-item>\n        <ion-item lines=\"none\" >\n          \n          <ion-label class=\"label\">CHO</ion-label>\n          <ion-input formControlName = \"cho\"  type=\"text\" required class = \"left2\" placeholder=\"{{att.cho}}\"></ion-input>\n          <ion-label class=\"label\">Fat</ion-label>\n          <ion-input formControlName = \"fat\" type=\"text\" required class = \"right\" placeholder=\"{{att.fat}}\"></ion-input>\n        </ion-item>\n      </ion-item-sliding>\n    \n      </ion-card>\n  \n  </ion-list>\n  \n    \n  <ion-list>\n    <form [formGroup]=\"foodCardForm\" (ngSubmit)=\"onSaveDinner()\">\n      <ion-card >  \n        <ion-item-sliding >\n          <ion-item-options  side=\"end\">\n        </ion-item-options>\n          <ion-item  lines=\"none\">\n          <ion-label class=\"label\"> Food Name</ion-label>\n     \n          <ion-input  formControlName = \"food_name\" type=\"text\" required class = \"right\" placeholder=\" Enter\" ></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-label class=\"label\">Unit</ion-label>\n          <ion-input  formControlName = \"unit\" type=\"text\" required class = \"left1\" placeholder=\"Enter\" ></ion-input>\n    \n          <ion-label class=\"unique\">Qty</ion-label>\n          <ion-input  formControlName = \"qty\"  type=\"text\" required class = \"right\" placeholder=\"Enter\" ></ion-input>\n        </ion-item>\n    \n    \n        <ion-item lines=\"none\" >\n          \n          <ion-label class=\"label\">CHO</ion-label>\n          <ion-input formControlName = \"cho\"  type=\"text\" required class = \"left2\" placeholder=\"Enter\"></ion-input>\n          <ion-label class=\"label\">Fat</ion-label>\n          <ion-input formControlName = \"fat\" type=\"text\" required class = \"right\" placeholder=\"Enter\"></ion-input>\n        </ion-item>\n    \n      </ion-item-sliding>\n    \n      </ion-card>\n    \n    \n  </form >\n  \n  </ion-list>\n  \n  \n  <ion-button  (click)=\"AddDinner()\" size = \"small\" class = \"center\" color=\"primary\">Add Food</ion-button>\n  <ion-button  (click)=\"storeToDatabase()\" size = \"small\" class = \"center\" color=\"primary\">Store to Database</ion-button>\n  \n  \n  <ion-list>\n    <ion-item>\n      <ion-label class = \"label\">Dinner CHO Sum</ion-label>\n      <ion-input  class = \"right\" placeholder={{curChoDinner}} ></ion-input>\n    </ion-item>\n  </ion-list>\n    <ion-list>\n      <ion-item>\n        <ion-label class = \"label\">Dinner Fat Sum</ion-label>\n        <ion-input   class = \"right\" placeholder={{curFatDinner}}></ion-input>\n      </ion-item>\n      </ion-list>  \n  <ion-list>\n    <ion-item>\n      <ion-label class = \"label\">Daily CHO Sum</ion-label>\n      <ion-input  class = \"right\" placeholder={{curChoTotal}} ></ion-input>\n    </ion-item>\n    </ion-list>\n    <ion-list>\n      <ion-item>\n        <ion-label class = \"label\">Daily Fat Sum</ion-label>\n        <ion-input  class = \"right\" placeholder={{curFatTotal}} ></ion-input>\n      </ion-item>\n      </ion-list>\n    </div>\n  \n  \n    <!-- <ion-card>\n      <ion-item lines=\"inset\" *ngFor=\"let data of Data\">\n        <ion-label>\n          <h5 >Date:{{myDate}}</h5>\n          <h5>CHO:{{data.cho}}</h5>\n          <h5>Fat:{{data.fat}}</h5>\n        </ion-label>\n        <div class=\"item-note\" item-end>     \n          <ion-icon name=\"trash\" style=\"zoom:2.0\" (click)=\"deleteFood(data.id)\"></ion-icon>\n        </div>\n      </ion-item>\n    </ion-card>   -->\n  \n  \n    <!-- section of dinner end -->\n  \n  \n\n    \n  <!-- section of Snack1 start -->\n  <div [hidden]=\"type !='snack1'\">\n\n\n    <!-- <app-card> </app-card> -->\n    \n    \n      <ion-list>\n       \n        <ion-card *ngFor=\"let att of anArraySnack1; let i=index\" >  \n          <ion-item-sliding >\n            <ion-item-options  side=\"end\">\n            <ion-button color = \"danger\" (click)=\"removeItemSnack1(i)\"><ion-icon name=\"trash\"></ion-icon> Delete</ion-button>\n          </ion-item-options>\n            \n            <ion-item  lines=\"none\">\n            <ion-label class=\"label\"> Food Name</ion-label>\n            <ion-input  formControlName = \"food_name\" type=\"text\" required class = \"right\" placeholder={{att.food_name}} ></ion-input> \n    \n          </ion-item>\n        \n          <ion-item lines=\"none\">\n            <ion-label class=\"label\">Unit</ion-label>\n            <ion-input  formControlName = \"unit\" type=\"text\" required class = \"left1\" placeholder=\"{{att.unit}}\" ></ion-input>\n            \n            <ion-label class=\"unique\">Qty</ion-label>\n            <ion-input  formControlName = \"qty\"  type=\"text\" required class = \"right\" placeholder=\"{{att.qty}}\"></ion-input>\n           \n          </ion-item>\n          <ion-item lines=\"none\" >\n            \n            <ion-label class=\"label\">CHO</ion-label>\n            <ion-input formControlName = \"cho\"  type=\"text\" required class = \"left2\" placeholder=\"{{att.cho}}\"></ion-input>\n            <ion-label class=\"label\">Fat</ion-label>\n            <ion-input formControlName = \"fat\" type=\"text\" required class = \"right\" placeholder=\"{{att.fat}}\"></ion-input>\n          </ion-item>\n        </ion-item-sliding>\n      \n        </ion-card>\n   \n    </ion-list>\n    \n      \n    <ion-list>\n      <form [formGroup]=\"foodCardForm\" (ngSubmit)=\"onSaveSnack1()\">\n        <ion-card >  \n          <ion-item-sliding >\n            <ion-item-options  side=\"end\">\n          </ion-item-options>\n            <ion-item  lines=\"none\">\n            <ion-label class=\"label\"> Food Name</ion-label>\n       \n            <ion-input  formControlName = \"food_name\" type=\"text\" required class = \"right\" placeholder=\" Enter\" ></ion-input>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-label class=\"label\">Unit</ion-label>\n            <ion-input  formControlName = \"unit\" type=\"text\" required class = \"left1\" placeholder=\"Enter\" ></ion-input>\n      \n            <ion-label class=\"unique\">Qty</ion-label>\n            <ion-input  formControlName = \"qty\"  type=\"text\" required class = \"right\" placeholder=\"Enter\" ></ion-input>\n          </ion-item>\n      \n      \n          <ion-item lines=\"none\" >\n            \n            <ion-label class=\"label\">CHO</ion-label>\n            <ion-input formControlName = \"cho\"  type=\"text\" required class = \"left2\" placeholder=\"Enter\"></ion-input>\n            <ion-label class=\"label\">Fat</ion-label>\n            <ion-input formControlName = \"fat\" type=\"text\" required class = \"right\" placeholder=\"Enter\"></ion-input>\n          </ion-item>\n      \n        </ion-item-sliding>\n      \n        </ion-card>\n      \n      \n    </form >\n    \n    </ion-list>\n    \n    \n    <ion-button  (click)=\"AddSnack1()\" size = \"small\" class = \"center\" color=\"primary\">Add Food </ion-button>\n    <ion-button  (click)=\"storeToDatabase()\" size = \"small\" class = \"center\" color=\"primary\">Store to Database</ion-button>\n    \n    \n    <ion-list>\n      <ion-item>\n        <ion-label class = \"label\">Snack 1 CHO Sum</ion-label>\n        <ion-input  class = \"right\" placeholder={{curChoSnack1}} ></ion-input>\n      </ion-item>\n    </ion-list>\n      <ion-list>\n        <ion-item>\n          <ion-label class = \"label\">Snack 1 Fat Sum</ion-label>\n          <ion-input   class = \"right\" placeholder={{curFatSnack1}}></ion-input>\n        </ion-item>\n        </ion-list>  \n    <ion-list>\n      <ion-item>\n        <ion-label class = \"label\">Daily CHO Sum</ion-label>\n        <ion-input  class = \"right\" placeholder={{curChoTotal}} ></ion-input>\n      </ion-item>\n      </ion-list>\n      <ion-list>\n        <ion-item>\n          <ion-label class = \"label\">Daily Fat Sum</ion-label>\n          <ion-input  class = \"right\" placeholder={{curFatTotal}} ></ion-input>\n        </ion-item>\n        </ion-list>\n      </div>\n\n\n\n\n <!-- section of Snack2 start -->\n <div [hidden]=\"type !='snack2'\">\n\n\n  <!-- <app-card> </app-card> -->\n  \n  \n    <ion-list>\n      \n      <ion-card *ngFor=\"let att of anArraySnack2; let i=index\" >  \n        <ion-item-sliding >\n          <ion-item-options  side=\"end\">\n          <ion-button color = \"danger\" (click)=\"removeItemSnack2(i)\"><ion-icon name=\"trash\"></ion-icon> Delete</ion-button>\n        </ion-item-options>\n          <!-- <ion-button class = \"savebutton\" type=\"submit\" color=\"tertiary\"  shape=\"block\" expand=\"block\">Save</ion-button> -->\n          <ion-item  lines=\"none\">\n          <ion-label class=\"label\"> Food Name</ion-label>\n          <ion-input  formControlName = \"food_name\" type=\"text\" required class = \"right\" placeholder={{att.food_name}} ></ion-input> \n  \n        </ion-item>\n      \n        <ion-item lines=\"none\">\n          <ion-label class=\"label\">Unit</ion-label>\n          <ion-input  formControlName = \"unit\" type=\"text\" required class = \"left1\" placeholder=\"{{att.unit}}\" ></ion-input>\n          \n          <ion-label class=\"unique\">Qty</ion-label>\n          <ion-input  formControlName = \"qty\"  type=\"text\" required class = \"right\" placeholder=\"{{att.qty}}\"></ion-input>\n         \n        </ion-item>\n        <ion-item lines=\"none\" >\n          \n          <ion-label class=\"label\">CHO</ion-label>\n          <ion-input formControlName = \"cho\"  type=\"text\" required class = \"left2\" placeholder=\"{{att.cho}}\"></ion-input>\n          <ion-label class=\"label\">Fat</ion-label>\n          <ion-input formControlName = \"fat\" type=\"text\" required class = \"right\" placeholder=\"{{att.fat}}\"></ion-input>\n        </ion-item>\n      </ion-item-sliding>\n    \n      </ion-card>\n \n  </ion-list>\n  \n    \n  <ion-list>\n    <form [formGroup]=\"foodCardForm\" (ngSubmit)=\"onSaveSnack2()\">\n      <ion-card >  \n        <ion-item-sliding >\n          <ion-item-options  side=\"end\">\n        </ion-item-options>\n          <ion-item  lines=\"none\">\n          <ion-label class=\"label\"> Food Name</ion-label>\n     \n          <ion-input  formControlName = \"food_name\" type=\"text\" required class = \"right\" placeholder=\" Enter\" ></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-label class=\"label\">Unit</ion-label>\n          <ion-input  formControlName = \"unit\" type=\"text\" required class = \"left1\" placeholder=\"Enter\" ></ion-input>\n    \n          <ion-label class=\"unique\">Qty</ion-label>\n          <ion-input  formControlName = \"qty\"  type=\"text\" required class = \"right\" placeholder=\"Enter\" ></ion-input>\n        </ion-item>\n    \n    \n        <ion-item lines=\"none\" >\n          \n          <ion-label class=\"label\">CHO</ion-label>\n          <ion-input formControlName = \"cho\"  type=\"text\" required class = \"left2\" placeholder=\"Enter\"></ion-input>\n          <ion-label class=\"label\">Fat</ion-label>\n          <ion-input formControlName = \"fat\" type=\"text\" required class = \"right\" placeholder=\"Enter\"></ion-input>\n        </ion-item>\n    \n      </ion-item-sliding>\n    \n      </ion-card>\n      \n    \n    \n  </form >\n  \n  </ion-list>\n  \n  \n  <ion-button  (click)=\"AddSnack2()\" size = \"small\" class = \"center\" color=\"primary\">Add Food </ion-button>\n  <ion-button  (click)=\"storeToDatabase()\" size = \"small\" class = \"center\" color=\"primary\">Store to Database</ion-button>\n  \n  \n  <ion-list>\n    <ion-item>\n      <ion-label class = \"label\">Snack 2 CHO Sum</ion-label>\n      <ion-input  class = \"right\" placeholder={{curChoSnack2}} ></ion-input>\n    </ion-item>\n  </ion-list>\n    <ion-list>\n      <ion-item>\n        <ion-label class = \"label\">Snack 2 Fat Sum</ion-label>\n        <ion-input   class = \"right\" placeholder={{curFatSnack2}}></ion-input>\n      </ion-item>\n      </ion-list>  \n  <ion-list>\n    <ion-item>\n      <ion-label class = \"label\">Daily CHO Sum</ion-label>\n      <ion-input  class = \"right\" placeholder={{curChoTotal}} ></ion-input>\n    </ion-item>\n    </ion-list>\n    <ion-list>\n      <ion-item>\n        <ion-label class = \"label\">Daily Fat Sum</ion-label>\n        <ion-input  class = \"right\" placeholder={{curFatTotal}} ></ion-input>\n      </ion-item>\n      </ion-list>\n    </div>\n\n <!-- section of Snack3 start -->\n <div [hidden]=\"type !='snack3'\">\n\n\n  <!-- <app-card> </app-card> -->\n  \n  \n    <ion-list>\n     \n      <ion-card *ngFor=\"let att of anArraySnack3; let i=index\" >  \n        <ion-item-sliding >\n          <ion-item-options  side=\"end\">\n          <ion-button color = \"danger\" (click)=\"removeItemSnack3(i)\"><ion-icon name=\"trash\"></ion-icon> Delete</ion-button>\n        </ion-item-options>\n          <!-- <ion-button class = \"savebutton\" type=\"submit\" color=\"tertiary\"  shape=\"block\" expand=\"block\">Save</ion-button> -->\n          <ion-item  lines=\"none\">\n          <ion-label class=\"label\"> Food Name</ion-label>\n          <ion-input  formControlName = \"food_name\" type=\"text\" required class = \"right\" placeholder={{att.food_name}} ></ion-input> \n  \n        </ion-item>\n      \n        <ion-item lines=\"none\">\n          <ion-label class=\"label\">Unit</ion-label>\n          <ion-input  formControlName = \"unit\" type=\"text\" required class = \"left1\" placeholder=\"{{att.unit}}\" ></ion-input>\n          \n          <ion-label class=\"unique\">Qty</ion-label>\n          <ion-input  formControlName = \"qty\"  type=\"text\" required class = \"right\" placeholder=\"{{att.qty}}\"></ion-input>\n         \n        </ion-item>\n        <ion-item lines=\"none\" >\n          \n          <ion-label class=\"label\">CHO</ion-label>\n          <ion-input formControlName = \"cho\"  type=\"text\" required class = \"left2\" placeholder=\"{{att.cho}}\"></ion-input>\n          <ion-label class=\"label\">Fat</ion-label>\n          <ion-input formControlName = \"fat\" type=\"text\" required class = \"right\" placeholder=\"{{att.fat}}\"></ion-input>\n        </ion-item>\n      </ion-item-sliding>\n    \n      </ion-card>\n\n  </ion-list>\n  \n    \n  <ion-list>\n    <form [formGroup]=\"foodCardForm\" (ngSubmit)=\"onSaveSnack3()\">\n      <ion-card >  \n        <ion-item-sliding >\n          <ion-item-options  side=\"end\">\n        </ion-item-options>\n          <ion-item  lines=\"none\">\n          <ion-label class=\"label\"> Food Name</ion-label>\n     \n          <ion-input  formControlName = \"food_name\" type=\"text\" required class = \"right\" placeholder=\" Enter\" ></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-label class=\"label\">Unit</ion-label>\n          <ion-input  formControlName = \"unit\" type=\"text\" required class = \"left1\" placeholder=\"Enter\" ></ion-input>\n    \n          <ion-label class=\"unique\">Qty</ion-label>\n          <ion-input  formControlName = \"qty\"  type=\"text\" required class = \"right\" placeholder=\"Enter\" ></ion-input>\n        </ion-item>\n    \n    \n        <ion-item lines=\"none\" >\n          \n          <ion-label class=\"label\">CHO</ion-label>\n          <ion-input formControlName = \"cho\"  type=\"text\" required class = \"left2\" placeholder=\"Enter\"></ion-input>\n          <ion-label class=\"label\">Fat</ion-label>\n          <ion-input formControlName = \"fat\" type=\"text\" required class = \"right\" placeholder=\"Enter\"></ion-input>\n        </ion-item>\n    \n      </ion-item-sliding>\n    \n      </ion-card>\n      \n    \n    \n  </form >\n  \n  </ion-list>\n  \n  \n  <ion-button  (click)=\"AddSnack3()\" size = \"small\" class = \"center\" color=\"primary\">Add Food</ion-button>\n  <ion-button  (click)=\"storeToDatabase()\" size = \"small\" class = \"center\" color=\"primary\">Store to Database</ion-button>\n  \n  \n  <ion-list>\n    <ion-item>\n      <ion-label class = \"label\">Snack 3 CHO Sum</ion-label>\n      <ion-input  class = \"right\" placeholder={{curChoSnack3}} ></ion-input>\n    </ion-item>\n  </ion-list>\n    <ion-list>\n      <ion-item>\n        <ion-label class = \"label\">Snack 3 Fat Sum</ion-label>\n        <ion-input   class = \"right\" placeholder={{curFatSnack3}}></ion-input>\n      </ion-item>\n      </ion-list>  \n  <ion-list>\n    <ion-item>\n      <ion-label class = \"label\">Daily CHO Sum</ion-label>\n      <ion-input  class = \"right\" placeholder={{curChoTotal}} ></ion-input>\n    </ion-item>\n    </ion-list>\n    <ion-list>\n      <ion-item>\n        <ion-label class = \"label\">Daily Fat Sum</ion-label>\n        <ion-input  class = \"right\" placeholder={{curFatTotal}} ></ion-input>\n      </ion-item>\n      </ion-list>\n    </div>\n\n\n     <!-- section of Others start -->\n <div [hidden]=\"type !='others'\">\n\n\n  <!-- <app-card> </app-card> -->\n  \n  \n    <ion-list>\n     \n      <ion-card *ngFor=\"let att of anArrayOthers; let i=index\" >  \n        <ion-item-sliding >\n          <ion-item-options  side=\"end\">\n          <ion-button color = \"danger\" (click)=\"removeItemOthers(i)\"><ion-icon name=\"trash\"></ion-icon> Delete</ion-button>\n        </ion-item-options>\n          <!-- <ion-button class = \"savebutton\" type=\"submit\" color=\"tertiary\"  shape=\"block\" expand=\"block\">Save</ion-button> -->\n          <ion-item  lines=\"none\">\n          <ion-label class=\"label\"> Food Name</ion-label>\n          <ion-input  formControlName = \"food_name\" type=\"text\" required class = \"right\" placeholder={{att.food_name}} ></ion-input> \n  \n        </ion-item>\n      \n        <ion-item lines=\"none\">\n          <ion-label class=\"label\">Unit</ion-label>\n          <ion-input  formControlName = \"unit\" type=\"text\" required class = \"left1\" placeholder=\"{{att.unit}}\" ></ion-input>\n          \n          <ion-label class=\"unique\">Qty</ion-label>\n          <ion-input  formControlName = \"qty\"  type=\"text\" required class = \"right\" placeholder=\"{{att.qty}}\"></ion-input>\n         \n        </ion-item>\n        <ion-item lines=\"none\" >\n          \n          <ion-label class=\"label\">CHO</ion-label>\n          <ion-input formControlName = \"cho\"  type=\"text\" required class = \"left2\" placeholder=\"{{att.cho}}\"></ion-input>\n          <ion-label class=\"label\">Fat</ion-label>\n          <ion-input formControlName = \"fat\" type=\"text\" required class = \"right\" placeholder=\"{{att.fat}}\"></ion-input>\n        </ion-item>\n      </ion-item-sliding>\n    \n      </ion-card>\n\n  </ion-list>\n  \n    \n  <ion-list>\n    <form [formGroup]=\"foodCardForm\" (ngSubmit)=\"onSaveOthers()\">\n      <ion-card >  \n        <ion-item-sliding >\n          <ion-item-options  side=\"end\">\n        </ion-item-options>\n          <ion-item  lines=\"none\">\n          <ion-label class=\"label\"> Food Name</ion-label>\n     \n          <ion-input  formControlName = \"food_name\" type=\"text\" required class = \"right\" placeholder=\" Enter\" ></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-label class=\"label\">Unit</ion-label>\n          <ion-input  formControlName = \"unit\" type=\"text\" required class = \"left1\" placeholder=\"Enter\" ></ion-input>\n    \n          <ion-label class=\"unique\">Qty</ion-label>\n          <ion-input  formControlName = \"qty\"  type=\"text\" required class = \"right\" placeholder=\"Enter\" ></ion-input>\n        </ion-item>\n    \n    \n        <ion-item lines=\"none\" >\n          \n          <ion-label class=\"label\">CHO</ion-label>\n          <ion-input formControlName = \"cho\"  type=\"text\" required class = \"left2\" placeholder=\"Enter\"></ion-input>\n          <ion-label class=\"label\">Fat</ion-label>\n          <ion-input formControlName = \"fat\" type=\"text\" required class = \"right\" placeholder=\"Enter\"></ion-input>\n        </ion-item>\n    \n      </ion-item-sliding>\n    \n      </ion-card>\n      \n    \n    \n  </form >\n  \n  </ion-list>\n  \n  \n  <ion-button  (click)=\"AddOthers()\" size = \"small\" class = \"center\" color=\"primary\">Add Food</ion-button>\n  <ion-button  (click)=\"storeToDatabase()\" size = \"small\" class = \"center\" color=\"primary\">Store to database</ion-button>\n  \n  \n  <ion-list>\n    <ion-item>\n      <ion-label class = \"label\">Others CHO Sum</ion-label>\n      <ion-input  class = \"right\" placeholder={{curChoOthers}} ></ion-input>\n    </ion-item>\n  </ion-list>\n    <ion-list>\n      <ion-item>\n        <ion-label class = \"label\">Others Fat Sum</ion-label>\n        <ion-input   class = \"right\" placeholder={{curFatOthers}}></ion-input>\n      </ion-item>\n      </ion-list>  \n  <ion-list>\n    <ion-item>\n      <ion-label class = \"label\">Daily CHO Sum</ion-label>\n      <ion-input  class = \"right\" placeholder={{curChoTotal}} ></ion-input>\n    </ion-item>\n    </ion-list>\n    <ion-list>\n      <ion-item>\n        <ion-label class = \"label\">Daily Fat Sum</ion-label>\n        <ion-input  class = \"right\" placeholder={{curFatTotal}} ></ion-input>\n      </ion-item>\n      </ion-list>\n    </div>\n\n\n  </ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n\n    \n    \n      <!-- <ion-card>\n        <ion-item lines=\"inset\" *ngFor=\"let data of Data\">\n          <ion-label>\n            <h5 >Date:{{myDate}}</h5>\n            <h5>CHO:{{data.cho}}</h5>\n            <h5>Fat:{{data.fat}}</h5>\n          </ion-label>\n          <div class=\"item-note\" item-end>     \n            <ion-icon name=\"trash\" style=\"zoom:2.0\" (click)=\"deleteFood(data.id)\"></ion-icon>\n          </div>\n        </ion-item>\n      </ion-card>   -->\n    \n    \n      <!-- section of snack end -->\n\n   \n\n\n\n\n\n\n\n    \n    \n<!--       \n\n\n        <ion-list>\n          <form [formGroup]=\"mainForm\" (ngSubmit)=\"storeData()\">\n          <ion-card *ngFor=\"let att of anArray; let i=index\" >  \n            <ion-item-sliding >\n              <ion-item-options  side=\"end\">\n              <ion-button color = \"danger\" (click)=\"removeItem(i)\"><ion-icon name=\"trash\"></ion-icon> Delete</ion-button>\n            </ion-item-options>\n              <ion-button class = \"savebutton\" type=\"submit\" color=\"tertiary\"  shape=\"block\" expand=\"block\">Save</ion-button>\n              <ion-item  lines=\"none\">\n              <ion-label class=\"label\"> Food Name</ion-label>\n              <ion-input  formControlName = \"food_name\" type=\"text\" required class = \"right\" placeholder=\"Enter\" ></ion-input>\n            </ion-item>\n          \n            <ion-item lines=\"none\">\n              <ion-label class=\"label\">Unit</ion-label>\n              <ion-input  formControlName = \"unit\" type=\"text\" required class = \"left1\" placeholder=\"Enter\" ></ion-input>\n              \n              <ion-label class=\"unique\">Qty</ion-label>\n              <ion-input  formControlName = \"qty\"  type=\"text\" required class = \"right\" placeholder=\"Enter\"></ion-input>\n             \n            </ion-item>\n            <ion-item lines=\"none\" >\n              \n              <ion-label class=\"label\">CHO</ion-label>\n              <ion-input formControlName = \"cho\"  type=\"text\" required class = \"left2\" placeholder=\"Enter\"></ion-input>\n              <ion-label class=\"label\">Fat</ion-label>\n              <ion-input formControlName = \"fat\" type=\"text\" required class = \"right\" placeholder=\"Enter\"></ion-input>\n            </ion-item>\n          </ion-item-sliding>\n        \n          </ion-card>\n          \n          \n        </form >\n        \n        </ion-list>\n        <ion-button  (click)=\"Add()\" size = \"small\" class = \"center\" color=\"primary\">Add Card </ion-button>\n        \n        <ion-list>\n          <ion-item>\n            <ion-label class = \"label\">Evening Meal CHO Sum</ion-label>\n            <ion-input  class = \"right\" placeholder={{sum5}} ></ion-input>\n          </ion-item>\n          </ion-list>\n\n          <ion-list>\n            <ion-item>\n              <ion-label class = \"label\">Evening Meal Fat Sum</ion-label>\n              <ion-input  class = \"right\" placeholder={{sum6}} ></ion-input>\n            </ion-item>\n            </ion-list>\n\n              \n        <ion-list>\n          <ion-item>\n            <ion-label class = \"label\">Daily CHO Sum</ion-label>\n            <ion-input  class = \"right\" placeholder=\"Enter\" ></ion-input>\n          </ion-item>\n          </ion-list>\n\n          <ion-list>\n            <ion-item>\n              <ion-label class = \"label\">Daily Fat Sum</ion-label>\n              <ion-input  class = \"right\" placeholder=\"Enter\" ></ion-input>\n            </ion-item>\n            </ion-list>\n            \n    \n        \n          </div> -->\n        \n          <!-- <div [hidden]=\"type !='snack1'\">\n\n\n            <ion-list>\n              <form [formGroup]=\"mainForm\" (ngSubmit)=\"storeData()\">\n              <ion-card *ngFor=\"let att of anArray; let i=index\" >  \n                <ion-item-sliding >\n                  <ion-item-options  side=\"end\">\n                  <ion-button color = \"danger\" (click)=\"removeItem(i)\"><ion-icon name=\"trash\"></ion-icon> Delete</ion-button>\n                </ion-item-options>\n                  <ion-button class = \"savebutton\" type=\"submit\" color=\"tertiary\"  shape=\"block\" expand=\"block\">Save</ion-button>\n                  <ion-item  lines=\"none\">\n                  <ion-label class=\"label\"> Food Name</ion-label>\n                  <ion-input  formControlName = \"food_name\" type=\"text\" required class = \"right\" placeholder=\"Enter\" ></ion-input>\n                </ion-item>\n              \n                <ion-item lines=\"none\">\n                  <ion-label class=\"label\">Unit</ion-label>\n                  <ion-input  formControlName = \"unit\" type=\"text\" required class = \"left1\" placeholder=\"Enter\" ></ion-input>\n                  \n                  <ion-label class=\"unique\">Qty</ion-label>\n                  <ion-input  formControlName = \"qty\"  type=\"text\" required class = \"right\" placeholder=\"Enter\"></ion-input>\n                 \n                </ion-item>\n                <ion-item lines=\"none\" >\n                  \n                  <ion-label class=\"label\">CHO</ion-label>\n                  <ion-input formControlName = \"cho\"  type=\"text\" required class = \"left2\" placeholder=\"Enter\"></ion-input>\n                  <ion-label class=\"label\">Fat</ion-label>\n                  <ion-input formControlName = \"fat\" type=\"text\" required class = \"right\" placeholder=\"Enter\"></ion-input>\n                </ion-item>\n              </ion-item-sliding>\n            \n              </ion-card>\n              \n              \n            </form >\n            \n            </ion-list>\n            <ion-button  (click)=\"Add()\" size = \"small\" class = \"center\" color=\"primary\">Add Card </ion-button>\n            \n            <ion-list>\n       \n                <ion-item>\n                  <ion-label class = \"label\">Snack 1 CHO Sum</ion-label>\n                  <ion-input  class = \"right\" placeholder={{sum7}} ></ion-input>\n                </ion-item>\n                </ion-list>\n      \n         \n    \n              <ion-list>\n                <ion-item>\n                  <ion-label class = \"label\">Snack 1 Fat Sum</ion-label>\n                  <ion-input  class = \"right\" placeholder={{sum8}} ></ion-input>\n                </ion-item>\n                </ion-list>\n    \n                  \n            <ion-list>\n              <ion-item>\n                <ion-label class = \"label\">Daily CHO Sum</ion-label>\n                <ion-input  class = \"right\" placeholder=\"Enter\" ></ion-input>\n              </ion-item>\n              </ion-list>\n    \n              <ion-list>\n                <ion-item>\n                  <ion-label class = \"label\">Daily Fat Sum</ion-label>\n                  <ion-input  class = \"right\" placeholder=\"Enter\" ></ion-input>\n                </ion-item>\n              </ion-list>\n              \n              </div> -->\n            \n<!--             \n              <div [hidden]=\"type !='snack2'\">\n\n\n                <ion-list>\n                  <form [formGroup]=\"mainForm\" (ngSubmit)=\"storeData()\">\n                  <ion-card *ngFor=\"let att of anArray; let i=index\" >  \n                    <ion-item-sliding >\n                      <ion-item-options  side=\"end\">\n                      <ion-button color = \"danger\" (click)=\"removeItem(i)\"><ion-icon name=\"trash\"></ion-icon> Delete</ion-button>\n                    </ion-item-options>\n                      <ion-button class = \"savebutton\" type=\"submit\" color=\"tertiary\"  shape=\"block\" expand=\"block\">Save</ion-button>\n                      <ion-item  lines=\"none\">\n                      <ion-label class=\"label\"> Food Name</ion-label>\n                      <ion-input  formControlName = \"food_name\" type=\"text\" required class = \"right\" placeholder=\"Enter\" ></ion-input>\n                    </ion-item>\n                  \n                    <ion-item lines=\"none\">\n                      <ion-label class=\"label\">Unit</ion-label>\n                      <ion-input  formControlName = \"unit\" type=\"text\" required class = \"left1\" placeholder=\"Enter\" ></ion-input>\n                      \n                      <ion-label class=\"unique\">Qty</ion-label>\n                      <ion-input  formControlName = \"qty\"  type=\"text\" required class = \"right\" placeholder=\"Enter\"></ion-input>\n                     \n                    </ion-item>\n                    <ion-item lines=\"none\" >\n                      \n                      <ion-label class=\"label\">CHO</ion-label>\n                      <ion-input formControlName = \"cho\"  type=\"text\" required class = \"left2\" placeholder=\"Enter\"></ion-input>\n                      <ion-label class=\"label\">Fat</ion-label>\n                      <ion-input formControlName = \"fat\" type=\"text\" required class = \"right\" placeholder=\"Enter\"></ion-input>\n                    </ion-item>\n                  </ion-item-sliding>\n                \n                  </ion-card>\n                  \n                  \n                </form >\n                \n                </ion-list>\n                <ion-button  (click)=\"Add()\" size = \"small\" class = \"center\" color=\"primary\">Add Card </ion-button>\n                \n                <ion-list>\n                  <ion-item>\n                    <ion-label class = \"label\">Snack 2 CHO Sum</ion-label>\n                    <ion-input  class = \"right\" placeholder={{sum9}} ></ion-input>\n                  </ion-item>\n                  </ion-list>\n        \n           \n      \n                <ion-list>\n                  <ion-item>\n                    <ion-label class = \"label\">Snack 2 Fat Sum</ion-label>\n                    <ion-input  class = \"right\" placeholder={{sum10}} ></ion-input>\n                  </ion-item>\n                  </ion-list>\n      \n                    \n              <ion-list>\n                <ion-item>\n                  <ion-label class = \"label\">Daily CHO Sum</ion-label>\n                  <ion-input  class = \"right\" placeholder=\"Enter\" ></ion-input>\n                </ion-item>\n                </ion-list>\n      \n                <ion-list>\n                  <ion-item>\n                    <ion-label class = \"label\">Daily Fat Sum</ion-label>\n                    <ion-input  class = \"right\" placeholder=\"Enter\" ></ion-input>\n                  </ion-item>\n                </ion-list>\n        \n                  </div> -->\n                \n                  <!-- <div [hidden]=\"type !='snack3'\">\n\n\n                    <ion-list>\n                      <form [formGroup]=\"mainForm\" (ngSubmit)=\"storeData()\">\n                      <ion-card *ngFor=\"let att of anArray; let i=index\" >  \n                        <ion-item-sliding >\n                          <ion-item-options  side=\"end\">\n                          <ion-button color = \"danger\" (click)=\"removeItem(i)\"><ion-icon name=\"trash\"></ion-icon> Delete</ion-button>\n                        </ion-item-options>\n                          <ion-button class = \"savebutton\" type=\"submit\" color=\"tertiary\"  shape=\"block\" expand=\"block\">Save</ion-button>\n                          <ion-item  lines=\"none\">\n                          <ion-label class=\"label\"> Food Name</ion-label>\n                          <ion-input  formControlName = \"food_name\" type=\"text\" required class = \"right\" placeholder=\"Enter\" ></ion-input>\n                        </ion-item>\n                      \n                        <ion-item lines=\"none\">\n                          <ion-label class=\"label\">Unit</ion-label>\n                          <ion-input  formControlName = \"unit\" type=\"text\" required class = \"left1\" placeholder=\"Enter\" ></ion-input>\n                          \n                          <ion-label class=\"unique\">Qty</ion-label>\n                          <ion-input  formControlName = \"qty\"  type=\"text\" required class = \"right\" placeholder=\"Enter\"></ion-input>\n                         \n                        </ion-item>\n                        <ion-item lines=\"none\" >\n                          \n                          <ion-label class=\"label\">CHO</ion-label>\n                          <ion-input formControlName = \"cho\"  type=\"text\" required class = \"left2\" placeholder=\"Enter\"></ion-input>\n                          <ion-label class=\"label\">Fat</ion-label>\n                          <ion-input formControlName = \"fat\" type=\"text\" required class = \"right\" placeholder=\"Enter\"></ion-input>\n                        </ion-item>\n                      </ion-item-sliding>\n                    \n                      </ion-card>\n                      \n                      \n                    </form >\n                    \n                    </ion-list>\n                    <ion-button  (click)=\"Add()\" size = \"small\" class = \"center\" color=\"primary\">Add Card </ion-button>\n                    \n                    <ion-list>\n                      <ion-item>\n                        <ion-label class = \"label\">Snack 3 CHO Sum</ion-label>\n                        <ion-input  class = \"right\" placeholder={{sum11}} ></ion-input>\n                      </ion-item>\n                      </ion-list>\n            \n               \n          \n                    <ion-list>\n                      <ion-item>\n                        <ion-label class = \"label\">Snack 3 Fat Sum</ion-label>\n                        <ion-input  class = \"right\" placeholder={{sum12}} ></ion-input>\n                      </ion-item>\n                      </ion-list>\n          \n                        \n                  <ion-list>\n                    <ion-item>\n                      <ion-label class = \"label\">Daily CHO Sum</ion-label>\n                      <ion-input  class = \"right\" placeholder=\"Enter\" ></ion-input>\n                    </ion-item>\n                    </ion-list>\n          \n                    <ion-list>\n                      <ion-item>\n                        <ion-label class = \"label\">Daily Fat Sum</ion-label>\n                        <ion-input  class = \"right\" placeholder=\"Enter\" ></ion-input>\n                      </ion-item>\n                    </ion-list>\n              \n            \n                    \n                      </div> -->\n                    \n\n                      <!-- <div [hidden]=\"type !='others'\">\n\n\n                        <ion-list>\n                          <form [formGroup]=\"mainForm\" (ngSubmit)=\"storeData()\">\n                          <ion-card *ngFor=\"let att of anArray; let i=index\" >  \n                            <ion-item-sliding >\n                              <ion-item-options  side=\"end\">\n                              <ion-button color = \"danger\" (click)=\"removeItem(i)\"><ion-icon name=\"trash\"></ion-icon> Delete</ion-button>\n                            </ion-item-options>\n                              <ion-button class = \"savebutton\" type=\"submit\" color=\"tertiary\"  shape=\"block\" expand=\"block\">Save</ion-button>\n                              <ion-item  lines=\"none\">\n                              <ion-label class=\"label\"> Food Name</ion-label>\n                              <ion-input  formControlName = \"food_name\" type=\"text\" required class = \"right\" placeholder=\"Enter\" ></ion-input>\n                            </ion-item>\n                          \n                            <ion-item lines=\"none\">\n                              <ion-label class=\"label\">Unit</ion-label>\n                              <ion-input  formControlName = \"unit\" type=\"text\" required class = \"left1\" placeholder=\"Enter\" ></ion-input>\n                              \n                              <ion-label class=\"unique\">Qty</ion-label>\n                              <ion-input  formControlName = \"qty\"  type=\"text\" required class = \"right\" placeholder=\"Enter\"></ion-input>\n                             \n                            </ion-item>\n                            <ion-item lines=\"none\" >\n                              \n                              <ion-label class=\"label\">CHO</ion-label>\n                              <ion-input formControlName = \"cho\"  type=\"text\" required class = \"left2\" placeholder=\"Enter\"></ion-input>\n                              <ion-label class=\"label\">Fat</ion-label>\n                              <ion-input formControlName = \"fat\" type=\"text\" required class = \"right\" placeholder=\"Enter\"></ion-input>\n                            </ion-item>\n                          </ion-item-sliding>\n                        \n                          </ion-card>\n                          \n                          \n                        </form >\n                        \n                        </ion-list>\n                        <ion-button  (click)=\"Add()\" size = \"small\" class = \"center\" color=\"primary\">Add Card </ion-button>\n                        \n                        <ion-list>\n                          <ion-item>\n                            <ion-label class = \"label\">Others CHO Sum</ion-label>\n                            <ion-input  class = \"right\" placeholder={{sum13}} ></ion-input>\n                          </ion-item>\n                          </ion-list>\n                \n                   \n              \n                        <ion-list>\n                          <ion-item>\n                            <ion-label class = \"label\">Others Fat Sum</ion-label>\n                            <ion-input  class = \"right\" placeholder={{sum14}} ></ion-input>\n                          </ion-item>\n                          </ion-list>\n              \n                            \n                      <ion-list>\n                        <ion-item>\n                          <ion-label class = \"label\">Daily CHO Sum</ion-label>\n                          <ion-input  class = \"right\" placeholder=\"Enter\" ></ion-input>\n                        </ion-item>\n                        </ion-list>\n              \n                        <ion-list>\n                          <ion-item>\n                            <ion-label class = \"label\">Daily Fat Sum</ion-label>\n                            <ion-input  class = \"right\" placeholder=\"Enter\" ></ion-input>\n                          </ion-item>\n                        </ion-list>\n                \n                        \n                          </div> -->\n                        \n                     \n                    \n\n\n\n\n";
      /***/
    },

    /***/
    "./src/app/Home/home-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/Home/home-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
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


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/Home/home.page.ts");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/Home/home.module.ts":
    /*!*************************************!*\
      !*** ./src/app/Home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomePageModule */

    /***/
    function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
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


      var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/Home/home.page.ts");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "./src/app/explore-container/explore-container.module.ts");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./home-routing.module */
      "./src/app/Home/home-routing.module.ts");
      /* harmony import */


      var _foodcard_foodcard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../foodcard/foodcard.component */
      "./src/app/foodcard/foodcard.component.ts");
      /* harmony import */


      var _card_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../card/card.component */
      "./src/app/card/card.component.ts");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_7__["HomePageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"], _foodcard_foodcard_component__WEBPACK_IMPORTED_MODULE_8__["FoodCardComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_9__["CardComponent"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "./src/app/Home/home.page.scss":
    /*!*************************************!*\
      !*** ./src/app/Home/home.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-segment-button {\n  min-width: 115px;\n}\n\n.label {\n  font-weight: bold;\n  position: relative;\n}\n\n.unique {\n  font-weight: bold;\n  text-align: right;\n  padding-left: 7px;\n}\n\n.left1 {\n  text-align: right;\n  right: 17px;\n}\n\n.left2 {\n  text-align: right;\n  right: 24px;\n}\n\n.right {\n  text-align: right;\n}\n\n.center {\n  margin-left: auto;\n  margin-right: auto;\n  width: 300px;\n  margin-top: 27px;\n  display: block !important;\n}\n\n.add {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n  height: 30px;\n  width: 200px;\n}\n\n.time {\n  margin-left: -15px;\n  margin-right: auto;\n  font-weight: bold;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUFPLGlCQUFnQjtFQUNyQixrQkFBa0I7QUFFcEI7O0FBR0E7RUFDRSxpQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUFuQjs7QUFLQTtFQUNJLGlCQUFpQjtFQUNqQixXQUFXO0FBRmY7O0FBS0E7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztBQUZiOztBQU1BO0VBQ0ksaUJBQWlCO0FBSHJCOztBQU9BO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUozQjs7QUFPQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0FBSmQ7O0FBT0E7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUdGO0FBUEEiLCJmaWxlIjoic3JjL2FwcC9Ib21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlZ21lbnQtYnV0dG9ue1xuICAgIG1pbi13aWR0aDogMTE1cHg7XG59XG5cbi5sYWJlbHtmb250LXdlaWdodDpib2xkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgXG59XG5cbi51bmlxdWUge1xuICBmb250LXdlaWdodDpib2xkO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG5cbn1cblxuXG4ubGVmdDEge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHJpZ2h0OiAxN3B4O1xufVxuXG4ubGVmdDIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcmlnaHQ6IDI0cHg7XG59XG5cblxuLnJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBcbn1cblxuLmNlbnRlcntcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tdG9wOiAyN3B4O1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG4uYWRke1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnRpbWV7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBmb250LXdlaWdodDpib2xkXG4gIFxuXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/Home/home.page.ts":
    /*!***********************************!*\
      !*** ./src/app/Home/home.page.ts ***!
      \***********************************/

    /*! exports provided: HomePage */

    /***/
    function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _services_dailyfood_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../services/dailyfood.service */
      "./src/app/services/dailyfood.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_record_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/record.service */
      "./src/app/services/record.service.ts");
      /* harmony import */


      var _services_database_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/database.service */
      "./src/app/services/database.service.ts");

      var HomePage = /*#__PURE__*/function () {
        function HomePage(dbservice, http, db, dailyrecorddb, formBuilder, toast, router) {
          _classCallCheck(this, HomePage);

          this.dbservice = dbservice;
          this.http = http;
          this.db = db;
          this.dailyrecorddb = dailyrecorddb;
          this.formBuilder = formBuilder;
          this.toast = toast;
          this.router = router;
          this.Data = [];
          this.curChoBreakfast = 0;
          this.curFatBreakfast = 0;
          this.curChoLunch = 0;
          this.curFatLunch = 0;
          this.curChoDinner = 0;
          this.curFatDinner = 0;
          this.curChoSnack1 = 0;
          this.curFatSnack1 = 0;
          this.curChoSnack2 = 0;
          this.curFatSnack2 = 0;
          this.curChoSnack3 = 0;
          this.curFatSnack3 = 0;
          this.curChoOthers = 0;
          this.curFatOthers = 0;
          this.curChoTotal = 0;
          this.curFatTotal = 0;
          this.anArrayBreakfast = [];
          this.anArrayLunch = [];
          this.anArrayDinner = [];
          this.anArraySnack1 = [];
          this.anArraySnack2 = [];
          this.anArraySnack3 = [];
          this.anArrayOthers = [];
          this.myDate = new Date().toISOString().split('T')[0];
          this.jsonData = [];
          this.foodCardForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            food_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            unit: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            qty: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            cho: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            fat: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
          });
          this.map = new Map(); //this.initializeJsonData();

          this.type = 'breakfast';
        }

        _createClass(HomePage, [{
          key: "initializeJsonData",
          value: function initializeJsonData() {
            this.jsonData = [{
              name: "apple",
              cho: "1001"
            }, {
              name: "banana",
              cho: "1003"
            }, {
              name: "waffle",
              cho: "1002"
            }];
          }
        }, {
          key: "filterJsonData",
          value: function filterJsonData(ev) {
            //filt out json food methed with user input.
            this.initializeJsonData();
            document.getElementById("choinput").focus();
            var val = ev.target.value;

            if (val && val.trim() != '') {
              this.jsonData = this.jsonData.filter(function (object) {
                return object.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
              });
            }
          }
        }, {
          key: "selectVal",
          value: function selectVal() {
            console.log("check");
          }
        }, {
          key: "onclickJson",
          value: function onclickJson() {// after choosing one food, auto complete other field cho/fat.
            // let cho = 9;
            // let fat = 10;
            // document.getElementById("choinput").setAttribute('value', "" + cho);
            // document.getElementById("fatinput").innerText = "" + fat;
          } // segmentc change method

        }, {
          key: "segmentChanged",
          value: function segmentChanged(ev) {} // section for remove and delete 

        }, {
          key: "removeItemBreakfast",
          value: function removeItemBreakfast(i) {
            for (var j = 0; j < this.anArrayBreakfast.length; j++) {
              if (j == i) {
                var j_uuid = this.myDate + "_Breakfast_" + String(this.anArrayBreakfast[j].food_name).toLowerCase().replace(/\-/g, " ").replace(/\s+/g, ""); //remove spaces;

                this.anArrayBreakfast.splice(j, 1);
                this.dbdeleteFood(j_uuid);
              }
            }

            this.analyzeChoAndFatBreakfast();
            this.analyzeChoAndFatTotal();
          }
        }, {
          key: "removeItemLunch",
          value: function removeItemLunch(i) {
            for (var j = 0; j < this.anArrayLunch.length; j++) {
              if (j == i) {
                var j_uuid = this.myDate + "_Lunch_" + String(this.anArrayLunch[j].food_name).toLowerCase().replace(/\-/g, " ").replace(/\s+/g, ""); //remove spaces;

                this.anArrayLunch.splice(j, 1);
                this.dbdeleteFood(j_uuid);
              }
            }

            this.analyzeChoAndFatLunch();
            this.analyzeChoAndFatTotal();
          }
        }, {
          key: "removeItemDinner",
          value: function removeItemDinner(i) {
            for (var j = 0; j < this.anArrayDinner.length; j++) {
              if (j == i) {
                var j_uuid = this.myDate + "_Dinner_" + String(this.anArrayDinner[j].food_name).toLowerCase().replace(/\-/g, " ").replace(/\s+/g, ""); //remove spaces;

                this.anArrayDinner.splice(j, 1);
                this.dbdeleteFood(j_uuid);
              }
            }

            this.analyzeChoAndFatDinner();
            this.analyzeChoAndFatTotal();
          }
        }, {
          key: "removeItemSnack1",
          value: function removeItemSnack1(i) {
            for (var j = 0; j < this.anArraySnack1.length; j++) {
              if (j == i) {
                var j_uuid = this.myDate + "_Snack1_" + String(this.anArraySnack1[j].food_name).toLowerCase().replace(/\-/g, " ").replace(/\s+/g, ""); //remove spaces;

                this.anArraySnack1.splice(j, 1);
                this.dbdeleteFood(j_uuid);
              }
            }

            this.analyzeChoAndFatSnack1();
            this.analyzeChoAndFatTotal();
          }
        }, {
          key: "removeItemSnack2",
          value: function removeItemSnack2(i) {
            for (var j = 0; j < this.anArraySnack2.length; j++) {
              if (j == i) {
                var j_uuid = this.myDate + "_Snack2_" + String(this.anArraySnack2[j].food_name).toLowerCase().replace(/\-/g, " ").replace(/\s+/g, ""); //remove spaces;

                this.anArraySnack2.splice(j, 1);
                this.dbdeleteFood(j_uuid);
              }
            }

            this.analyzeChoAndFatSnack2();
            this.analyzeChoAndFatTotal();
          }
        }, {
          key: "removeItemSnack3",
          value: function removeItemSnack3(i) {
            for (var j = 0; j < this.anArraySnack3.length; j++) {
              if (j == i) {
                var j_uuid = this.myDate + "_Snack3_" + String(this.anArraySnack3[j].food_name).toLowerCase().replace(/\-/g, " ").replace(/\s+/g, ""); //remove spaces;

                this.anArraySnack3.splice(j, 1);
                this.dbdeleteFood(j_uuid);
              }
            }

            this.analyzeChoAndFatSnack3();
            this.analyzeChoAndFatTotal();
          }
        }, {
          key: "removeItemOthers",
          value: function removeItemOthers(i) {
            for (var j = 0; j < this.anArrayOthers.length; j++) {
              if (j == i) {
                var j_uuid = this.myDate + "_Others_" + String(this.anArrayOthers[j].food_name).toLowerCase().replace(/\-/g, " ").replace(/\s+/g, ""); //remove spaces;

                this.anArrayOthers.splice(j, 1);
                this.dbdeleteFood(j_uuid);
              }
            }

            this.analyzeChoAndFatOthers();
            this.analyzeChoAndFatTotal();
          }
        }, {
          key: "dbdeleteFood",
          value: function dbdeleteFood(uuid) {
            var _this = this;

            this.db.deleteFood(uuid).then(function (res) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var toast;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return this.toast.create({
                          message: 'Food deleted',
                          duration: 2500
                        });

                      case 2:
                        toast = _context.sent;
                        toast.present();

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          } // section for saving and adding

        }, {
          key: "onSaveBreakfast",
          value: function onSaveBreakfast() {
            this.analyzeChoAndFatBreakfast();
            this.analyzeChoAndFatTotal();
            this.map[this.foodCardForm.controls['food_name'].value] = this.foodCardForm.value;
          }
        }, {
          key: "onSaveLunch",
          value: function onSaveLunch() {
            this.analyzeChoAndFatLunch();
            this.analyzeChoAndFatTotal();
            this.map[this.foodCardForm.controls['food_name'].value] = this.foodCardForm.value;
          }
        }, {
          key: "onSaveDinner",
          value: function onSaveDinner() {
            this.analyzeChoAndFatDinner();
            this.analyzeChoAndFatTotal();
            this.map[this.foodCardForm.controls['food_name'].value] = this.foodCardForm.value;
          }
        }, {
          key: "onSaveSnack1",
          value: function onSaveSnack1() {
            this.analyzeChoAndFatSnack1();
            this.analyzeChoAndFatTotal();
            this.map[this.foodCardForm.controls['food_name'].value] = this.foodCardForm.value;
          }
        }, {
          key: "onSaveSnack2",
          value: function onSaveSnack2() {
            this.analyzeChoAndFatSnack2();
            this.analyzeChoAndFatTotal();
            this.map[this.foodCardForm.controls['food_name'].value] = this.foodCardForm.value;
          }
        }, {
          key: "onSaveSnack3",
          value: function onSaveSnack3() {
            this.analyzeChoAndFatSnack3();
            this.analyzeChoAndFatTotal();
            this.map[this.foodCardForm.controls['food_name'].value] = this.foodCardForm.value;
          }
        }, {
          key: "onSaveOthers",
          value: function onSaveOthers() {
            this.analyzeChoAndFatOthers();
            this.analyzeChoAndFatTotal();
            this.map[this.foodCardForm.controls['food_name'].value] = this.foodCardForm.value;
          }
        }, {
          key: "AddBreakfast",
          value: function AddBreakfast() {
            var number = this.anArrayBreakfast.length + 1;
            var currentFood = {
              food_name: this.foodCardForm.controls['food_name'].value,
              category: this.foodCardForm.controls['category'].value,
              unit: this.foodCardForm.controls['unit'].value,
              qty: this.foodCardForm.controls['qty'].value,
              cho: this.foodCardForm.controls['cho'].value,
              fat: this.foodCardForm.controls['fat'].value
            };
            this.anArrayBreakfast.push(currentFood);
            this.analyzeChoAndFatBreakfast();
            this.analyzeChoAndFatTotal();
            this.ResetBreakfast();
          }
        }, {
          key: "AddLunch",
          value: function AddLunch() {
            var number = this.anArrayLunch.length + 1;
            var currentFood = {
              food_name: this.foodCardForm.controls['food_name'].value,
              category: this.foodCardForm.controls['category'].value,
              unit: this.foodCardForm.controls['unit'].value,
              qty: this.foodCardForm.controls['qty'].value,
              cho: this.foodCardForm.controls['cho'].value,
              fat: this.foodCardForm.controls['fat'].value
            };
            this.anArrayLunch.push(currentFood);
            this.analyzeChoAndFatLunch();
            this.analyzeChoAndFatTotal();
            this.ResetLunch();
          }
        }, {
          key: "AddDinner",
          value: function AddDinner() {
            var number = this.anArrayDinner.length + 1;
            var currentFood = {
              food_name: this.foodCardForm.controls['food_name'].value,
              category: this.foodCardForm.controls['category'].value,
              unit: this.foodCardForm.controls['unit'].value,
              qty: this.foodCardForm.controls['qty'].value,
              cho: this.foodCardForm.controls['cho'].value,
              fat: this.foodCardForm.controls['fat'].value
            };
            this.anArrayDinner.push(currentFood);
            this.analyzeChoAndFatDinner();
            this.analyzeChoAndFatTotal();
            this.ResetDinner();
          }
        }, {
          key: "AddSnack1",
          value: function AddSnack1() {
            var number = this.anArraySnack1.length + 1;
            var currentFood = {
              food_name: this.foodCardForm.controls['food_name'].value,
              category: this.foodCardForm.controls['category'].value,
              unit: this.foodCardForm.controls['unit'].value,
              qty: this.foodCardForm.controls['qty'].value,
              cho: this.foodCardForm.controls['cho'].value,
              fat: this.foodCardForm.controls['fat'].value
            };
            this.anArraySnack1.push(currentFood);
            this.analyzeChoAndFatSnack1();
            this.analyzeChoAndFatTotal();
            this.ResetSnack1();
          }
        }, {
          key: "AddSnack2",
          value: function AddSnack2() {
            var number = this.anArraySnack2.length + 1;
            var currentFood = {
              food_name: this.foodCardForm.controls['food_name'].value,
              category: this.foodCardForm.controls['category'].value,
              unit: this.foodCardForm.controls['unit'].value,
              qty: this.foodCardForm.controls['qty'].value,
              cho: this.foodCardForm.controls['cho'].value,
              fat: this.foodCardForm.controls['fat'].value
            };
            this.anArraySnack2.push(currentFood);
            this.analyzeChoAndFatSnack2();
            this.analyzeChoAndFatTotal();
            this.ResetSnack2();
          }
        }, {
          key: "AddSnack3",
          value: function AddSnack3() {
            var number = this.anArraySnack3.length + 1;
            var currentFood = {
              food_name: this.foodCardForm.controls['food_name'].value,
              category: this.foodCardForm.controls['category'].value,
              unit: this.foodCardForm.controls['unit'].value,
              qty: this.foodCardForm.controls['qty'].value,
              cho: this.foodCardForm.controls['cho'].value,
              fat: this.foodCardForm.controls['fat'].value
            };
            this.anArraySnack3.push(currentFood);
            this.analyzeChoAndFatSnack3();
            this.analyzeChoAndFatTotal();
            this.ResetSnack3();
          }
        }, {
          key: "AddOthers",
          value: function AddOthers() {
            var number = this.anArrayOthers.length + 1;
            var currentFood = {
              food_name: this.foodCardForm.controls['food_name'].value,
              category: this.foodCardForm.controls['category'].value,
              unit: this.foodCardForm.controls['unit'].value,
              qty: this.foodCardForm.controls['qty'].value,
              cho: this.foodCardForm.controls['cho'].value,
              fat: this.foodCardForm.controls['fat'].value
            };
            this.anArrayOthers.push(currentFood);
            this.analyzeChoAndFatOthers();
            this.analyzeChoAndFatTotal();
            this.ResetOthers();
          }
        }, {
          key: "ResetBreakfast",
          value: function ResetBreakfast() {
            this.foodCardForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
              food_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              category: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              unit: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              qty: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              cho: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              fat: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
            });
            this.mainForm = this.formBuilder.group({
              food_name: [''],
              category: [''],
              unit: [''],
              qty: [''],
              cho: [''],
              fat: ['']
            });
          }
        }, {
          key: "ResetLunch",
          value: function ResetLunch() {
            this.foodCardForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
              food_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              category: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              unit: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              qty: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              cho: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              fat: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
            });
            this.mainForm = this.formBuilder.group({
              food_name: [''],
              category: [''],
              unit: [''],
              qty: [''],
              cho: [''],
              fat: ['']
            });
          }
        }, {
          key: "ResetDinner",
          value: function ResetDinner() {
            this.foodCardForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
              food_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              category: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              unit: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              qty: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              cho: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              fat: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
            });
            this.mainForm = this.formBuilder.group({
              food_name: [''],
              category: [''],
              unit: [''],
              qty: [''],
              cho: [''],
              fat: ['']
            });
          }
        }, {
          key: "ResetSnack1",
          value: function ResetSnack1() {
            this.foodCardForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
              food_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              category: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              unit: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              qty: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              cho: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              fat: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
            });
            this.mainForm = this.formBuilder.group({
              food_name: [''],
              category: [''],
              unit: [''],
              qty: [''],
              cho: [''],
              fat: ['']
            });
          }
        }, {
          key: "ResetSnack2",
          value: function ResetSnack2() {
            this.foodCardForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
              food_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              category: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              unit: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              qty: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              cho: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              fat: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
            });
            this.mainForm = this.formBuilder.group({
              food_name: [''],
              category: [''],
              unit: [''],
              qty: [''],
              cho: [''],
              fat: ['']
            });
          }
        }, {
          key: "ResetSnack3",
          value: function ResetSnack3() {
            this.foodCardForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
              food_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              category: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              unit: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              qty: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              cho: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              fat: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
            });
            this.mainForm = this.formBuilder.group({
              food_name: [''],
              category: [''],
              unit: [''],
              qty: [''],
              cho: [''],
              fat: ['']
            });
          }
        }, {
          key: "ResetOthers",
          value: function ResetOthers() {
            this.foodCardForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
              food_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              category: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              unit: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              qty: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              cho: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
              fat: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
            });
            this.mainForm = this.formBuilder.group({
              food_name: [''],
              category: [''],
              unit: [''],
              qty: [''],
              cho: [''],
              fat: ['']
            });
          }
        }, {
          key: "storeToDatabase",
          value: function storeToDatabase() {
            var _this2 = this;

            var _iterator = _createForOfIteratorHelper(this.anArrayBreakfast),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var val = _step.value;
                var uniqueKey = this.myDate + "_Breakfast_" + String(val.food_name).toLowerCase().replace(/\-/g, " ").replace(/\s+/g, ""); //remove spaces;
                //this uniqueKey is generated with date, category and food type(all remove space and camelcase), which will be unique in sql as key.

                this.db.addFood(uniqueKey, this.myDate, "BreakFast", val.food_name, val.unit, val.qty, val.cho, val.fat).then(function (res) {});
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            var _iterator2 = _createForOfIteratorHelper(this.anArrayLunch),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var val = _step2.value;

                var _uniqueKey = this.myDate + "_Lunch_" + String(val.food_name).toLowerCase().replace(/\-/g, " ").replace(/\s+/g, ""); //remove spaces;
                //this uniqueKey is generated with date, category and food type(all remove space and camelcase), which will be unique in sql as key.


                this.db.addFood(_uniqueKey, this.myDate, "Lunch", val.food_name, val.unit, val.qty, val.cho, val.fat).then(function (res) {});
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            var _iterator3 = _createForOfIteratorHelper(this.anArrayDinner),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var val = _step3.value;

                var _uniqueKey2 = this.myDate + "_Dinner_" + String(val.food_name).toLowerCase().replace(/\-/g, " ").replace(/\s+/g, ""); //remove spaces;
                //this uniqueKey is generated with date, category and food type(all remove space and camelcase), which will be unique in sql as key.


                this.db.addFood(_uniqueKey2, this.myDate, "Dinner", val.food_name, val.unit, val.qty, val.cho, val.fat).then(function (res) {});
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            var _iterator4 = _createForOfIteratorHelper(this.anArraySnack1),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var val = _step4.value;

                var _uniqueKey3 = this.myDate + "_Snack1_" + String(val.food_name).toLowerCase().replace(/\-/g, " ").replace(/\s+/g, ""); //remove spaces;
                //this uniqueKey is generated with date, category and food type(all remove space and camelcase), which will be unique in sql as key.


                this.db.addFood(_uniqueKey3, this.myDate, "Snack1", val.food_name, val.unit, val.qty, val.cho, val.fat).then(function (res) {});
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            var _iterator5 = _createForOfIteratorHelper(this.anArraySnack2),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var val = _step5.value;

                var _uniqueKey4 = this.myDate + "_Snack2_" + String(val.food_name).toLowerCase().replace(/\-/g, " ").replace(/\s+/g, ""); //remove spaces;
                //this uniqueKey is generated with date, category and food type(all remove space and camelcase), which will be unique in sql as key.


                this.db.addFood(_uniqueKey4, this.myDate, "Snack2", val.food_name, val.unit, val.qty, val.cho, val.fat).then(function (res) {});
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            var _iterator6 = _createForOfIteratorHelper(this.anArraySnack3),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var val = _step6.value;

                var _uniqueKey5 = this.myDate + "_Snack3_" + String(val.food_name).toLowerCase().replace(/\-/g, " ").replace(/\s+/g, ""); //remove spaces;
                //this uniqueKey is generated with date, category and food type(all remove space and camelcase), which will be unique in sql as key.


                this.db.addFood(_uniqueKey5, this.myDate, "Snack3", val.food_name, val.unit, val.qty, val.cho, val.fat).then(function (res) {});
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            var _iterator7 = _createForOfIteratorHelper(this.anArrayOthers),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var val = _step7.value;

                var _uniqueKey6 = this.myDate + "_Others_" + String(val.food_name).toLowerCase().replace(/\-/g, " ").replace(/\s+/g, ""); //remove spaces;
                //this uniqueKey is generated with date, category and food type(all remove space and camelcase), which will be unique in sql as key.


                this.db.addFood(_uniqueKey6, this.myDate, "Others", val.food_name, val.unit, val.qty, val.cho, val.fat).then(function (res) {});
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }

            this.dailyrecorddb.addRecord(this.myDate, this.curChoTotal, this.curFatTotal);
            this.dailyrecorddb.fetchRecords().subscribe(function (item) {
              _this2.Data = item;

              for (var i = 0; i <= item.length; i++) {
                console.log('james itemp2：' + item[i].id);
              }
            });
          } // analyzing part:

        }, {
          key: "analyzeChoAndFatBreakfast",
          value: function analyzeChoAndFatBreakfast() {
            var _this3 = this;

            this.curChoBreakfast = 0;
            this.curFatBreakfast = 0;
            this.anArrayBreakfast.forEach(function (element) {
              _this3.curChoBreakfast = _this3.curChoBreakfast + Number(element.cho);
              _this3.curFatBreakfast = _this3.curFatBreakfast + Number(element.fat);
            });
          }
        }, {
          key: "analyzeChoAndFatLunch",
          value: function analyzeChoAndFatLunch() {
            var _this4 = this;

            this.curChoLunch = 0;
            this.curFatLunch = 0;
            this.anArrayLunch.forEach(function (element) {
              _this4.curChoLunch = _this4.curChoLunch + Number(element.cho);
              _this4.curFatLunch = _this4.curFatLunch + Number(element.fat);
            });
          }
        }, {
          key: "analyzeChoAndFatDinner",
          value: function analyzeChoAndFatDinner() {
            var _this5 = this;

            this.curChoDinner = 0;
            this.curFatDinner = 0;
            this.anArrayDinner.forEach(function (element) {
              _this5.curChoDinner = _this5.curChoDinner + Number(element.cho);
              _this5.curFatDinner = _this5.curFatDinner + Number(element.fat);
            });
          }
        }, {
          key: "analyzeChoAndFatSnack1",
          value: function analyzeChoAndFatSnack1() {
            var _this6 = this;

            this.curChoSnack1 = 0;
            this.curFatSnack1 = 0;
            this.anArraySnack1.forEach(function (element) {
              _this6.curChoSnack1 = _this6.curChoSnack1 + Number(element.cho);
              _this6.curFatSnack1 = _this6.curFatSnack1 + Number(element.fat);
            });
          }
        }, {
          key: "analyzeChoAndFatSnack2",
          value: function analyzeChoAndFatSnack2() {
            var _this7 = this;

            this.curChoSnack2 = 0;
            this.curFatSnack2 = 0;
            this.anArraySnack2.forEach(function (element) {
              _this7.curChoSnack2 = _this7.curChoSnack2 + Number(element.cho);
              _this7.curFatSnack2 = _this7.curFatSnack2 + Number(element.fat);
            });
          }
        }, {
          key: "analyzeChoAndFatSnack3",
          value: function analyzeChoAndFatSnack3() {
            var _this8 = this;

            this.curChoSnack3 = 0;
            this.curFatSnack3 = 0;
            this.anArraySnack3.forEach(function (element) {
              _this8.curChoSnack3 = _this8.curChoSnack3 + Number(element.cho);
              _this8.curFatSnack3 = _this8.curFatSnack3 + Number(element.fat);
            });
          }
        }, {
          key: "analyzeChoAndFatOthers",
          value: function analyzeChoAndFatOthers() {
            var _this9 = this;

            this.curChoOthers = 0;
            this.curFatOthers = 0;
            this.anArrayOthers.forEach(function (element) {
              _this9.curChoOthers = _this9.curChoOthers + Number(element.cho);
              _this9.curFatOthers = _this9.curFatOthers + Number(element.fat);
            });
          }
        }, {
          key: "analyzeChoAndFatTotal",
          value: function analyzeChoAndFatTotal() {
            this.curChoTotal = 0;
            this.curFatTotal = 0;
            this.curChoTotal = this.curChoBreakfast + this.curChoLunch + this.curChoDinner + this.curChoSnack1 + this.curChoSnack2 + this.curChoSnack3 + this.curChoOthers;
            this.curFatTotal = this.curFatBreakfast + this.curFatLunch + this.curFatDinner + this.curFatSnack1 + this.curFatSnack2 + this.curFatSnack3 + this.curFatOthers;
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _services_database_service__WEBPACK_IMPORTED_MODULE_8__["DatabaseService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _services_dailyfood_service__WEBPACK_IMPORTED_MODULE_4__["Dailyfoodservice"]
        }, {
          type: _services_record_service__WEBPACK_IMPORTED_MODULE_7__["RecordService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      HomePage.propDecorators = {
        choinput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ["choinput"]
        }]
      };
      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/home.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home.page.scss */
        "./src/app/Home/home.page.scss"))["default"]]
      })], HomePage); // pod useful command: 🍓
      // https://github.com/ionic-team/capacitor/issues/1676
      // https://github.com/ionic-team/capacitor/issues/1755
      // sudo npm install -g cordova ionic
      // /Users/kaiyanliu/Desktop/diet-application/ios/App
      // kaiyanliu@Kaiyans-iMac App % ls
      // App		App.xcodeproj	App.xcworkspace	Podfile		Podfile.lock	Pods		public
      // kaiyanliu@Kaiyans-iMac App % 
      // section for database
      // storeData() {
      // this.db.addFood(
      //   this.myDate,
      //   this.mainForm.value.category,
      //   this.mainForm.value.food_name,
      //   this.mainForm.value.unit,
      //   this.mainForm.value.qty,
      //   this.mainForm.value.cho,
      //   this.mainForm.value.fat
      // ).then((res) => {
      // })
      // console.log("this.db.food????   " + this.db.getFoods());
      // this.db.addFood(
      //   08022029,
      //   "this.mainForm.value.category",
      //   "this.mainForm.value.food_name",
      //   "this.mainForm.value.unit",
      //   "this.mainForm.value.qty",
      //   "this.mainForm.value.cho",
      //   "this.mainForm.value.fat"
      // ).then((res) => {
      // })
      // }

      /***/
    },

    /***/
    "./src/app/services/dailyfood.service.ts":
    /*!***********************************************!*\
      !*** ./src/app/services/dailyfood.service.ts ***!
      \***********************************************/

    /*! exports provided: Dailyfoodservice */

    /***/
    function srcAppServicesDailyfoodServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Dailyfoodservice", function () {
        return Dailyfoodservice;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/sqlite-porter/ngx */
      "./node_modules/@ionic-native/sqlite-porter/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _services_database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/database.service */
      "./src/app/services/database.service.ts");

      var Dailyfoodservice = /*#__PURE__*/function () {
        function Dailyfoodservice(dbservice, httpClient, sqlPorter) {
          _classCallCheck(this, Dailyfoodservice);

          this.dbservice = dbservice;
          this.httpClient = httpClient;
          this.sqlPorter = sqlPorter;
          this.foodsList = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        }

        _createClass(Dailyfoodservice, [{
          key: "fetchFoods",
          value: function fetchFoods() {
            return this.foodsList.asObservable();
          } // Render data

        }, {
          key: "getData",
          value: function getData() {
            var _this10 = this;

            this.httpClient.get('assets/data.sql', {
              responseType: 'text'
            }).subscribe(function (data) {
              _this10.sqlPorter.importSqlToDb(_this10.dbservice.getdb(), data).then(function (_) {
                _this10.getFoods();

                _this10.dbservice.getDbReady().next(true);
              })["catch"](function (error) {
                return console.error(error);
              });
            });
          } // Get list

        }, {
          key: "getFoods",
          value: function getFoods() {
            var _this11 = this;

            return this.dbservice.getdb().executeSql('SELECT * FROM dailyfoodtable', []).then(function (res) {
              var items = [];

              if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                  items.push({
                    id: res.rows.item(i).id,
                    uuid: res.rows.item(i).uuid,
                    timeframe: res.rows.item(i).timeframe,
                    category: res.rows.item(i).category,
                    food_name: res.rows.item(i).food_name,
                    unit: res.rows.item(i).unit,
                    qty: res.rows.item(i).qty,
                    cho: res.rows.item(i).cho,
                    fat: res.rows.item(i).fat
                  });
                }
              }

              _this11.foodsList.next(items);
            });
          } // Add

        }, {
          key: "addFood",
          value: function addFood(uuid, timeframe, category, food_name, unit, qty, cho, fat) {
            var _this12 = this;

            var data = [uuid, timeframe, category, food_name, unit, qty, cho, fat];
            console.log('lol2' + data);
            return this.dbservice.getdb().executeSql('INSERT INTO dailyfoodtable (uuid, timeframe, category, food_name, unit,qty,cho,fat) VALUES (?, ?, ?, ?, ?, ?, ?,?)', data).then(function (res) {
              _this12.getFoods();
            });
          } // Get single object

        }, {
          key: "getFood",
          value: function getFood(id) {
            return this.dbservice.getdb().executeSql('SELECT * FROM dailyfoodtable WHERE id = ?', [id]).then(function (res) {
              return {
                id: res.rows.item(0).id,
                uuid: res.rows.item(0).uuid,
                timeframe: res.rows.item(0).timeframe,
                category: res.rows.item(0).category,
                food_name: res.rows.item(0).food_name,
                unit: res.rows.item(0).unit,
                qty: res.rows.item(0).qty,
                cho: res.rows.item(0).cho,
                fat: res.rows.item(0).fat
              };
            });
          } // Delete

        }, {
          key: "deleteFood",
          value: function deleteFood(uuid) {
            var _this13 = this;

            var q = "DELETE FROM dailyfoodtable WHERE uuid = " + '"' + uuid + '"';
            return this.dbservice.getdb().executeSql(q).then(function (_) {
              _this13.getFoods();
            });
          }
        }]);

        return Dailyfoodservice;
      }();

      Dailyfoodservice.ctorParameters = function () {
        return [{
          type: _services_database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_4__["SQLitePorter"]
        }];
      };

      Dailyfoodservice = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], Dailyfoodservice); // Update
      // updateFood(id, food: Food) {
      //   let data = [food.timeframe, food.category, food.food_name, food.unit,food.qty,food.cho,food.fat ];
      //   return this.storage.executeSql(`UPDATE dailyfoodtable SET, timeframe=?, food_name = ?, unit = ? qty = ?, cho=?, fat=? WHERE id = ${id}`, data)
      //   .then(data => {
      //     this.getFoods();
      //   })
      // }

      /***/
    }
  }]);
})();
//# sourceMappingURL=Home-home-module-es5.js.map