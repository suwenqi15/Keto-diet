(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Record-record-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Record/record.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Record/record.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n   <ion-header [translucent]=\"true\">\n    <ion-toolbar>\n      <ion-title>\n        Diet Record\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n <ion-content>\n  <ion-segment [(ngModel)]=\"selectTabs\" color=\"primary\" >\n   <ion-segment-button value=\"table view\">\n     <ion-label>Table View</ion-label>\n     <ion-icon name=\"calendar-outline\"></ion-icon>\n   </ion-segment-button>\n   <ion-segment-button value=\"chart\">\n     <ion-label>Chart</ion-label>\n     <ion-icon name=\"bar-chart-outline\"></ion-icon>\n   </ion-segment-button>\n   <ion-segment-button value=\"export\">\n     <ion-label>Export</ion-label>\n     <ion-icon name=\"exit-outline\"></ion-icon>\n   </ion-segment-button>\n </ion-segment>\n <div [hidden]=\"selectTabs != 'table view'\">\n\n\n  <!-- pagination -->\n\n  <!-- <ion-button  (click)=\"loaddb()\" size = \"small\" class = \"center\" color=\"primary\">Load From Database</ion-button> -->\n\n  <ion-grid>\n  <ion-row class=\"header-row\">\n   \n  \n    <ion-col size=\"4\" class =\"label\">\n      Date\n    </ion-col>\n    <ion-col size=\"4\" class =\"label\">\n     Daily CHO\n    </ion-col>\n    <ion-col size=\"4\" class =\"label\">\n     Daily Fat\n    </ion-col>\n  </ion-row>\n\n\n\n\n\n\n  <ion-row *ngFor=\"let item of Data; let i = index;\" class=\"data-row\" >\n    \n    <ion-col size=\"4\" class =\"textlabel\">\n      {{ item.timeframe }}\n    </ion-col>\n    <ion-col size=\"4\" class =\"textlabel\" >\n      {{ item.dailycho  }}\n    </ion-col>\n    <ion-col size=\"4\" class =\"textlabel\">\n      {{ item.dailyfat}}\n    </ion-col>\n    \n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"12\" class=\"ion-text-center\">\n      {{ page + 1 }} of {{ totalPages }}\n    </ion-col>\n  </ion-row>\n  \n\n  \n  <ion-row>\n    <ion-col size=\"2\">\n      <ion-button fill=\"clear\" (click)=\"goFirst()\">\n        <ion-icon name=\"play-back\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"2\">\n      <ion-button fill=\"clear\" (click)=\"prevPage()\">\n        <ion-icon name=\"chevron-back\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-col>\n \n    <ion-col size=\"4\" class=\"ion-text-center\">\n      <ion-select interface=\"popover\" [(ngModel)]=\"resultsCount\" (ionChange)=\"loadtableData()\">\n        <ion-select-option [value]=\"5\">5</ion-select-option>\n        <ion-select-option [value]=\"10\">10</ion-select-option>\n        <ion-select-option [value]=\"25\">25</ion-select-option>\n        <ion-select-option [value]=\"50\">50</ion-select-option>\n      </ion-select>\n    </ion-col>\n \n    <ion-col size=\"2\">\n      <ion-button fill=\"clear\" (click)=\"nextPage()\">\n        <ion-icon name=\"chevron-forward\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"2\">\n      <ion-button fill=\"clear\" (click)=\"goLast()\">\n        <ion-icon name=\"play-forward\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  \n</ion-grid>\n\n<!--   \n  <ion-grid>\n    <ion-row>\n      <ion-col class =\"label\">\n        Date\n      </ion-col>\n      <ion-col class =\"label\">\n        CHO\n      </ion-col>\n      <ion-col class =\"label\">\n        Fat\n      </ion-col>\n      \n    </ion-row>\n    <ion-row>\n      <ion-col class =\"textlabel\">\n        13/08/2020\n      </ion-col>\n      <ion-col class =\"textlabel\">\n        100\n      </ion-col>\n      <ion-col class =\"textlabel\">\n        50\n      </ion-col>\n      \n    </ion-row>\n\n    <ion-row>\n      <ion-col class =\"textlabel\">\n        14/08/2020\n      </ion-col>\n      <ion-col class =\"textlabel\">\n        600\n      </ion-col>\n      <ion-col class =\"textlabel\">\n        50\n      </ion-col>\n      \n    </ion-row>\n   \n\n    <ion-row>\n      <ion-col class =\"textlabel\">\n        17/08/2020\n      </ion-col>\n      <ion-col class =\"textlabel\">\n        600\n      </ion-col>\n      <ion-col class =\"textlabel\">\n        50\n      </ion-col>\n      \n    </ion-row>\n    </ion-grid> -->\n    \n    \n\n\n</div>\n\n<div [hidden]=\"selectTabs != 'chart'\">\n\n  \n\n</div>\n\n\n<div [hidden]=\"selectTabs != 'export'\">\n<!-- \n  <ion-buttons slot=\"start\">\n    <ion-button (click)=\"exportCSV()\">\n      Export\n    </ion-button>\n  </ion-buttons>  -->\n\n  <!-- <table border=\"1\" class=\"data-table\">\n    <tr>\n      <td *ngFor=\"let header of headerRow\" text-center><b>{{ header }}</b></td>\n    </tr>\n    <tr *ngFor=\"let row of csvData; let i = index\">\n      <td *ngFor=\"let data of row; let j = index; trackBy: trackByFn\" class=\"data-col \">\n        <ion-input type=\"text\" [(ngModel)]=\"csvData[i][j]\"></ion-input>\n      </td>\n    </tr>\n  </table> -->\n\n  <ion-item lines=\"none\">\n    <ion-label>Start Date</ion-label>\n    <ion-datetime class=time displayFormat=\"MM-DD-YYYY\" placeholder=\"Today\"></ion-datetime>\n</ion-item>\n\n\n<ion-item lines=\"none\">\n  <ion-label>End Date</ion-label>\n  <ion-datetime class=time displayFormat=\"MM-DD-YYYY\" placeholder=\"Today\"></ion-datetime>\n</ion-item>\n\n\n\n<!-- <ion-button  class = \"center\" (click)=\"sendEmail()\" size = \"small\" class = \"center\" color=\"primary\">Send Email </ion-button> -->\n\n\n</div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/Record/record-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/Record/record-routing.module.ts ***!
  \*************************************************/
/*! exports provided: RecordRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordRoutingModule", function() { return RecordRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _record_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./record.page */ "./src/app/Record/record.page.ts");




const routes = [
    {
        path: '',
        component: _record_page__WEBPACK_IMPORTED_MODULE_3__["RecordPage"],
    }
];
let RecordRoutingModule = class RecordRoutingModule {
};
RecordRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], RecordRoutingModule);



/***/ }),

/***/ "./src/app/Record/record.module.ts":
/*!*****************************************!*\
  !*** ./src/app/Record/record.module.ts ***!
  \*****************************************/
/*! exports provided: RecordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordModule", function() { return RecordModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _record_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./record.page */ "./src/app/Record/record.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _record_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./record-routing.module */ "./src/app/Record/record-routing.module.ts");
/* harmony import */ var _foodcard_foodcard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../foodcard/foodcard.component */ "./src/app/foodcard/foodcard.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../card/card.component */ "./src/app/card/card.component.ts");










let RecordModule = class RecordModule {
};
RecordModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _record_routing_module__WEBPACK_IMPORTED_MODULE_7__["RecordRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ],
        declarations: [_record_page__WEBPACK_IMPORTED_MODULE_5__["RecordPage"],
            _foodcard_foodcard_component__WEBPACK_IMPORTED_MODULE_8__["FoodCardComponent"],
            _card_card_component__WEBPACK_IMPORTED_MODULE_9__["CardComponent"]
        ]
    })
], RecordModule);



/***/ }),

/***/ "./src/app/Record/record.page.scss":
/*!*****************************************!*\
  !*** ./src/app/Record/record.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-row {\n  font-weight: 500;\n  border-bottom: 2px solid #000;\n}\n\n.data-row {\n  border-bottom: 1px solid #000;\n}\n\n.label {\n  font-weight: bold;\n  text-align: center;\n}\n\n.textlabel {\n  text-align: center;\n}\n\n.center {\n  margin-left: auto;\n  margin-right: auto;\n  width: 200px;\n  margin-top: 27px;\n  display: block !important;\n}\n\n.data-table {\n  min-width: 100px;\n}\n\n.data-col {\n  background: #f0f0f0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUmVjb3JkL3JlY29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsNkJBQTZCO0FBQy9COztBQUdBO0VBQ0UsNkJBQTZCO0FBQS9COztBQU1BO0VBQVEsaUJBQWdCO0VBQ3BCLGtCQUFrQjtBQUZ0Qjs7QUFPQTtFQUNJLGtCQUFrQjtBQUp0Qjs7QUFXRTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFSN0I7O0FBWUU7RUFDRSxnQkFBZ0I7QUFUcEI7O0FBYUU7RUFDRSxtQkFBbUI7QUFWdkIiLCJmaWxlIjoic3JjL2FwcC9SZWNvcmQvcmVjb3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItcm93IHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XG59XG5cblxuLmRhdGEtcm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG59XG5cblxuXG5cbi5sYWJlbCB7Zm9udC13ZWlnaHQ6Ym9sZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG4gIH1cblxuXG4udGV4dGxhYmVsIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG4gIH1cblxuXG5cblxuICAuY2VudGVye1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luLXRvcDogMjdweDtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG4gIFxuXG4gIC5kYXRhLXRhYmxlIHtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xuXG4gIH1cblxuICAuZGF0YS1jb2wge1xuICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XG5cbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/Record/record.page.ts":
/*!***************************************!*\
  !*** ./src/app/Record/record.page.ts ***!
  \***************************************/
/*! exports provided: RecordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordPage", function() { return RecordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_record_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/record.service */ "./src/app/services/record.service.ts");




let RecordPage = class RecordPage {
    constructor(dailyrecorddb, http) {
        this.dailyrecorddb = dailyrecorddb;
        this.http = http;
        this.page = 0;
        this.totalPages = 10;
        this.resultsCount = 10;
        this.data = [];
        this.Data = [];
        this.sortKey = null;
        this.sortDirection = 0;
        // Chart Data
        this.chartData = [
            { data: [], label: 'Daily CHO' },
            { data: [], label: 'Daily Fat' },
            { data: [], label: 'CHO Benchmark' },
            { data: [], label: 'Fat Benchmark' }
        ];
        // Options
        this.chartOptions = {
            responsive: true,
            title: {
                display: true,
                text: 'Historic Stock price'
            },
            pan: {
                enabled: true,
                mode: 'xy'
            },
            zoom: {
                enabled: true,
                mode: 'xy'
            }
        };
        this.chartColors = [
            {
                borderColor: '#000000',
                backgroundColor: '#ff00ff'
            }
        ];
        this.chartType = 'line';
        this.showLegend = false;
        // For search
        this.stock = 'AAPL';
        //default segment
        this.selectTabs = 'table view';
        this.loadtableData();
        this.getchartData();
    }
    getchartData() {
        this.http.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${this.stock}?from=2018-03-12&to=2019-03-12`).subscribe(res => {
            const history = res['historical'];
            this.chartLabels = [];
            this.chartData[0].data = [];
            for (let entry of history) {
                this.chartLabels.push(entry.date);
                this.chartData[0].data.push(entry['close']);
            }
        });
    }
    // loadtableData(){
    //   this.dailyrecorddb.fetchRecords().subscribe(item => {
    //     this.Data = item
    //   });
    // }
    loadtableData() {
        this.http
            .get(`https://randomuser.me/api/?page=${this.page}&results=${this.resultsCount}`)
            .subscribe(res => {
            this.data = res['results'];
        });
    }
    nextPage() {
        this.page++;
        this.loadtableData();
    }
    prevPage() {
        this.page--;
        this.loadtableData();
    }
    goFirst() {
        this.page = 0;
        this.loadtableData();
    }
    goLast() {
        this.page = this.totalPages - 1;
        this.loadtableData();
    }
};
RecordPage.ctorParameters = () => [
    { type: _services_record_service__WEBPACK_IMPORTED_MODULE_3__["RecordService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RecordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-record',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./record.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Record/record.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./record.page.scss */ "./src/app/Record/record.page.scss")).default]
    })
], RecordPage);



/***/ })

}]);
//# sourceMappingURL=Record-record-module-es2015.js.map